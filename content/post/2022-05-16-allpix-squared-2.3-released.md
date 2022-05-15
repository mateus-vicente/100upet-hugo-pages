---
title: "Allpix Squared 2.3 Released"
date: 2022-05-16T15:44:09+02:00
draft: false
---

We are happy to announce a new stable feature release **{{% allpix %}} version 2.3** with a total of **217 commits** added to the repository by **five contributors** since version 2.2. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v2.3.0

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch11.html#x12-26800011.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

Most notably, {{% allpix %}} was extended to handle other semiconductor sensor materials. In the following, an overview over this feature as well as other important changes and new features is provided:
<!--more-->

### Support for Semiconductor Sensor Materials

Following several requests from users and some very nice simulations from collaborators, {{% allpix %}} was extended to support a variety of semiconductor sensor materials.
The sensor material can be defined for each detector in their detector model file:

```ini
sensor_thickness = 700um
sensor_material = "gallium_arsenide"
```

or can be overwritten in the geometry file as described in the user manual.

The selected material is checked against a list of known materials, which currently comprise **Silicon**, **Gallium Arsenide**, **Germanium**, **Cadmium Telluride**, **Cadmium Zinc Telluride**, **Diamond** and **(4H) Silicon Carbide**.
The material is used by the `GeometryBuilderGeant4` module to construct the correct sensor material for the simulation of the interaction with the incident radiation in Geant4.
Furthermore, appropriate values for the charge creation (or ionization) energy as well as the Fano factor are used for the respective material.
These values can be overwritten via the module configuration of the selected deposition module.

An additional mobility model ("Ruck-Kino") specifically targeting Gallium Arsenide sensors has been added, but neither mobility nor recombination models are automatically selected.
These need to be configured by the user sch that they properly describe the charge carrier behavior in the simulated sensor.

A dedicated section has been added to the user manual, describing the implemented models and parameters for all available sensor materials.
Additions to the sensor material list or the available mobility models are very welcome.

In our last user workshop, [Petr Smolyanskiy presented](https://indico.cern.ch/event/1126306/contributions/4847038/) his Gallium-Arsenide simulations and also gave a brief introduction into what parameters need to be adjusted for running simulations with sensor materials other than silicon.


### Temperature scaling of Shockley-Read-Hall Recombination Rate

With this feature release, the recombination of charge carriers via the Shockley-Read-Hall mechanism properly depends on the temperature of the sensor [as described in literature](https://indico.cern.ch/event/1126306/contributions/4847038/):

$$\tau(N, T) = \tau(N) \left( \frac{300 K}{T}\right)^{3/2}$$

### Radiation-induced Trapping of Charge Carriers

With this feature release, {{% allpix %}} implements different models for charge carrier trapping due to radiation-induced damage.
These models can be selected in addition to the regular doping-concentration dependent recombination models (SRH, Auger).
The following models are currently available:

* Ljubljana / Kramberger effective trapping model (https://doi.org/10.1016/S0168-9002(01)01263-3)
* Dortmund / Krasel effective trapping model (https://doi.org/10.1109/TNS.2004.839096)
* An effective trapping model developed after data published by the CMS Tracker Group (https://doi.org/10.1088/1748-0221/11/04/P04023)
* Mandic effective trapping model (https://doi.org/10.1088/1748-0221/15/11/P11018)

Furthermore, a `custom` trapping model is also available that - similar to the custom mobility model - allows users to define their own models via formulas directly placed in the module configuration files.
A more detailed description on this as well as all predefined models can be found in the updated user manual.


### MeshConverter now supports Silvaco Fields

The MeshConverter tool can now read and interpolate field data exported from the Silvaco TCAD tool.
It expects two separate files as input, specifying the field vertices and field values respectively, both 2D and 3D fields are supported.


## Constant Mobility Model

For convenience, a new mobility model `constant` has been added.
While the same effect can also be achieved using the `custom` mobility model, this is more handy when it comes to simulating semiconductor materials with constant approximative charge carrier mobility such as Gallium Arsenide.



### Other Notable Features and Improvements

* **Core / CI**:
    * A new CI target `fmt:cc7-llvm-lint-diff` allows to only run the linter tool `clang-tidy` on the difference of the merge request files with respect to the target branch. This reduces the average running time of the job from 40min to below 40sec.
    * An issue with the upload of testing results to the CI has been discovered and fixed.
* **VisualizationGeant4**: A few issues with the Geant4 visualization have been resolved, such as the segmentation violation often appearing when exiting the UI or the printing of Geant4 information to the terminal despite the log level excluding this.
* **Python analysis example**: An additional check on the existence of the requested detector in simulation data has been added.
* **Manual**: Several typos as well as a few labels in formulas have been corrected.
