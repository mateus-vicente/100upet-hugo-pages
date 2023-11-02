---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Layer assembly"
weight: 1
---

The scanner assembly starts with the integration of 4 detectors ASICs into a Flexible-Printed-Circuit (FPC), creating a scanner's layer module, in a 2x2 arrangement with 300 µm gap between chip edges.

<img src="../Images/plane_flex.png" width="70%" alt="Image 3">

- The assembly of the layer module consists in loading the 4 detector ASICs and the FPC into their respective parts of an assembly jig. 
    - The electromechanical bonding glue (NCP), Huntsman Araldite 2011, is dispensed in the flex using a stencil.
- The two parts will be brought into proximity using alignment pins and micropositioners. 
    - The alignemnt between the chips and the flex will be done using metalic fiducial marks in the FPC and the ASICs silicon edges. 
    - The alignemt is done via the micropositioners through inspection holes in the assembly jig and FPC. 
- Thermocompression will be applied to bond the chips to the flex. 
    - 20 kgf bonding force was tested successfully with NCP, with 100% connection yield and no deterioration during and after stress current test

The bonding qualification tests were done with:
- Contact resistance measurements (2-wires of full chain)
- High current injection tests, up to 200 mA\*, before and after thermal cycles.
</br>
\*6-10x more than what is expected per bonding pad on final ASIC)
- Thermal cycles from 5 to 60°C.

This allowed us to understand a number of facts and fine tuning the bonding process:
- Bonding technique was fined tuned with a preheating step at 60°C in order to reduce the glue viscosity before applying the nominal compression force.
    - Need of such bonding step in final assembly is **TBC**
- Thermal cycles shown that mechanical reinforcement at the chip corners is important. Therefore, in addition to the horizontal glue lines dispensed over the pad rows, two vertical lines are doposited at the end of each row.
    - The contact resistance of the chain, when bonded with Higher forces (as 50 kgf for example) is less sensitive to the temperature cycles, while the 20 kgf contact got worse after the cycles.
        - When the temperature cycles were performed on a dry enviroment, the samples bonded with 20 kgf did not show any deterioration.

<img src="../Images/glue_shape.png" width="50%" alt="Image 3">

### Specs **TODO**
- Assembly qualification with home-made tools with heating and compression system. Design to be made by Franck with inputs from Coralie and Didier and with inputs from the flex and chip features/dimensions.  

### Chips placement
<img src="../Images/1-chip_assembly.png" width="100%">

### Flex placement
<img src="../Images/2-flex_assembly.png" width="100%">

### Jigs contact
<img src="../Images/3-contact.png" width="100%">

### Fine-alignment
<img src="../Images/4-alignement.png" width="100%">

