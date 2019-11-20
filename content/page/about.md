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

{{% allpix %}} has been developed and is maintained by:

* Koen Wolters, CERN
* Daniel Hynds, CERN
* Simon Spannagel, CERN

The following authors, in alphabetical order, have contributed to {{% allpix %}}:

* Mohamed Moanis Ali, Free University of Bozen-Bolzano, @mmoanis
* Mathieu Benoit, Université de Genève, @mbenoit
* Thomas Billoud, Université de Montréal, @tbilloud
* Tobias Bisanz, Georg-August-Universität Göttingen, @tbisanz
* Koen van den Brandt, Nikhef National Institute for Subatomic Physics, @kvandenb
* Liejian Chen, Institute of High Energy Physics Beijing, @chenlj
* Katharina Dort, CERN Summer Student, @kdort
* Neal Gauvin, Université de Genève, @ngauvin
* Maoqiang Jing, University of South China, Institute of High Energy Physics Beijing, @mjing
* Moritz Kiehn, Université de Genève, @msmk
* Salman Maqbool, CERN Summer Student, @smaqbool
* Sebastien Murphy, ETHZ, @smurphy
* Andreas Matthias Nürnberg, CERN, @nurnberg
* Marko Petric, CERN, @mpetric
* Nashad Rahman, The Ohio State University, @nashadroid
* Edoardo Rossi, DESY, @edrossi
* Andre Sailer, CERN, @sailer
* Paul Schütze, DESY, @pschutze
* Xin Shi, Institute of High Energy Physics Beijing, @xshi
* Ondrej Theiner, Charles University, @otheiner
* Mateus Vicente Barreto Pinto, Université de Genève, @mvicente
* Morag Williams, University of Glasgow, @williamm

The original [AllPix](https://twiki.cern.ch/twiki/bin/view/Main/AllPix) has been developed by:

* Mathieu Benoit, Université de Genève
* John Idarraga, Leiden University
