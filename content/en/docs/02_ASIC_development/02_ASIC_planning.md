---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "ASIC discussion"
weight: 2
---

From 07.10.2022

### Differences with FASER
1. Dead Area is not an issue
2. Keep same analog
3. No need of keeping charge information in the matrix
4. Small Cluster (7 pixel rare but possible )
5. Possible charge info: **10 keV to 500 keV** per cluster
    1. Peak Charge?
    2. Full cluster charge?
6. Charge Threshold **3000e-**
7. Power Density **80 mW/cmˆ2**
8. HitRate **5kHz/chip** ==> 200us to readout. We don't have idle

**FASER power consumption**
- 2uA per pixel FE
- 5uA per pixel Discriminator

### Open questions
- Do we need pixel calibration?
- 256 x208 pixels: 53k pixels. How long it takes to calibrate?
- Mismatch: where does it come from? Can we improve it?

### To be answered by Monte Carlo simulations:
- Possible charge info: 10 keV  to 500 keV per cluster
    - Peak Charge?
    - Full cluster charge?
    - No Charge?

> :warning: **Prepare minimum specifications of two versions : Charge readout / no charge readout .
For 20th October
Decision to take between the two by 27 October??**

## Task list
- [ ] Charge Threshold calibration. Target 3000 e threshold, evaluate mismatch and calculate time for calibration
    - CMOS or BJT?
    - Auto zeros
        - **Priority 1 Thanu. Dead line TBD, long task**
- [ ] Total variation data transmission time top to bottom for Faser (Measurement). Plus simulation (Monolith)
    - **Priority 1 Lorenzo and Antonio Deadline 20 October**
- [ ] Measure power of ACF
    - **Priority 1 Luca/Mateus Dead Line ASAP**
- [ ] Evaluate Calibration time
    - **Priority 1 Roberto Dead Line 20 October**
- [ ] Matrix placement distribution (Lorenzo)
    - **Priority 2 Lorenzo Dead line TBD**
- [ ] I/Os: Faser case TASK : evaluate the PET case and evaluate
    - 3 chip ID
    - 6 Trigger Fast for debugging (Test Only)
    - 2 trigger slow (Test only)
    - 2 Readout clock
    - 4 Data out
    - 1 THR
    - 2 test pulse
    - 3 SPI
    - 1 HV needs more spacing
    - 2 Reset
        - Introduce a read from SPI
            - **Priority 2  Roberto / Lorenzo**
- [ ] Power Domain evaluation: DRAW A POWER SCHEMA
    - BJT analog / digital / threshold
    - CMOS analog /digital
        - **Priority 2 Antonio Deadline TBD**
- [ ] 125um +125 um pitch : Evaluate voltage drop and PADS multiplicity
    - 11ohm  resistance super column. 20mA of digital
    - Target is to have a pad at least one pad of 20mA
        - **Priority 2 Lorenzo / Roberto  Deadline TBD**
- [ ] Evaluate Chip to Chip communication
    - **Priority 3 not assigned**
- [ ] Introduce GITlab task system:
    - **Background task Thanu**
