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

## Test-chip size

The test-chip is designed using the original 100µPET ASIC design (using the top metal and passivation layout), and its position on the test-wafer follows the same positioning as the final 100µPET wafer, with 100 µm of silicon margin between devices. </br> 
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <div style="text-align: center; flex: 0 0 45%; margin: 0px;">
   		<img src="../test-wafer.png" alt="Image 1" width="72%" style="border: 0px solid black;">
   		<div style="margin-top: 5px; font-size: 14px; text-align: center;">
			4-inch wafer layout with 6 test-chips
   		</div>
   </div>
   <div style="text-align: center; flex: 0 0 45%; margin: 0px; margin-right: 200px;">
   		<img src="../test-wafer-dicing.png" alt="Image 2" width="100%" style="border: 2px solid black;">
   		<div style="margin-top: 5px; font-size: 14px; text-align: center;">
			Zoom in the dicing street region
  		</div>
   </div>
</div>

Therefore, as discussed in the *ASIC specifications -> ASIC size* section, the size of the test-chip after dicing is expected to be 22887.8 µm x 30286 µm **minus the cut-width** (illustrated as the black shaded bands in the right picture above).

From our experience using the Femto second laser available at FCBG-NMP, the street reduction due to the cut width is < 50 µm, with no visible change (i.e. up to 10 µm) along the diced edge. A few pictures below illustrates the chip after dicing.

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
   <div style="text-align: center; flex: 0 0 30%; margin: 0px;">
   		<img src="../dicing3.png" alt="Image 1" width="100%" style="border: 0px solid black;">
   		<div style="margin-top: 5px; font-size: 14px; text-align: center;">
			Diced wafer
   		</div>
   </div>
   <div style="text-align: center; flex: 0 0 30%; margin: 0px;">
   		<img src="../dicing2.png" alt="Image 2" width="100%" style="border: 0px solid black;">
   		<div style="margin-top: 5px; font-size: 14px; text-align: center;">
			Zoom in dice mark between chips 
  		</div>
   </div>
   <div style="text-align: center; flex: 0 0 30%; margin: 0px;">
   		<img src="../dicing1.png" alt="Image 2" width="100%" style="border: 0px solid black;">
   		<div style="margin-top: 5px; font-size: 14px; text-align: center;">
			Test-chip after dicing
  		</div>
   </div>
</div></br>

Therefore, the expected dimensions of the 100µPET test-chip, after dicing, is **22837.8 µm x 30236 µm**.

### Test-wafer alignment marks
The process flow for the production of our test-wafer will be uploaded soon. 
There are 6 alignment marks over the wafer, as shown in the image below, that are used to align the multiple photolitography steps between each other.

<img src="../test-wafer-alignment-marks.png" width="80%">

The positons of the marks in absolute coordinates, having (0,0) in the center of the wafer, are:

| # Alignment mark | X [µm] | Y [µm] |
|:-----------------|:-------|:-------|
| 1                | 24000  | 36000  |
| 2                | 33000  | 18000  |
| 3                | 33000  | -18000 |
| 4                | -24000 | -36000 |
| 5                | -33000 | -18000 |
| 6                | -33000 | 18000  |
