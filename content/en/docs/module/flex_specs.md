---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Flex Specifications"
weight: 2
---

Each "flex" (or Flexible Printer Circuit - FPC) will have 4 detection ASICs flip-chip bonded (in a 2x2 arrangement) with 300µm between each chip. Each FPC will host small 0201 SMD components in small regions close to the top and bottom peripheries of the 2x2 chip arrangement.

The width of the flex is 300 µm smaller than the width of the 2x2 chip arrangement (i.e. the ASIC hangs 150 µm beyond the flex on 2 edges), to allow an external cooling block to mechanicaly be in contact with the lateral edges of the chips for cooling optimization. 

The data lines and low-voltage power for the ASIC are routed via the a wide flex tail (to be connected to a ZIF connector (<a href="https://www.hirose.com/product/series/FH41">Hirose FH41 series</a>) on the TIM board), while the interface for the sensor biasing HV (200 V, <1 mA) is **yet to be decided**. 

| Main features                     |                                |
|:----------------------------------|:-------------------------------|
| Flex width                        | 60.6 [mm]                      |
| Width of flex's tail              | 20.5 [mm]\*                    |
| Length of flex's tail             | **TBC**                        |
| Number of layers                  | **TBC**                        |
| Number of layers on tail          | <4\*\*                          |
| Gap between ASICs                 | 300 [µm]                       |
| Bonding pads dimensions           | **TBC**\*\*\*                  |

\*See *Connector dimension table*, dimension *F* of connector with 40 pins, at <a href="https://www.hirose.com/en/product/document?clcode=&productname=&series=FH41&documenttype=Catalog&lang=en&documentid=D31607_en">this link</a> </br>
\*\*Single-chip test-flex is not flexible enought with 4 layers. Therefore, the flex's tail should have less. </br>
\*\*\*Pad can be round as the coined gold stud bumps with be smashed round and the diameter (160 microns) should match the uncertainty defined in the requirement for misalignment </br>

Below is the latest layout of the flex.
<object data="../100MuPET_FlexDim.pdf" type="application/pdf" width="100%" height="510px"><p>Here's a link to <a href="CleanCode.pdf">the PDF</a>instead.</p></object>

### Specs **TODO**:
- Shield plate at the back side of the flex with the footprint of the Bi-absorber layer: 
    - Should it be covered with Coverlay? 
        - If not should the Bismuth be glued with a thin adhesive conductive tape? In addition can we leave the Bismuth layer floating (given that the resistivity is 5 order of magnitude higher than copper)?
        - If yes likely to be glued/co-cured with a double-sided  conductive adhesive
    - Shield should be coupled to local ground of the module

