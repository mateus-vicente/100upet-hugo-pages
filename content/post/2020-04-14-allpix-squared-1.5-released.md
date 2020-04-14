---
title: "Allpix Squared 1.5 Released"
date: 2020-04-14T11:24:33+02:00
draft: true
---

We are happy to announce a new stable feature release **{{% allpix %}} version 1.5** with a total of **504 commits** added to the repository by **ten contributors** since version 1.4. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v1.5

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch10.html#x11-15200010.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

### Changes in the Core Development Team

Our main developer _Simon Spannagel_ recently moved from CERN to DESY, Germany, remaining within the field of silicon detector research.
We are thus very happy that he took his responsibilities with him and remains main developer of {{% allpix %}}.
In addition, we welcome _Paul Schütze_ (DESY) in the main developer team, who has been an early-stage adopter and long-term active developer.

## New Features, Changes, Improvements

This release has seen some major improvements in different areas, an overview of the most important changes and new features is provided in the following:
<!--more-->

### Publications

A **versioned Zenodo record** has been created for {{% allpix %}} to allow direct citation of the software alongside the relevant reference papers. The Zenodo entry can be found at:
[https://doi.org/10.5281/zenodo.3550935](https://doi.org/10.5281/zenodo.3550935)

Furthermore, a **new reference paper** has been published which showcases the usage of electrostatic fields from TCAD simulations to model partially depleted CMOS detectors in {{% allpix %}}. The paper has been published with Nucl. Inst. Meth. A and is available as **Open Access** at
[https://doi.org/10.1016/j.nima.2020.163784](https://doi.org/10.1016/j.nima.2020.163784)


### New Module: DepositionReader

A new module called `DepositionReader` has been added to the repository in order to allow reading in energy depositions in a sensor volume produced with a different program, e.g. with Geant4 in a standalone simulation of the respective experiment.
For this to work, the detector geometry for {{% allpix %}} should resemble the global positions of the detectors of interest in the original simulation.
The assignment of energy deposits to a specific detector in the {{% allpix %}} simulation is performed using the volume name of the detector element in the original simulation.

Only energy deposits within a valid volume are considered, i.e. where a matching detector with the same name can be found in the geometry setup.
The global coordinates are then translated to local coordinates of the given detector.

Track and parent ids of the individual particles which created the energy depositions allow to carry on some of the Monte Carlo particle information from the original simulation.
A parent id of zero should be used for the primary particle of the simulation, and all track ids have to be recorded before they can be used as parent id.
With the output_plots parameter activated, the module produces histograms of the total deposited charge per event for every sensor in units of kilo-electrons.

Currently two data sources are supported, ROOT trees and CSV text files.
A detailed description of the expected formats are provided in the [module's README file](https://gitlab.cern.ch/allpix-squared/allpix-squared/-/blob/master/src/modules/DepositionReader/README.md) or the [user manual](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manual.pdf).


### New Module: DatabaseWiter

A new module called `DatabaseWriter` enables writing of simulation output directly into a postgreSQL database.
This can be useful e.g. when fast I/O between applications is needed such as in real time visualization and/or analysis applications.

The database can hold information of all objects produced during the simulation, can store multiple simulations identified by individual run IDs.
Being a relational database, it also replicated the references between individual simulation objects which allows to fully reconstruct the history and Monte Carlo truth of each object.

This module is not built by default since it requires PostegreSQL as additional dependency. It is, however, included in the {{% allpix %}} Docker image.
More information can be found in the [module's README](https://gitlab.cern.ch/allpix-squared/allpix-squared/-/blob/master/src/modules/DatabaseWriter/README.md) or the [user manual](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manual.pdf).


### New Example: Simulate telescope, reconstruct in Corryvreckan

A new example has been added to demonstrate how to simulate a full beam telescope in {{% allpix %}} and how to store the simulation in a format readable by the [Corryvreckan reconstruction software](http://cern.ch/corryvreckan).

The setup used in this example is the reference simulation published in the [reference paper](https://doi.org/10.1016/j.nima.2018.06.020) for {{% allpix %}}.
It consists of six Timepix3 telescope planes featuring planar silicon sensors with a thickness of 300um.
In addition, another Timepix3 detector is placed as device under test (DUT) between the upstream arm (three planes) and downstream arm (three planes) of the telescope, with a sensor thickness of 50um.
All planes are randomly mis-aligned at the beginning of the simulation.

The energy deposition module uses Geant4 to replicate the beam conditions found in the CERN SPS North Area beam lines, i.e. a 120GeV Pion beam with a Gaussian width of about 2mm.
The simulation uses different processing paths for the telescope planes and the DUT in order to configure a different electric field, a different granularity for the charge propagation and different settings for the digitization in the front-end.

The results for both the telescope planes and the DUT are written to a ROOT output file using the CorryvreckanWriter module, defining the detector to be used as reference plane in the reconstruction and the DUT as detector to be excluded from the track fits. More information in these detector roles can be found in the [Corryvreckan user manual](https://project-corryvreckan.web.cern.ch/project-corryvreckan/usermanual/corryvreckan-manual.pdf), the example configuration is available in the {{% allpix %}} repository and user manual.


### PulseTransfer

The behavior of the **PulseTransfer** module has been slightly altered to extend its scope.
As before, the module sums all pulses from individual charge carriers if the propagated charge carriers provide pulse information themselves, e.g. generated by the TransientPropagation module.

However, if the propagated charges do not contain pulse information, the new version forms approximate pulses using the charge carrier arrival times at the pixel implants.
This necessitates the configuration of the time granularity via the `timestep` parameter as well as the region from which charge carriers are accepted via `max_depth_distance`, similar to the **SimpleTransfer** module.
It should be noted that this does not represent a time-resolved simulation of the signal formation but can only serve as approximation.


### CMake Targets available for {{% allpix %}}

With version 1.5, {{% allpix %}} exports its own CMake targets and installs them alongside the libraries and binaries when calling `make install`.
This allows third-party programs to directly link to the main library, the object library or individual module libraries.
The relevant libraries can be requested directly via the `FIND_PACKAGE(Allpix)` routine, the specification of minimum versions is also possible.

Using these exported targets it is now possible to build modules externally without the need to add them to the main repository or to include their build in the main program. It also enables compiling modules for already deployed versions of {{% allpix %}}, e.g. from CVMFS. The macros required to build a module are provided through the CMake modules and are automatically included when using the `FIND_PACKAGE(Allpix)` CMake command.

A detailed description of the procedure as well as example CMake code for building external modules can be found in the [user manual, section 9.2](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch9.html#x10-1840009.2) and in a [separate repository](https://gitlab.cern.ch/allpix-squared/external-modules).

As a brief reminder:
In order to load modules which have been compiled and installed in a different location than the ones shipped with the framework itself, the respective search path `library_directories` has to be configured properly in the {{% allpix %}} main configuration file as described in the user manual.


### Other Build System Improvements

The build system has seen many improvements to keep up with recent developments and requests from the user community:

* {{% allpix %}} uses CMake targets for all dependencies where available
* The CMake feature `link_what_you_use` is now used where available to automatically exclude statically linked libraries which are not directly used by the program.
* The default build of {{% allpix %}} uses the C++17 standard now
* The compiler flag `Werror` now is only used in the CI for the reference compilers. This provides a better out-of-the-box experience for users compiling {{% allpix %}} themselves with different, potentially newer, compiler versions with different warnings.
* Along with the updated CI path (see below), the formatting of the source code has changed from `clang-format-4` to `clang-format-8`.
* The setup file automatically prepared for installations of {{% allpix %}}, e.g. on CVMFS, now supports the `zsh` shell.


### Continuous Integration

In order to keep the CI running in the future and to not depend on custom deployments of compilers and dependencies, the CI has been updated to use the [LCG infrastructure](https://ep-dep-sft.web.cern.ch/document/lcg-releases) provided by the CERN EP-SFT group.
Currently, the `LCG_96b` version is used for Linux builds and `LCG_97` for macOS 10.15 Catalina.

Other changes to the CI are:

* The default build for LXPLUS has been switched to CentOS7 since no SLC6 nodes are available anymore.
* The Docker images have been updated with the latest dependencies ROOT 6.20 and Geant4 10.06
* The support for LLVM builds on SLC6 has been dropped since this compiler7OS combination is not available on LCG
* The macOS builds have been updated to 10.15 Catalina
* The CI now provides coverage reports for unit tests concerning the code in the framework core and objects library.


### Logging

Two new logging directives are available for module developers:

* `LOG_ONCE(level)` will print the message to be logged once and will not repeat even if the condition is met multiple times. This can be used to log warnings or messages e.g. from the `run()` function of a module
without flooding the log output with the same message for every event. The message is preceded by the information that further messages will be suppressed.
* `LOG_N(level, n)` will repeat the message for `n` times. The last message is preceded by the information that further messages will be suppressed.

More information can be found in the [user manual, chapter 5.7](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch5.html#x6-500005.7).


### Other Notable Features and Improvements

* A new detector model for **ALPIDE sensors** has been added to the repository
* **PixelHit:** The object now has a new member function `getPrimaryMCParticles()` which allows to directly filter Monte Carlo particles for primary particles, i.e. those entering the sensor from the outside.
* **MCParticle:** A new member function has been added which allows to calculate reference position in sensor center plane by interpolating start and end point of the trajectory.
* **CorryvreckanWriter:** The module has been updated for compatibility with the latest release for the [Corryvreckan reconstruction software](http://cern.ch/corryvreckan).
* **DepositionGeant4:** It is now possible to change the direction of the beam
* **DepositionGeant4:** Messages are now dispatched in the "correct" order in the simulation, i.e. MCTracks are emitted before MCParticles and DepositedCharge messages. This ensures that any module listening to all objects will receive them in the correct order for resolving dependencies between them.
* **DepositionPointCharge:** The module now allows to use the `position` parameter to set the starting position in case a scan is performed. Also, an issue of depositing energy in the sensor has been fixed when a scan was performed in combination with the `mip` model.
* **ROOTObjectReader:** This module now automatically appends the file extension `.root` to the file name if not present.
* **MeshConverter:** The default value for the neighbor search radius has been improved and the error message in case no valid neighbors could be found has been clarified.
* **Tools:** The Python example script for simulation data analysis has seen several improvements and is now Pythin3 compatible. Some improvements have been made for the script to recover configurations from data files.
* The configuration class has been improved an now allows to set default values for matrices.
