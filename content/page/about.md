---
title: "About"
date: 2017-07-20T00:53:44+02:00
draft: true
---

## About Allpix Squared

Allpix Squared is a generic simulation framework for silicon tracker and vertex detectors written in modern C++. It is the successor of a previously developed simulation framework called [AllPix](http://github.com/allpix/allpix). The goal of the Allpix Squared framework is to provide a complete and easy-to-use package for simulating the performance of detectors from a general source of particles until the digitization of hits in the detector chip. 

The framework builds upon other packages to perform tasks in the simulation chain, most notably Geant4 for the deposition of charge carriers in the sensor and ROOT for producing histograms and saving the produced data to storage. The core of the framework focuses on the simulation of charge transport in semiconductor detectors and the digitization to hits in the frontend electronics. The framework does not perform a reconstruction of the particle tracks.

Allpix Squared is designed as a modular framework, allowing for an easy extension to more complex and specialized detector simulations. A modular setup also allows to separate the core of the framework from the implementation of the algorithms in the modules, leading to a framework which is both easier to understand and to maintain. Besides modularity, the Allpix Squared framework was designed with the following main design goals in mind (listed from most to least important):

* Reflects the physics
  * A run consists of several sequential events. A single event here refers to an independent passage of one or multiple particles through the setup
  * Detectors are treated as separate objects for particles to pass through
  * All of the information must be contained at the very end of processing every single event (sequential events)
* Ease of use (user-friendly)
  * Simple, intuitive configuration and execution ("does what you expect")
  * Clear and extensive logging and error reporting
  * Implementing a new module should be feasible without knowing all details of the framework
* Flexibility
  * Event loop runs sequence of modules, allowing for both simple and advanced user configurations
  * Possibility to run multiple different modules on different detectors
  * Limit flexibility for the sake of simplicity and ease of use

### History

Development of AllPix (the original version) started around 2012 as a generic simulation framework for pixel detectors. It has been succesfully used for simulating a variety of different detector setups through the years. Originally written as a Geant4 user application the framework has grown "organically" after new features continued to be added. Around 2016 discussions between collaborators started to discuss a rewrite of the software from scratch. Primary possibilities for improvements included better modularity, more extensive configuration options and an easier geometry setup.

Early development of Allpix Squared started in end of 2016, but most of the initial rework in modern C++ has been carried out in the framework of a technical student project in the beginning of 2017. The core of the framework starts to mature and initial versions of various generic core modules have been created at the time of writing. 
