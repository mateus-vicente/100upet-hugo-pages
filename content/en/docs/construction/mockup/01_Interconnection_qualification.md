---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Test-chip"
weight: 1
---

The scanner prototype will use test-chips to validate the simultaneous bonding of multiple chips, the stacking of the layer modules, and the cooling performance.
The test-chip is designed on top of the original 100µPET ASIC layout, using its pads in the top metal layer and passivation openings to connect structures arranged in the chip. Therefore, it is intended to be identical to the final ASIC in terms of dimensions and interface.

## Test-chip details

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
## Production process flow
The process flow for wafer production at FCBG-NMP is avalable below.
<object data="../100uPET_MVicente_NMP_Process_Flow.pdf" type="application/pdf" width="100%" height="510px"></object>
