---
title: "Allpix Squared 2.2 Released"
date: 2022-02-28T11:43:13+01:00
draft: false
---

We are happy to announce a new stable feature release **{{% allpix %}} version 2.2** with a total of **105 commits** added to the repository by **three contributors** since version 2.1. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v2.2.0

The new version is also available as docker image in the [project's docker registry](https://gitlab.cern.ch/allpix-squared/allpix-squared/container_registry), as read-to-use [version on CVMFS](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch11.html#x12-26800011.4.1) and as binary release [from the website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/releases/).

{{% allpix %}} was extended be a couple of new features. In the following, an overview over the most important changes and new features is provided:
<!--more-->

### Import of GDML geometries

The module `GeometryConstructionGeant4` now allows for an import of GDML files.
With the import of a GDML file, passive materials are created.

Imports have to be specified within the geometry file.
Combined with the common `position` and `orientation` parameters, the absolute position of a loaded structure as well as its orientation within the global coordinate system of the simulation can be configured.

This functionality requires Geant4 to be built with GDML support enabled. This can be enabled via CMake when compiling Geant4 using

```
cmake -DDGEANT4_USE_GDML=ON ..
```

This feature comes with a new example simulation `gdml_reader`.


### Custom Mobility Model

In addition to several pre-defined mobility models, the charge carrier propagation can now be configured to follow any custom, user-defined mobility model.

A custom mobility can be defined dependent on the local electric field and doping concentrations, as well as on global parameters that can be provided as additional configuration parameters.
For this, any mathematical expression can be provided via the ROOT TFormula mathmatics syntax.
The mobilities of electrons and holes need to be defined by separate equations with separate sets of parameters.

This feature is available to all present charge carrier propagation modules.


### MCTrack History

The module `DepositionGeant4` is now able to store all tracks of the Geant4 simulation as `MCTrack` objects.
While until now only tracks were recorded that create an energy deposit in any of the active detectors, the `record_all_tracks` parameter now enables recording all tracks disregarding their interactions in detectors.

This makes it possible to also trace back secondary particles with respect to their parent particles.


### Other Notable Features and Improvements

* **Core**:
    * Interpretation of file paths now make use of `std::filesystem` methods wherever possible
* **Mobility models**:
    * Mobility models now make use of the parent module configuration instead of parsing individual para* **DetectorHistogrammer**:
    * Restructuring of histogram storage by renaming and grouping histograms
* **MeshConverter**:
    * Automatically determine dimensions of input mesh
    * Improve logging and add warnings for better usability