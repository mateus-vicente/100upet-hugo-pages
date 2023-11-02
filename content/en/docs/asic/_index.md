---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "ASIC Documentation"
description: "100µPET ASIC details."
weight: 2
---

This section aims to list the specifications of the 100µPET scanner.

{{% alert title="Note" color="success" %}}
✅ **ASIC submited on October 24th!**
</br>
Expected production time of 6 months.
{{% /alert %}}

| Main features                     |                                |
|:----------------------------------|:-------------------------------|
| Depletion depth                   | 250 [μm]                       |
| ASIC thickness                    | 270 [μm]                       |
| Backplane metallization           | **TBC**\*                      |
| Pixel (hexagonal) pitch           | ~ 160 [μm]                     |
| Nb of pixels                      | 25344                          |
| Max cluster size                  | < 25 pixels (5x5)              |
| Front end noise (ENC)             | 200 [electrons]                |
| Operation Threshold               | 3000 [electrons]               |
| Power consumption                 | 70 [mW/cm2]                    |
| Max current per pad               | 30 [mA]                        |
| Time resolution RMS (Qin > 5 ke-) | 200 [ps]                       |
| TOA and TOT                       | Per each super-pixel line      |
| Readout speed                     | 50 [Mb/s]                      |
| Event size                        | 143 [bits]                     |
| Max expected data rate            | 40 kHit/s @ 20 MBq             |
| Chip readout daisy chained        | 1 readout line / 4 chips       |

\*HV biasing and backplane metallization type (Aluminum wrt electrolytic potential difference with Bismuth is a risk. Possible isolation layer).

<img src="Images/plan.png" width="70%" alt="Image 3">

<br>

## Specs **TODO**
- Chip I/F, functional diagram, S/C and DAQ protocol
- Powering and distribution of power
