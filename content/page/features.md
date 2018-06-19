---
title: "Features"
date: 2017-08-15T16:06:43+02:00
draft: false
---

A few of the main features of {{% allpix %}} are

#### Energy deposition in the sensor

* Full simulation of charge deposition with Geant4
* Support for different source types such as particle beams, point sources, spherical sources as well as Geant4 user macros setting up a custom General Particle Source

#### Charge transport in silicon

* Charge carrier propagation using drift-diffusion model and Jacoboni mobility parametrization
* Alternatively projection of charge carriers to sensor surface taking the diffusion into account
* Support for linear electric fields and field maps from electrostatic TCAD simulations
* Support for Lorentz drift in homogeneous magnetic fields

#### Framework infrastructure

* Output of produced ROOT objects in TTrees with full history, including the Monte Carlo truth information of every event
* Possibility to read in data files to reprocess within the framework
* Conversion and import of electric fields from the TCAD DF-ISE format
* Full modular architecture allowing for easy customization
* Configuration in intuitive and flexible file format
* Easy-to-use description of detector models
* Flexible module communication with data objects using a messaging system

#### Manual and code documentation

* Full documentation and code reference available
* Easy to add new modules for new digitizers, other output formats, etc.
* High-quality code base with full continuous integration (CI) for extensive testing
