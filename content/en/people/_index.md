---
# SPDX-FileCopyrightText: 2022 100uPET
# SPDX-License-Identifier: CC-BY-4.0
title: "People"
menu:
  main:
    weight: 20
---


<link rel="stylesheet" type="text/css" href="styles.css">

{{% blocks/section type="section" color="white" %}}
{{< figure src="/img/screenshots/team.png" alt="The team" >}}



{{< cardpane >}}
  {{< card header="Header card 1" >}}
    Content card 1
  {{< /card >}}
  {{< card header="Header card 2" >}}
    Content card 2
  {{< /card >}}
  {{< card header="Header card 3" >}}
    Content card 3
  {{< /card >}}
{{< /cardpane >}}


{{% cardpane %}}
{{% card header="TEST1" title="TEST2" subtitle="TEST3" footer="test" %}}
{{% /card %}}
{{% /cardpane %}}

{{% /blocks/section %}}


<section class="module parallax parallax-2">
  <div class="container">
    <h1>WORK</h1>
  </div>
</section>

<section class="module content">
  <div class="container">
    <h2>Lorem Ipsum Dolor</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  </div>
</section>

<section class="module parallax parallax-3">
  <div class="container">
    <h1>CONTACT</h1>
  </div>
</section>

<section class="module content contact-form">
  <div class="container">
    <h2>THIS WILL BE A CONTACT FORM</h2>
  </div>
</section>
