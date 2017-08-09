---
title: "Screenshots"
date: 2017-08-09T15:42:04+02:00
draft: false
---

In the following, a few screenshots from a standard {{% allpix %}} simulation are presented.

## The Simulation Interface

Below is a short screencast of a typical simulation run with a full beam telescope and a device under test (DUT). The run is configured to produce 200 events and the logging level is set to `log_level = STATUS` to only print messages about the simulation progress.

![screencast](/img/screenshots/simulationcast.gif)

## Event Displays

This event display represents two Pi+ particles with an energy of 2 GeV crossing a detector setup with six Mimosa26 planes, one Timepix as DUT and a second Timepix as reference detector after the last downstream plane.

![eventdisplay](/img/screenshots/eventdisplay.png)

A secondary particle produced in the DUT can be observed, the color coding represents the charge of the respective particles.

This event display is rendered using the {{% allpix %}} standard visualization module `VisualizationGeant4` without additional configuration or changes.


## Electric Field

{{% allpix %}} provides basic visualization of the electric fields used in the different sensors. The plots shown below are produced by the `ElectricFieldReader` module with the appropriate parameter configuration, i.e. `output_plots = true`.


## Charge Drift & Diffusion

The following plots present a visualization of the charge carrier drift as can be produced by the `GenericPropagation` module with its parameter `output_plots = true`. Shown is a single particle track crossing the sensor at an angle of 45 degrees. Electrons and holes drift to their respective electrodes under the influence of the electric field.

![drift-3d](/img/screenshots/eh-drift-3d.png)

The influence of the charge carrier diffusion can be revealed by looking at the projection of the same event along the particle trajectory as shown below.

![drift-diffusion](/img/screenshots/eh-pairs-drift.png)

## Hitmaps

The `DetectorHistogrammer` module can be used to retrieve basic per-detector monitoring plots such as detector hit maps or cluster size distributions as demonstrated below. This module does not require a special configuration to produce these histograms.

The following histogram for the DUT is the output of a simulation with 20'000 events using the setup displayed above.

![hitmap](/img/screenshots/hitmap.png)

## Analysis with External Tools

The following plots exemplary show an analysis of the simulation result using the [EUTelescope framework](http://eutelescope.web.cern.ch/). The simulation result is stored in EUTelescope's native format using the `LCIOWriter` module.

Shown is the cluster charge distribution of one detector in detector-specific units (i.e. not calibrated to electrons) and a track residual on one of the telescope planes.

![Landau distribution](/img/screenshots/eutel_landau.png)

![Residual](/img/screenshots/eutel_residual_x.png)
