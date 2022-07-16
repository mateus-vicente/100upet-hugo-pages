# Introduction

This document is meant to help as a guide line for the design of the 100µPET ASIC. This monolithic pixel detector ASIC must be **noise-free**, and operate with its complete thickness of 250 µm fully depleted (hence, a wafer with high substrate resistivity will be used).

## Getting started

This ASIC is a derivation of the ASIC used for the FASER pre-shower detector. You can find the current documentation for the pre-production ASIC [here](https://gitlab.cern.ch/mupet/reference\_documents/-/blob/main/FASER\_MAIN.pdf).

From this pre-production, a wafer is produced on a higher resitivity substrate of 4 kOhm\*cm, for first investigation. This wafer will be delivered undiced, for probe-station testing avoiding chip-edge-effects, and will be diced after. The dicing scheme still to be defined: single chips, or full reticle with 3 chips.

TODO: already book DISCO (laser dicing) or OPTIM (saw dicing).

## ASIC integration

Still under decision is how the 100µPET scanner's detector module will be assembled.

* [ ] One super-module with 20 chips: 5 layers of pixel detectors, with 4 detector chips on each layer, stitched wire-bonded to a single carrier PCB.
* [ ] One flex-module with 4 chips on a single layer, using ACF bonding to interface chip/flex I/O pads.

A final decision on which design to follow must be taken by **August/September**.

#### Wire-bonding integration tests

Wire-bonding module building tests will be done with the FASER pre-production chip. A new chip carrier PCB, hosting a layered stack of 5 ASICs, will be designed based on the FASER pre-shower module flex. Things to test:

* [ ] Sharing of power lines among multiple chips
* [ ] Stiched and "flying" wire-bonds (data pads)
* [ ] Na+ source data taking, with two modules and FASER read-out system

#### ACF integration tests

Tests for ACF bonding are being defined: One (possible) option is to make tests with the ALPIDE chip: Flex modules will be produced, hosting a single layer with 4 ASICs, for the ALPIDE ASIC Things to test:

* [ ] ACF connectivity of power and data lines
* [ ] Stacking of flex modules
* [ ] Data taking with Na+ source

Another option is to make a pad-wafer at [CMI](https://www.epfl.ch/research/facilities/cmi/), with the (expected) final design of the chip: A pad-wafer is designed (maybe with multiple design options), and its flex counterpart is produced: Things to test:

* [ ] Different I/O pad shape and size on "ASIC" and flex
* [ ] ACF connectivity of power and data lines
* [ ] Optimum I/O pad layout (which pitch? staggered? Both edges?)

A (possible) third option (under feasibility investigation) is described bellow:

**RDL layer for the FASER PS pre-production ASIC**

A redistribution layer can be done on teh FASER PS PP chip, extending and enlarging the wire-bonds, currently on the bottom edge of the chip, to top-and-bottom edges, making it compatible for interfacing with a FPC. The wire-bonding version could also be use this FASER with RDL.

Things to check: Everything (production/delivery time, cost, design work, **design rules**)...\
Any issue doing it on the ASIC's front side? ---> Not realy. This is the standard application\
Is it possible to do on single devices? ---> Not at IZM\
What metal, and thickness, is used? ---> RDL metal layers are Cu, with standard 5 µm thickness (IZM)\
Possible to still wire-bond? ---> Yes, NiAu electroplating finishing (IZM)\
Delivery time? ---> 3-4 months (IZM)\
Cost? ---> >20 kCHF (IZM)

## ASIC specification table

[Specifications table](specs\_table.md)

## TODO section

[TODO list](specs\_table.md)
