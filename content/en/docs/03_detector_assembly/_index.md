---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Detector assembly"
description: "Plans for ASIC integration into flex and tower assembly"
weight: 3
---

Starting from the scanner's front-end detector towards the back-end system, the scanner assembly starts with the integration of 4 detectors ASICs, in a 2x2 arrangement with 300 µm gap, into a Flexible-Printed-Circuit (FPC). Each ASIC will have an Au stud bump on each bonding pad, placed using a wire-bonding machine. Each ASIC will be connected to the flex by flip-chip using Araldite 2011, meaning that the FPC bonding pads have the same layout as in the ASIC. Each FPC will host small 0201 SMD components in small regions close to the top and bottom peripheries of the 2x2 chip arrangement. The data lines and low-voltage power for the ASIC are routed via the a wide flex tail (to be connected to a rigid board hosting a ZIF connector), while the high-voltage for sensor biasing is routed via a thin flex tail with a dedicated HV connector (200 V, <1 mA). The width of the flex is from 100 to 200 µm smaller than the width of the 2x2 chip arrangement, at least in the region of where the chips are placed to allow an external cooling block to mechanicaly be in contact with the lateral edges of the chips for cooling optimization. 
This section is meant to document the plans for the ASIC integration into the scanner.

