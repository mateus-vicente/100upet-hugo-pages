---
title: "Installation"
date: 2017-07-20T11:23:28+02:00
draft: false
---

## Dependencies
* [ROOT](https://root.cern.ch/building-root) (required, with the GenVector component)
* [Geant4](http://geant4.web.cern.ch/geant4/UserDocumentation/UsersGuides/InstallationGuide/html/ch02.html) (optional, but required for typical purposes)
* [Eigen3](http://eigen.tuxfamily.org/index.php?title=Main_Page) (optional, but required for typical purposes)

## Installation
The CMake build system is used for compilation and installation. The install directory can be specified by adding `-DCMAKE_INSTALL_PREFIX=<prefix>` as argument to the CMake command below. Other configuration options are explained in the manual (see the documentation section below).

The dependencies need to be initialized for the build to succeed. Currently there are two methods to load these:

### Prerequisites on CERN LXPLUS
In order to install {{% allpix %}} on the CERN LXPLUS batch cluster, a LXPLUS setup script is provided:
```
$ source etc/scripts/setup_lxplus.sh
```
Then, continue as described under the compilation section.

### Prerequisites on a private machine
The dependencies listen above have to be satisfied. Both ROOT6 and Geant4 libraries and headers have to be in the path, this is usually achieved by sourcing the `thisroot.sh` or `geant4.sh` scripts. After this, continue as described below.

### Compilation
To compile and install a default installation of Allpix<sup>2</sup>, run the following commands

```
$ mkdir build && cd build/
$ cmake ..
$ make install
```

For more detailed installation instructions, please refer to the [documentation]({{< relref "usermanual/allpix-manual.html" >}}) .

## Issues
If you encounter any issues, please ensure your ROOT6 and Geant4 environments are properly set up (with their respective environment file sourced) and functional. If the problem persists, please report it in our [issue tracker](https://gitlab.cern.ch/simonspa/allpix-squared/issues) to help fixing it.
