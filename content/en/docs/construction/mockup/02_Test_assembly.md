---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Test assembly"
weight: 2
---

## ASIC orientation
Some possible options for the orientation of the chips is shown in the image below.
<img src="../ASIC-FLEX_orientation.png" width="100%">

In option **A** all chips have the same orientation ((digital) periphery to bottom).
<br>Option **B** has chips #2 and #3 rotated 180 degrees, possibily easing the connetcion between chips #1 and #2 of the signals in chain.
<br>Option **C** has chips #1 and #2 rotated 180 degrees, so all chips has their digital periphery closer to the top/bottom edges of the FPC, where decoupling capacitors and other passive components of the FPC are hosted.
<br>Option **D** is the oposite as option C, having the digital periphery of all chips the furthest from the decoupling capacitors but offering the shortest distance for the chip-to-chip signals.

As the chips has the HV connection pads in all of their 4 edges, independent of the chip's orientation it will be always possible to have the HV line routed from the HV tail towards the center of the flex, allowing to HV bias all 4 chips with the shortest path.

## Test-chip wiring
The test assembly of the 4 test-chips on the test-flex will connect a few functionalities of each chip, as illustrated below.

<img src="../module.png" width="100%">

While the total amount of wires to route is 46, only two wires are used to control all the heaters as they are daisy chained in the flex. Threfore, the amount of wires going to the flex tail and to the ZIF connector is 40. The ZIF connector to be used is the <a href="https://www.hirose.com/product/series/FH41">Hirose FH41 series</a> with 40 positions

### Test-structure pads
Considering the 100µPET final ASIC IO pad numbering, the structures on the test-schip are connected to the following pads.


| Test structure                    | #Pads                          |
|:----------------------------------|:-------------------------------|
| Bottom left CR                    | 2, 4\*, 6                      |
| Bottom right CR                   | 190, 192\*, 194                |
| Top left CR                       | 197, 198\*, 199                  |
| Top right CR                      | 293, 294\*, 295                  |
| Heater +                          | 7, 8, 9, 10, 11, 12            |
| Heater -                          | 287, 288, 289, 290, 291, 292   |
| Left RTD                          | 21 (+), 23 (-)                 |
| Right RTD                         | 284 (+), 285 (-)               |
| Bottom chain                      | 24 (+), 188 (-)                |
| Top chain                         | 200 (+), 283 (-)               |

\*Pads #4 #192 #198 and #294 should each be connected to 2 wires for a 4-wires measurement.


### Dummy SMD components 
TODO, describe SMD capacitors mouning on dummy pads for ptotoyping the stacking of the layers.
