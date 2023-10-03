---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "ASICs chain"
weight: 2
---

# Chip-to-chip communication:
To reduce the number of read-out lines, the 4 ASIC on the readout FPC are connected in chain, so the data of 3 (out of 4) chips goes through a Master chip (number #0 in the FPC).
For this reason, some of the IOs of different chips are interconnected. The image below illustrates the labeling of the chips within the flex. Their interconnection should be as follow:

<img src="../100upet_module_montage.png" width="50%" alt="Image 3">

Connections:

Ack_out chip #n  => Ack_in chip #n-1 <br>
Req_out chip #n  => Req_in chip #n+1 <br>
Data_out chip #n => Data_in chip #n+1 <br>

Special Cases:

Req_in [0] = GND <br>
ACK_out[0] = Floating <br>
ACK_ in[3] => floating or from FPGA/Tail (it can be configured in the chip) <br>
DATA_OUT[3] => FPGA/Tail <br>
DATA_in[0] = >Floating <br>
