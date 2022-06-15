---
# SPDX-FileCopyrightText: 2020 CERN and the Allpix Squared authors
# SPDX-License-Identifier: CC-BY-4.0
title: "Allpix Squared 1.6 Released"
date: 2020-10-29T14:00:00+01:00
draft: false
---

We are happy to announce a new stable feature release **Allpix Squared version 1.6** with a total of **736 commits** added to the repository by **NINE contributors** since version 1.5. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v1.6.0

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch10.html#x11-21100010.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

Allpix Squared was enhanced by several new features and modules and has seen a large number of improvements. In the following, an overview over the most important changes and new features is provided:
<!--more-->

### New Module: CSADigitizer

A new module called `CSADigitizer` has been added, simulating a Charge Sensitive Amplifier (CSA) front end. The module uses pulses in individual pixels to compute the time-of-arrival (ToA) and time-over-threshold (ToT) of the corresponding pixel hit.

The CSA with a Krummenacher feedback can be parametrized either by supplying information on the electrical circuit, namely the Krummenacher current, the detector and output capacitances, the transconductance of the circuit and the temperature, or by simply defining the rise and feedback time constants of the circuit. The response pulse of the CSA is determined convolving the input pulse and the impulse response function of a transfer function. This transfer function is defined using the above-mentioned parameters.

While the response pulse can be stored as a graph, the ToA and ToT are determined and stored in the pixel hit. The latter is stored either in units of clock cycles of a user-defined clock or in units of nanoseconds, depending on the module configuration. For the determination of these values, the pulse and threshold polarity can be configured to be ignored. Furthermore, it is possible to store the integral of the pulse instead of the ToT value.

#### Respecting Charge Polarity

To enable proper handling of pulse polarities within the `CSADigitizer`, precedent objects had to be enhanced to carry information on the charge sign. This affects the objects `SensorCharge` and `PixelCharge`. Several modules were altered to maintain backwards compatibility.

Along these lines, the sign convention for induced charges during a transient propagation was inverted to match the one of the other modules and objects.

### Passive Materials

A new functionality adds the possibility to include passive materials in the simulation geometry. These objects are accounted for in the particle tracking via `Geant4`.

Passive objects are defined in the detector configuration, or geometry file, using the newly implemented `role` parameter: `role = "passive"`. By default, object are assigned an `active` role for backwards compatibility. All objects are defined by their shape (parameter `model`), their position and orientation, the material and a set of parameters defining the size of the object. Defining `mother_volumes` enables to place objects inside each other and with this to compile more complex structures consisting of these models.

By now, the three implemented models are "box", "cylinder" and "sphere". For boxes, solid or hollow boxes can be defined via the edge length and optionally by the wall thickness or the inner size. For a cylinder, the length and the outer radius are mandatory. Optionally, an inner radius can be defined as well as the angular range to be used. Spheres are defined by the outer and optionally the inner radius, as well as azimuthal and polar angle ranges.

All passive objects are visualized within the `VisualizationGeant4` module.

### Global and Local Timestamps

Time is implemented as a proper fourth dimension. A global and a local reference for timestamps are introduced and, wherever applicable, global and local timestamps are stored.

The global reference for time measurements is the beginning of the event, i.e. the start of the particle tracking through the setup. The local time reference is specific to a sensor and defined by the time of entry of the first primary particle of the event into the sensor. This means that secondary particles created within the sensor inherit the local time reference from their parent particles in order to have a uniform time reference in the sensor.

All charge objects as well as the `MCParticle` and `PixelHit` objects are stored with a global and a local timestamp and are amended with corresponding getter functions. The modules `DepositionGeant4` and `DepositionReader` correctly respect these rules, where for the latter timestamps have to be provided within the input data. The simplified `DepositionPointCharge` module sets all local and global timestamps of deposited charges to `0`.

In case of a defined `integration_time` for the charge carrier propagation as well as for the storage of `Pulse` objects, local timestamps are used.

### ToA calculation in `DefaultDigitizer`

The `DefaultDigitizer` was extended by a functionality of calculating and storing the time-of-arrival (ToA) if pulse information is available from the input data. As for the `CSADigitizer` module, the ToA can be stored either in units of clock cycles of a user-defined clock or in units of nanoseconds. For the former, a time-to-digital converter (TDC) with configurable resolution is simulated. 

### Diffusion prior to projection

The module `ProjectionPropagation` was augmented by the option to diffuse charge carriers prior to their projection, when they are deposited in a sensor region with no electric field.

As an approximation, one diffusion step equivalent to the `integration_time` is performed per set of charge carriers. Charges entering a region with a non-zero electric field are then placed at the edge of the electric field region and from here on projected to the sensor surface like charges deposited at this position. In prior versions, these charge carriers were ignored.

This feature improves the description of the behaviour of partially undepleted sensors at a low cost in terms of computing time.

### New Examples: EUDET-type Beam Telescope and Passive Materials

New example simulations have been added to the framework.

The example `eudet_telescope` implements the simulation of particles traversing a [EUDET-type beam telescope](https://link.springer.com/article/10.1140/epjti/s40485-016-0033-2). This showcases the above-mentioned diffusion prior to a projection, aiming for a good description of reference tracking detectors in a test beam setup while maintaining a low computing time.

The use of different passive object models is demonstrated in the example `passive_volume`.


### Other Notable Features and Improvements

* **Core:**
    * Add multiple checks to catch corner cases with invalid input data.
    * ConfigManager now checks if config file really is a valid file and not a directory.
* **Detector:** Allow for cylindrical holes in the support layer.
* **Module CorryvreckanWriter:** Store the material budget in the output geometry.
* **Module DepositionGeant4:**
    * The energy of a photon is now deposited at the end of its path instead along its track.
    * Improve cutoff time for individual events, now affecting both particle decays and particle tracking. Renaming of the corresponding parameter to `cutoff_time`.
* **Module DepositionPointCharge:**
    * Fix order of message dispatch (MCParticles first, DepositedCharges second).
    * `model` is now a required parameter without default value.
    * The `position` parameter now has `source_position` as alias to allow a more coherent syntax among deposition modules.
* **Module DepositionReader:** Make reading in timestamps and Monte-Carlo particles optional.
* **Module GenericPropagation:** Fix off-by-one error on axis labes for line graphs.
* **Module WeightingPotentialReader:** Use the correct pitch in 2D weighting potential plot.
* **Module PulseTransfer:** New histograms for accumulated pulse shapes, as well as overall improved plotting and correct axis labels stating the current induced.
* **Module DetectorHistogrammer:** Add histograms for total cluster, pixel and event charge distributions as well as detector sized residual maps.
* **Tools / MeshConverter:**
   * The TCAD MeshConverter tool now properly reports if a requested region is not found.
   * Prepared MeshConverter for the use of different input formats.
* **Build system & CI:**
   * Update included third party software (Cereal, Octree).
   * Require CMake version >= 3.6.3.
   * Now completely moved to the latest LCG_98python3 release.
   * Use the _Direct Acyclic Graph_ feature of gitlab to run pipeline jobs in parallel.
   * Update formatting to clang-format-10 and apply new clang-tidy rules.


## Development Visualization

An updated version of the development visualized is provided below:
{{< vimeo 473420167 >}}
