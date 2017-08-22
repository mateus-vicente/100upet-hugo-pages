---
title: "Screenshots"
date: 2017-08-15T15:55:12+02:00
draft: false
---

In the following, a few screenshots from a standard {{% allpix %}} simulation are presented.

## The Simulation Interface

Below is a short screencast of a typical simulation run with a full beam telescope and a device under test (DUT). The run is configured to produce 200 events and the logging level is set to `log_level = STATUS` to only print messages about the simulation progress.

{{< figure src="/img/screenshots/simulationcast.gif" caption="Screencast of short simulation" >}}


## Event Displays

This event display represents two Pi+ particles with an energy of 2 GeV crossing a detector setup with six Mimosa26 planes, one Timepix as DUT and a second Timepix as reference detector after the last downstream plane.

{{< figure src="/img/screenshots/eventdisplay.png" caption="Single event display" >}}


A secondary particle produced in the DUT can be observed, the color coding represents the charge of the respective particles.

This event display is rendered using the {{% allpix %}} standard visualization module `VisualizationGeant4` without additional configuration or changes.


## Charge Drift & Diffusion

The following plots present a visualization of the charge carrier drift as can be produced by the `GenericPropagation` module with its parameter `output_plots = true`. Shown is a single particle track crossing the sensor at an angle of 45 degrees. Electrons and holes drift to their respective electrodes under the influence of a linear electric field.

{{< figure src="/img/screenshots/eh-drift-3d.png" caption="3D visualization of charge carrier movement" >}}

The influence of the charge carrier diffusion can be revealed by looking at the projection of the same event along the particle trajectory as shown below.

{{< figure src="/img/screenshots/eh-pairs-drift.png" caption="Projection along particle trajectory to visualize diffusion" >}}


## Electric Field

{{% allpix %}} provides basic visualization of the electric fields used in the different sensors. The plot below shows an converted TCAD field generated using the DF-ISE converter tool which constructs regular grid using a barycentric interpolation scheme. The plot is produced by the `ElectricFieldReader` module with the appropriate parameter configuration, i.e. `output_plots = true`.

{{< figure src="/img/screenshots/electric-field-tcad.png" caption="Imported electric field from TCAD" >}}


## Hitmaps

The `DetectorHistogrammer` module can be used to retrieve basic per-detector monitoring plots such as detector hit maps or cluster size distributions as demonstrated below. This module does not require a special configuration to produce these histograms.

The following histogram for the DUT is the output of a simulation with 20'000 events using the setup displayed above.

{{< figure src="/img/screenshots/hitmap.png" caption="DUT hit map" >}}


## Analysis with External Tools

The following plots exemplary show an analysis of the simulation result using the [EUTelescope framework](http://eutelescope.web.cern.ch/). The simulation result is stored in EUTelescope's native format using the `LCIOWriter` module.

Shown is the cluster charge distribution of one detector in detector-specific units (i.e. not calibrated to electrons) and a track residual on one of the telescope planes.

{{< figure src="/img/screenshots/eutel_landau.png" caption="Landau charge distribution" >}}

{{< figure src="/img/screenshots/eutel_residual_x.png" caption="Unbiased track residual along the x-axis" >}}
