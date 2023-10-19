---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Scanner prototype"
weight: 1
---

## Test-chip details
The scanner prototype will use test-chips to validate the simultaneous bonding of multiple chips, the stacking of the layer modules, and the cooling performance.
The test-chip is designed on top of the original 100µPET ASIC layout, using its pads in the top metal layer and passivation openings to connect structures arranged in the chip. Therefore, it is intended to be identical to the final ASIC in terms of dimensions and interface.

In addition to a few chain segments for bonding continuity tests, will also have a 4-wire probing points to measure the single bond resistance, a spiral heater in the center of the chip, and two PT-XYZ-like RTD (Resistive Temperature Detector). Au stud bumps will be deposited on all bonding pads for flip-chip connection with test-FPC. The test-chip will be produced on 300 µm thick Si wafers (4-inch) and will have a Ti/Pt/Ti/Al stack (3-10 µm Ti, 100 nm Pt and 300 nm Al). 

<img src="../test-chip_2.png" width="70%">

### Heater
The picture above shows the layout of the test-chip. The large spiral in the center is made of Ti/Al with a total length of approximately 24 cm. 6 Au stud bumps on each end of the line connects it to a voltage source to dissipate 1 W of power (as a working scanner chip). With a trace width of 704.6 µm, the wire resistance results in 27 Ohms (at 0 degC, using 2.7 µOhm.cm for the Al resistivity and 0.0043 for temperature coeficient alpha). The estimated current going through the trace is about 200 mA.

<div style="display: flex;
            justify-content: space-between;
            align-items: flex-start;">
   <div style="text-align: center;
            flex: 0 0 45%; /* Adjust the width as needed */
            margin: 10px;">
        <img src="../test-chip2_2.png" alt="Image 1" width="100%" style="border: 2px solid black;">
        <div style="margin-top: 5px;
            font-size: 14px;
            text-align: center;">Bottom left corner</div>
    </div>
   <div style="text-align: center;
            flex: 0 0 45%; /* Adjust the width as needed */
            margin: 10px;">
        <img src="../test-chip2_2a.png" alt="Image 2" width="100%" style="border: 2px solid black;">
        <div style="margin-top: 5px;
            font-size: 14px;
            text-align: center;">Top right corner</div>
    </div>
</div>

### Resistive Temperature Detector
The PT-XYZ RTD is the small ladder-and-snake pattern and is made of Ti/Pt. With 100 nm thick Pt, 50 µm wide traces and about 54 mm length, using 10.6 µOhm.cm for Pt resistivity, we have 1033 Ohms at 0 degC for the total resistance of the RTD.

<img src="../test-chip2_2b.png" width="40%" style="border: 2px solid black;">

### Contact resistance measurement
There are groups of 3 pads that are shorted together via the Ti/Al layer. These are intended to be probed with 4-wires as described in the image bellow (from Flip Chip Technologies by John H. Lau), allowing to measure the contact resistance of a single bond. These groups are 3 pads conected are placed in the 4 edges of the chip, as well as in the center of it.

<img src="../bonding.png" width="50%">

### Chains
<br>Finally, the last structures on the test-chip are the chain links designed to close a complete chain when bonded to the test-FPC. These are intended to be used for stress tests of the bonding by injecting some high currents (DC up to 200 mA).

Considering that the final ASICs on the final FPC will have some signals that are shared among the other ASICs, while some other signals are connected in a chain through the chips, the relative orientation of the chips on the flex will have a large impact in routing the many power and signal lines through the FPC. It is important to note that the performance of the scanner is impacted by the thickness of the FPC (and hance how many layers are used), and a thinner FPC is preferrable.

## ASIC orientation
Some possible options for the orientation of the chips is shown in the image below.
<img src="../ASIC-FLEX_orientation.png" width="100%">

In option A all chips have the same orientation ((digital) periphery to bottom).
<br>Option B has chips #2 and #3 rotated 180 degrees, possibily easing the connetcion between chips #1 and #2 of the signals in chain.
<br>Option C has chips #1 and #2 rotated 180 degrees, so all chips has their digital periphery closer to the top/bottom edges of the FPC, where decoupling capacitors and other passive components of the FPC are hosted.
<br>Option D is the oposite as option C, having the digital periphery of all chips the furthest from the decoupling capacitors but offering the shortest distance for the chip-to-chip signals.

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
| Top left CR                       | 197, 198, 199                  |
| Top right CR                      | 293, 294, 295                  |
| Heater +                          | 7, 8, 9, 10, 11, 12            |
| Heater -                          | 297, 288, 289, 290, 291, 292   |
| Left RTD                          | 21 (+), 23 (-)                 |
| Right RTD                         | 294 (+), 295 (-)               |
| Bottom chain                      | 24 (+), 188 (-)                |
| Top chain                         | 200 (+), 293 (-)               |

\*Pads #4 and #192 should each be connected to 2 wires for a 4-wires measurement.
