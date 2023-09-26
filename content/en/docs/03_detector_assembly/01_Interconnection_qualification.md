---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Scanner prototype"
weight: 1
---

The scanner prototype will use test-chips to validate the simultaneous bonding of multiple chips, the stacking of the layer modules, and the cooling performance.
The test-chip is designed on top of the original 100µPET ASIC layout, using its pads in the top metal layer and passivation openings to connect structures arranged in the chip. Therefore, it is intended to be identical to the final ASIC in terms of dimensions and interface.

In addition to a few chain segments for bonding continuity tests, will also have a 4-wire probing points to measure the single bond resistance, a spiral heater in the center of the chip, and a PT-XYZ-like RTD (temperature sensor). Au stud bumps will be deposited on all bonding pads for flip-chip connection with test-FPC.
More details on the design are available below, and the GDS file on the following link:

<img src="../test-chip.png" width="70%">

The test-chip will be produced on 300 µm thick Si wafers (4-inch) and will have a Ti/Pt/Ti/Al stack (3-10 µm Ti, 30 nm Pt and 300 nm Al). 

The picture above shows the layout of the test-chip. The large spiral in the center is made of Ti/Al with a total length of approximately 24 cm. 3 Au stud bumps on each end of the line connects it to a voltage source to dissipate 1 W of power (as a working scanner chip). With a trace width of 704.6 µm, the wire resistance results in 27 Ohms (at 0 degC, using 2.7 µOhm.cm for the Al resistivity and 0.0043 for temperature coeficient alpha).

The PT-XYZ RTD is the small ladder-and-snake pattern and is made of Ti/Pt. With 30 nm thick Pt, 30 µm wide traces and 10.6 µOhm.cm for Pt resistivity we get 1156 Ohms for the total resistance of the RTD.

<img src="../test-chip2.png" width="70%">

There are groups of 3 pads that are shorted together via the Ti/Al layer. These are intended to be probed with 4-wires as described in the image bellow (from Flip Chip Technologies by John H. Lau), allowing to measure the contact resistance of a single bond. These groups are 3 pads conected are placed in the 4 edges of the chip, as well as in the center of it.

<img src="../bonding.png" width="70%">

Finally, the last structures on the test-chip are the chain links designed to close a complete chain when bonded to the test-FPC. These are intended to be used for stress tests of the bonding by injecting some high currents (DC up to 300 mA).

