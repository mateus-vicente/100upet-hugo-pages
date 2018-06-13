---
title: "Allpix Squared 1.2 Released"
date: 2018-06-13T08:27:42+02:00
draft: false
---

We are happy to announce a new stable feature release **{{% allpix %}} version 1.2** with a total of **452 commits** added to the repository by **ten contributors** since version 1.1. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v1.2

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch10.html#x11-15200010.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

This release has seen some major improvements in different areas, an overview of the most important changes and new features is provided in the following:
<!--more-->

### Magnetic Fields & Lorentz Drift

As of Version v1.2, Allpix Squared supports magnetic fields penetrating the full detector setup.
Thanks to the work of **Paul Schütze, DESY**, we now have all components ready to perform Lorentz angle measurements and to gauge the effect of magnetic fields on different detector designs.

This feature consists of two components:

#### New module **MagneticFieldReader**

This module adds a magnetic field to the full volume, including the active sensors. By default, the magnetic field is turned off.

The magnetic field reader only provides constant magnetic fields, read in as a three-dimensional vector. The magnetic field is forwarded to the GeometryManager, enabling the magnetic field for the particle propagation via Geant4, as well as to all detectors for enabling a Lorentz drift during the charge propagation.

More details can be found in the module's [README.md](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/src/modules/MagneticFieldReader/README.md)

#### Lorentz Drift in **GenericPropagation**

The GenericPropagation module now takes into account possibly existing magnetic fields and calculates the additional drift induced by the Lorentz force on the charge carriers.

For the ProjectionPropagation module, an enabled magnetic field results in an error. For both modules, switches have been added which allow ignoring the magnetic field for individual detectors.

#### Export of the magnetic field to GEAR in the **LCIOWriter**

**Edoardo Rossi, DESY** has added support for exporting the configured magnetic field correctly into the GEAR geometry format used by EUTelescope. Tracking algorithms using information on the magnetic field should be able to pick up the field.

#### Documentation and Examples

This new feature has been documented in the user manual, section 4.5 and a [new example showcasing the use of magnetic fields](https://gitlab.cern.ch/allpix-squared/allpix-squared/tree/master/examples/magnetic_field) with two CMS pixel detectors has been added to the repository.


### Particle Tracks

A bug has been discovered in the way we handled Monte Carlo particle information from Geant4 in Allpix Squared when there were more than one initial particle. **Tobias Bisanz, Universität Göttingen** has taken this opportunity to not only rewrite the code retrieving the correct information from Geant4, but also added a new Allpix Squared object called **MCTrack** which links the **MCParticle** objects in the different detectors together.

With this information it is now possible to rebuild the complete production chain of secondaries in the whole setup simulated in Allpix Squared. As for the other objects, MCTrack objects contain hierarchy information and are linked to their parent objects.

More information on the new object type can be found in the [user manual, section 6.1](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch6.html#x7-600006.1).


### New Source Shapes

Following many requests to support different Geant4 particle sources than beams, **Thomas Billoud, Université de Montréal** has implemented more source shapes into the DepositionGeant4 module. Now, the following sources are available:

* `source_type = "beam"`: the default source, corresponding to the beam-shaped source used exclusively up to now.
* `source_type = "point"`: point-like source, radiating particles in the full solid angle.
* `source_type = "square"`: a 2D square shaped beam source which can be used e.g. to test Compton cameras or other setups, where sources with a clear edge are required.
* `source_type = "sphere"`: a spherical source as often used in space applications where particles emerge from the surface of a sphere, traveling inwards towards the detectors.

Some of these sources provide additional parameters to define their shape and behavior, please refer to [the module's documentation](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/src/modules/DepositionGeant4/README.md) for more information.

In addition to these predefined sources, Allpix Squared now also has the option to **parse a Geant4 macro file** with an individual particle source defined using the Geant4 General Particle Source commands. It should be noted that other Geant4 commands are ignored to avoid interference with the internal mechanisms of the framework.

### New Output Module TextWriter

The new output module TextWriter allows to write ASCII representations of Allpix Squared objects to a text file. Currently, this is available for PixelHit, MCParticle and MCTrack objects but can easily be extended upon request.

More details can be found in the module's [README.md](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/src/modules/TextWriter/README.md)


### Other New Features and Improvements

* **Export full Monte Carlo truth to LCIO** in the LCIOWriter module:
    The LCIOWriter has gained support for writing out the full Monte Carlo truth to LCIO collections thanks to **Tobias Bisanz, Universität Göttingen**. In addition, a bug in the definition of rotation angles between the two frameworks has been fixed, and the possibility to define individual collection names per detector has been added.

* **Improvement of Configuration Storage in Data Files:**
    The storage of the simulation configuration in data files produced by the ROOTObjectWriter has seen several improvements with the most important one being the storage of the seeds used for the simulation. When replaying a simulation from a data file, the seed used to calculate detector misalignments is now cross-checked and the user warned to prevent unexpected results from differently aligned setups.

* **New ROOT Macro to Recover Configuration Files:**
    A new ROOT macro has been added to the repository which allows to recover the full configuration of a simulation from a data file written by the ROOTObjectWriter module. It retrieves the stored key-value pairs and writes them into new files, including the framework and module configuration, the detector setup and the individual detector models with possibly overwritten parameters.

* **New Example for Replay Mechanism:**
    A new example has been added, showcasing the replay mechanism of Allpix Squared. The output data file produced by the fast simulation example is reprocessed with a new charge threshold in the digitization step. A more detailed description of the configuration is provided [in the repository](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/examples/replay_simulation/README.md) together with the example.

* **Updates to the CorryvreckanWriter:**
    The CorryvreckanWriter module has been update to reflect changes to the reconstruction framework. The output data format is now compatible with Corryvreckan v0.7 and later.

* **Extend unit tests:**
    The unit test infrastructure has been simplified by defining CMake macros for the definition of tests. New tests have been added to test the command line parameter parsing capabilities of Allpix Squared, i.e. the possibility to overwrite configuration keys for individual modules from the command line. Furthermore, new tests for the different source types have been added.

* **Updates to the TCAD Converter Tool:**
    The TCAD converter tools now parses configuration files using the same syntax as Allpix Squared. This simplifies the configuration of the many command line options. Furthermore, it is now possible to freely rotate the mesh coordinates by indicating which TCAD mesh axis should be taken as x, y and z coordinate.
    More details can be found in the updated [description of the tool](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/tools/tcad_dfise_converter/README.md) in the repository or [user manual](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch12.html#x13-16600012.2).



## Development Visualization

An updated version of the development visualized is provided below:
{{< vimeo 274864314 >}}
