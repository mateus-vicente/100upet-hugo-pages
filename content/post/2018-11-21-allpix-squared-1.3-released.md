---
title: "Allpix Squared 1.3 Released"
date: 2018-11-21T10:09:13+01:00
draft: false
---

We are happy to announce a new stable feature release **{{% allpix %}} version 1.3** with a total of **265 commits** added to the repository by **seven contributors** since version 1.2. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v1.3

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch10.html#x11-15200010.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

This release has seen some major improvements in different areas, an overview of the most important changes and new features is provided in the following:
<!--more-->

### Scaling and Shifting of Electric Fields

{{% allpix %}} now allows the usage of different electric field map sizes. Up till now, only electric fields of a single pixel unit cell could be used and TCAD simulations had to be adapted accordingly. Now, two new parameters of the ElectricFieldReader module, `field_scale` and `field_offset` allow to both scale (strech/shrink) and shift the field.

As an example, it is very common to only simulate a quarter of a pixel unit cell in TCAD (half-pitch in both x and y direction). These fields can now be used by instantiating the ElectricFieldReader module with below configuration. The field is scaled into 0.5 of the pixel cell and mirrored at the border to satisfy periodic boundary conditions.

```toml
[ElectricFieldReader]
model = "init"
field_scale = 0.5 0.5
```

Another possibility is that the pixel implants and thus the electric field are different e.g. for even and odd columns of the chip. In this case, the full TCAD simulation would span multiple pixels, e.g. a 2x2 pixel grid. This field can now be used by setting:

```toml
[ElectricFieldReader]
model = "init"
field_scale = 2.0 2.0
```

Some TCAD simulations might have been performed from pixel center to pixel center instead of edge-to-edge. The parameter `field_offset` allows to shift the field by a certain amount, given in fractions of the pixel pitch. As an example, a field simulated with 4x1 pixels, center-to-center in x and edge-to-edge in y could then be used with:

```toml
[ElectricFieldReader]
model = "init"
field_scale = 4.0 1.0
field_offset = 0.5 0.0
```

The resulting field within one pixel cell is shown in the following image, without any setting, with just scaling, and with scaling and offset applied:

{{< figure src="/img/field_scaling.png">}}

More information can be found in the manual and the [corresponding merge request !168](https://gitlab.cern.ch/allpix-squared/allpix-squared/merge_requests/168).

### Radioactive Decays

With version 1.3, {{% allpix %}} provides access to the radioactive decay functionality of Geant4. This functionality is implemented in the DepositionGeant4 module, which now understands radioisotopes as particles.

Radioactive sources can be simulated by setting their isotope name in the `particle_type` parameter, and optionally by setting the source energy to zero for a decay in rest.
Secondary ions from the decay are not further treated and the decay chain is interrupted, e.g. Am-241 only undergoes its alpha decay without the decay of its daughter nucleus of Np-237 being simulated. Daughter nuclei are removed form the simulation.
Currently, the following radioactive isotopes are supported: `Fe55`, `Am241`, `Sr90`, `Co60`, `Cs137`.

Ions can be used as particles by setting their atomic properties, i.e. the atomic number Z, the atomic mass A, their charge Q and the excitation energy E via the following syntax:

```toml
[DepositionGeant4]
particle_type = "ion/Z/A/Q/E"
```

where `Z` and `A` are unsigned integers, `Q` is a signed integer and `E` a floating point value with units, e.g. `13eV`.

More information can be found in the manual and the [merge request !154](https://gitlab.cern.ch/allpix-squared/allpix-squared/merge_requests/154).


### Improved Model Generation for Geant4

In previous versions of  {{% allpix %}}, the wrapper box around the detector model required by Geant4 was calculated in a simplified manner.
Since rotations are always defined around the center of the sensor, not the geometrical center of the model, the wrapper has simple been calculated as box around the sensor center, with equal size in both z directions.

However, when adding support layers this might lead to significant "empty space" of the wrapper on the sensor side, leading to issues when placing closely spaced detectors in the simulation. The volumes would overlap and Geant4 would not properly track particles in these overlap regions.

With v1.3, the generated geometry is tested for overlaps, and the detector model wrapper is calculated such that it takes the minimal space around the model while retaining the rotation center at the sensor center.

The changes are described in more detail in the corresponding [merge request !150](https://gitlab.cern.ch/allpix-squared/allpix-squared/merge_requests/150).


### Collection Electrodes in Detector Model

To extend the capabilities of the simulation tool, the size of the collection electrodes in the individual pixels can now be configured via the detector model. This can be useful e.g. when using TCAD fields where charges should only be picked up from this very spot at the sensor surface.
The new detector model parameter `implant_size` expects two parameter, interpreted as the implant size in the x-y-plane. The parameter is optional, and if not set, the implant size defaults to the full pixel pitch.

The SimpleTransferModule has a corresponding boolean option named `collect_from_implant` which enables or disables the collection from implants only. If set to false (default), the behavior of previous versions of {{% allpix %}} is maintained.


### Multi-threaded Mesh Converter

In order to speed up the conversion and interpolation of TCAD fields, the mesh converter has been overhauled and extended with multi-threading capabilities. The grid is now split into `n` regions along the x-axis, and each region is calculated in parallel. The parameter `n` is automatically determined form the system concurrency (number of cores) but can be changed by setting the `workers` parameter in the configuration file used for the conversion.

Apart from this, the converter has a plethora of minor improvements such as more permissive regular expression matching for field validity regions, which e.g. allow dashes (`-`) in region names. The executable has been renamed to `mesh_converter`, and the plotting tool can now be called with `mesh_plotter` - both reside in the same binary install directory as the main `allpix` executable.


### DetectorHistogrammer Extended

Often it is interesting to get an immediate feedback from the simulation on the chosen setup or the detector under study.
For this propose, the DetectorHistogrammer has previously provided a few histograms such as cluster size distributions.

With version 1.3, the module significantly extends this analysis. It uses the Monte Calro truth information available to calculate several observables such as residuals, efficiency or cluster charge, both as 1D distribution as well as 2D histogram, mapping the dependence of the observable as a function of the in-pixel impact position of the primary Monte Carlo particle.
An example showing the cluster size distribution and the in-pixel map for the same quantity is shown below.

{{< figure src="/img/histogrammer.png">}}

A "track resolution" can be specified via the module configuration, with which the known true Monte Carlo particle position is smeared in order to reproduce the effect of reference tracks with known position uncertainty.

A detailed list of all quantities analyzed is provided in the module description in the user manual.


### Other Notable Features and Improvements

* **Extend Line Graph Plotting Options** in the GenericPropagation module:
    The GenericPropagation module now allows to generate line plots including only charge carriers which have arrived at a sensor surface and have been stopped there. Together with the `integration_time` parameter, this allows to produce snapshot graphs at different timesteps and illuminate the question where the charge carriers collected up to this time have originated from.
* **Documentation Improvements**, especially the frequently-asked-questions section of the user manual has seen extension.
* **Rotation Angles of Detectors**
    Rotations provided in the geometry file are now active, right-handed rotations as claimed in the user manual. Before, there as a confusion with the different constructors of rotation matrices in ROOT and Geant4, eventually leading to a code with detectors rotated in a negative sense. To further clarify this, a sketch describing the coordinate transformations has been added to the user manual.
* **MCParticle Objects**
    Monte Carlo particles now store their arrival time as obtained from the DepositionGeant4 module.

## Development Visualization

An updated version of the development visualized is provided below:
{{< vimeo 302051022 >}}
