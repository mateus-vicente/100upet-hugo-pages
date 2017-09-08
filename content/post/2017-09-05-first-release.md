---
title: "First Stable Release"
date: 2017-09-05T11:49:04+02:00
draft: false
---

we are happy to announce the first stable and full-featured **{{% allpix %}} version 1.0**. It is available from the [repository](https://gitlab.cern.ch/simonspa/allpix-squared/) as of now. The software is released under the MIT license, thus you are free to use it in whatever way you like.
<!--more-->
Please go ahead, test the framework, implement your own simulations and report back your experience.

A few of the main physics features are:

* Full simulation of charge deposition with Geant4, encapsulated as a module of the framework
* Fast RKF5 charge carrier propagation using a drift-diffusion model
* Alternative propagation by projecting deposited charge carriers to sensor implants
* Output of produced ROOT objects in TTrees with full history, including the Monte Carlo truth information of every event
* Support for linear electric fields and TCAD-simulated field maps
* Conversion and import of electric fields from the TCAD DF-ISE format

The software is a completely newly written framework and we have taken great care to write high-quality, maintainable and efficient code. The framework has:

* Full modular architecture allowing for easy customization
* Configuration in intuitive and flexible file format
* Easy-to-use description of detector models
* Flexible module communication with data objects using a messaging system
* Full code reference available
* Easy to add new modules for new digitizers, other output formats, etc.
* High-quality code base with full continuous integration (CI) for extensive testing

In addition to the well-documented code and this website with a few [examples and plots](/page/screenshots/) we have prepared an extensive [HTML](/usermanual/allpix-manual.html) and [PDF user manual](/usermanual/allpix-manual.pdf), which provides detailed information on the installation process, a "getting started" section with configuration examples, and additional information for potential contributors.

Please share your opinion, experience, issues with us - either via e-mail or the issue tracker of the repository. Contributions from your side are very welcome, and we already have a long list of potential features to be added in the future.

Best regards,   
Koen Wolters, Daniel Hynds, Simon Spannagel
