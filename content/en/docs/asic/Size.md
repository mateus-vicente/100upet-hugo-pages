---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "ASIC size"
weight: 2
---

The size of the final (diced) 100µPET chip, will depend on the dicing technique used.</br>
The chip dimension is **22787.8 µm x 30186 µm**. </br>
The gap between neighbouring chips in the same reticle is **100 µm** (see image below).

<img src="../Images/wafer_reticle.png" width="70%">

The dicing will happen in the midle of such gap, therefore there is extra 50 µm of silicon on each of the four edges of the chip, summing up to **22887.8 µm x 30286 µm**.</br>
The final size of the ASIC must consider the dicing street reduction from the chosen dicing technique.

{{% alert title="Note" color="warning" %}}
⚠️ **To be confirmed: Original plan is to use <a href="https://www.dicing-grinding.com/services/laser/?gclid=EAIaIQobChMIvrPii7eRggMVXDgGAB0QkQSTEAAYASAAEgKNwPD_BwE">Disco's stealth dicing</a>.**
{{% /alert %}}

If, for example, 50 µm of silicon are removed during the dicing, the final dimension of the chip to be bonded will be 22837.8 µm x 30236 µm. </br>
When using the Femto second laser WS-Turret MM200-USP (a Carbide CB5 femto laser source with maximum output power of 6W and tunable pulse duration between 290 fs and 20 ps and 1 μm stage resolution), available at FCBG-NMP, the amount of silicon removed was < 50 µm with no visible change (i.e. up to 10 µm) along the diced edge. More is discussed in the assembly prototype section.


