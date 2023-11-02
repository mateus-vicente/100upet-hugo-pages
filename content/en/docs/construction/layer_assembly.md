---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Layer assembly"
weight: 1
---

The assembly of the layer module consists in loading the 4 detector ASICs and the FPC into their respective parts of an assembly jig. 
The two parts will be brought into proximity using alignment pins and micropositioners. 
The alignemnt between the chips and the flex will be done using metalic fiducial marks in the FPC and the ASICs silicon edges. 
The alignemt is done via the micropositioners through inspection holes in the assembly jig and FPC. 
Having the adhesive glue already dispensed in the FPC, thermocompression will be applied to bond the chips to the flex. 

So far the bonding qualification tests made allowed understanding a number of facts and fine tuning the process:
- The thermal cycling tests allowed identifying delamination issue related to high stress accumulated at the extremities of the glue lines. Improvement of the glue distribution layer with an excess of glue filet at the edge allowed getting data that does not vary after thermal cycling between 0 and 60°C. This will also require having a gap between the chips and at the minimum of 300 microns and ideally 500 microns.
- Bonding technique was fined tuned with a preheating step at 60°C in order to reduce the glue viscosity before applying the nominal compression force.
- The nominal compression force was tested successfully with NCP at 50 kg leading to contact everywhere and with good behavior during and after stress current test
- Further tests will be made with ACP in order to see if one can decrease the compression force to 10 kg and also identified if this can compensate some thickness non-uniformity especially when gluing 4 chips at a time.

### Specs **TODO**
- Gap in between modules (Mateus, Didier and all)
- Bonding force to be applied on a 4 chip assembly. More tests to be made (Mateus, Didier) 
- Which glue to be used (NCP or ACP) depending of the benefit (Mateus, Didier) 
- Assembly qualification with home-made tools with heating and compression system. Design to be made by Franck with inputs from Coralie and Didier and with inputs from the flex and chip features/dimensions.  


This assembly technique will be qualified by building a scanner mockup using devices and tool as close as possible to the final scanner to be built.
This will be described in the following sections.

### Chips placement
<img src="../Images/1-chip_assembly.png" width="100%">

### Chips placement
<img src="../Images/2-flex_assembly.png" width="100%">

### Jigs contact
<img src="../Images/3-contact.png" width="100%">

### Fine-alignment
<img src="../Images/4-alignement.png" width="100%">

