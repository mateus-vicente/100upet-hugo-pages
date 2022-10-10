---
title: "Screenshots"
menu:
  main:
    weight: 30
---

{{< blocks/cover title="Screenshots from a standard simulation" height="auto" >}}
{{< /blocks/cover >}}


{{% blocks/section type="section" color="white" %}}

# <span class="100uPET-colored-header">The Simulation Interface</span>

Below is a short screencast of a typical simulation run with a full beam telescope and a device under test (DUT). The run is
configured to produce 200 events and the logging level is set to `log_level = STATUS` to only print messages about the
simulation progress.

<script src="https://asciinema.org/a/183204.js" id="asciicast-183204" async></script>

{{% /blocks/section %}}


{{% blocks/section type="section" color="white" %}}

# <span class="100uPET-colored-header">Event Displays</span>

This event display represents multiple positron annihilations in the center of the scanner, with the resulting photon pair (in green) being emited and traversing the scanner.

{{< figure src="/img/screenshots/scanner_geo.png" alt="Single event display" >}}

Zoom in the scanner volume with two positron sources located inside.
{{< figure src="/img/screenshots/two_sources.png" alt="Event display of two sources" >}}

{{< figure src="/img/screenshots/scanner_gif.gif" alt="Animation of positrons annihilation and photons propagation" >}}


{{% /blocks/section %}}
