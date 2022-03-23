---
title: "About"
date: 2017-07-20T00:53:44+02:00
draft: false
---

## About {{% allpix %}}

{{% allpix %}} is a generic simulation framework for silicon tracker and vertex detectors written in modern C++. The goal of the {{% allpix %}} framework is to provide a complete and easy-to-use package for simulating the performance of detectors from incident ionizing radiation until the digitization of hits in the detector chip.
It builds upon the ideas implemented in the original  [AllPix](https://twiki.cern.ch/twiki/bin/view/Main/AllPix) software, a Geant4 user application written to ease the simulation of pixel detectors.

The framework builds upon other packages to perform tasks in the simulation chain, most notably [Geant4](https://cern.ch/geant4/) for the deposition of charge carriers in the sensor and [ROOT](https://root.cern.ch/) for producing histograms and saving the produced data to storage. The core of the framework focuses on the simulation of charge transport in semiconductor detectors and the digitization to hits in the front-end electronics. The framework does not perform a reconstruction of the particle tracks.

{{% allpix %}} is designed as a modular framework, allowing for an easy extension to more complex and specialized detector simulations. A modular setup also allows to separate the core of the framework from the implementation of the algorithms in the modules, leading to a framework which is both easier to understand and to maintain. Besides modularity, the {{% allpix %}} framework was designed with the following main design goals in mind (listed from most to least important):

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


## Development of {{% allpix %}}

{{% allpix %}} is developed and maintained by

* Paul Schütze, DESY
* Simon Spannagel, DESY
* Koen Wolters

The following authors, in alphabetical order, have developed or contributed to {{% allpix %}}:

* Mohamed Moanis Ali, GSOC2019 Student
* Mathieu Benoit, BNL
* Thomas Billoud, Université de Montréal
* Tobias Bisanz, CERN
* Marco Bomben, Université de Paris
* Koen van den Brandt, Nikhef
* Carsten Daniel Burgard, DESY
* Maximilian Felix Caspar, DESY
* Liejian Chen, Institute of High Energy Physics Beijing
* Manuel Alejandro Del Rio Viera, DESY
* Katharina Dort, University of Gie\ss en
* Neal Gauvin, Université de Genève
* Lennart Huth, DESY
* Daniel Hynds, University of Oxford
* Maoqiang Jing, University of South China, Institute of High Energy Physics Beijing
* Moritz Kiehn, Université de Genève
* Rafaella Eleni Kotitsa, CERN
* Stephan Lachnit, Heidelberg University
* Salman Maqbool, CERN Summer Student
* Stefano Mersi, CERN
* Ryuji Moriya, CERN Summer Student, University of Glasgow
* Sebastien Murphy, ETHZ
* Andreas Matthias Nürnberg, KIT
* Sebastian Pape, TU Dortmund University
* Marko Petric, CERN
* Radek Privara, Palacky University Olomouc
* Nashad Rahman, The Ohio State University
* Edoardo Rossi, DESY
* Andre Sailer, CERN
* Enrico Jr. Schioppa, Unisalento and INFN Lecce
* Sebastian Schmidt, FAU Erlangen
* Sanchit Sharma, Kansas State University
* Xin Shi, Institute of High Energy Physics Beijing
* Viktor Sonesten, GSOC2018 Student
* Reem Taibah, Université de Paris
* Ondrej Theiner, Charles University
* Annika Vauth, University of Hamburg
* Mateus Vicente Barreto Pinto, CERN
* Håkan Wennlöf, DESY
* Andy Wharton, Lancaster University
* Morag Williams, University of Glasgow
