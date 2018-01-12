---
title: "Allpix Squared 1.1 Released"
date: 2018-01-12T09:47:37Z
draft: false
---

We are happy to announce a new stable feature release **{{% allpix %}} version 1.1** with a total of **575 commits** added to the repository by **nine contributors** since version 1.0. The release tarball can be downloaded from the repository:

https://gitlab.cern.ch/allpix-squared/allpix-squared/tags/v1.1.0

Furthermore, a central installation is now available on CVMFS as discussed below.

The following list provides a non-exhaustive overview of new modules, added features and improvements which have been implemented:
<!--more-->

### New Modules

* **CapacitiveTransfer** by Mateus Vicente Barreto Pinto, Université de Genève  
     Excerpt from the documentation:

     > This module combines individual sets of propagated charges together to a set of charges on the sensor pixels and thus prepares them for processing by the detector front-end electronics. In addition to the SimpleTransferModule, this module also copies the propagated charge to the neighboring pixels, scaled by the respective cross-coupling in order to simulate the cross-coupling between neighboring pixels in Capacitively Coupled Pixel Detectors (CCPDs).

     More details can be found in the module's [README.md](https://gitlab.cern.ch/allpix-squared/allpix-squared/blob/master/src/modules/CapacitiveTransfer/README.md)

### New Features

* **Extensive Unit Tests:**  
    Unit tests for all modules and many functions of the core framework have been added. These tests run simple simulations and check the output against a defined pattern. By this, undesired side effects of changes to the code can be spotted quickly. The user manual describes the testing in detail in the newly added chapter "Development Tools & Continuous Integration" which can be found [here](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch10.html).

* **Geometry Output:**  
    Most output writer modules now support also writing the simulated geometry in their native format. This allows to directly use the output together with the geometry used for the simulation.

* **Automatic misalignment:**  
    It is now possible to specify alignment precisions for every detector in the detector setup file. This allows for automatically adding misalignments to the individual detectors for the simulation. Without misalignment, the track reconstruction can be problematic due to the pixel-perfect alignment and the resulting singularities in the fitting procedures. The results are artifacts in the residual distributions.

    The precisions given in the detector setup file are taken as the width of a Gaussian distribution around the configured position, and a random offset is calculated:

    ```toml
    alignment_precision_position    = 10um 0.1mm 5mm
    alignment_precision_orientation = 1deg 0.2deg 0.1deg
    ```

    The misalignments are recalculated for every run. If a constant misalignment for several runs is desired, the `random_seed_core` value can be fixed as described in the manual.

* **Automatic Calculation of Production Cut:**  
    Improvement to the DepositionGeant4 module. A sensible value for the production cut for secondary particles in Geant4 is now automatically calculated from the detector properties used in the subsequent simulation. For this, a fifth of the smallest quantity in pitch and thickness is taken. The value can be overwritten via the configuration file.

* **Allow Specification of Delpetion Depth:**  
    IMprovement to the ElectricFieldReader module. It is now possible to specify either the full depletion voltage of a detector, or, if not known, the depletion depth. Only one of the two options is allowed.

### Improvements

* **New configuration parser:**  
    The parser now also supports reading 2D matrices from configuration files using the syntax

    ```toml
    mymatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    ```

    Furthermore, the full configuration with all default values used in the simulation is now stored in the native {{% allpix %}} ROOT files.

* **Improved handling of MC Particles:**  
    The reference to the MC Truth information (entry and exit point, particle type, parent particle) are now directly stored in subsequent objects. This removes the necessity to store all intermediate simulation stages in order to be able to access this information.

* **More Options for Rotations:**  
    Detector orientations in the detector setup file can now be specified via three different Euler angle combinations:

    * The `xyz` option uses extrinsic Euler angles to apply a rotation around the global X axis, followed by a rotation around the global Y axis and finally a rotation around the global Z axis.
    * The `zyx` option uses the extrinsic Z-Y-X convention for Euler angles, also known as Pitch-Roll-Yaw or 321 convention. The rotation is represented by three angles describing first a rotation of an angle φ (yaw) about the Z axis, followed by a rotation of an angle θ (pitch) about the initial Y axis, followed by a third rotation of an angle ψ (roll) about the initial X axis.
    * The `zxz` uses the extrinsic Z-X-Z convention for Euler angles instead. This option is also known as the 3-1-3 or the "x-convention" and the most widely used definition of Euler angles


## Additional Examples

We have added some more examples to the [repository](https://gitlab.cern.ch/allpix-squared/allpix-squared/tree/master/examples), showcasing different features of the framework. A description of the different configurations can be found in Chapter 8 of the [user manual](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manualch8.html) or in the `README.md` files in the respective example directories. Currently the list comprises:

* Capacitive coupling - using the CapacitiveTransfer module
* Fast simulation - speeding up the simulation using ProjectionPropagation
* Precise DUT - using different modules for the reference telescope and the device under test
* Source measurement - simulating a single detector with shielding and source
* TCAD Field simulation - using an electric field from TCAD to improve the simulation of charge drift and collection

More examples are very welcome, please open a merge request to have your own configuration added to the examples.


## Updated User Manual

The user manual has been revised and extended to describe all new features. A reference version of the manual has been published as **CLICdp-Note-2017-006** and can be found on the [CERN CDS server](https://cds.cern.ch/record/2295206). The latest version of the manual should always be retrieved from the [website](https://project-allpix-squared.web.cern.ch/project-allpix-squared/usermanual/allpix-manual.html) or built directly from the repository.


## Central CVMFS Installation

As of version 1.1, {{%allpix%}} is also provided via the CERN VM File System (CVMFS). From any CERN machine with CVMFS activated, simply run either of the following commands to make the `allpix` executable available in your `$PATH`:

```bash
# For CERN CentOS7:
source /cvmfs/clicdp.cern.ch/software/allpix-squared/1.1.0/x86_64-centos7-gcc7-opt/setup.sh
# For CERN Scientific Linux 6:
source /cvmfs/clicdp.cern.ch/software/allpix-squared/1.1.0/x86_64-slc6-gcc7-opt/setup.sh
```

## Development Visualization

The development of {{% allpix %}} is visualized in the following video using [Gource](http://gource.io/):
{{< vimeo 250753110 >}}
