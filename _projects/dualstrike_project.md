---
layout: page
title: DualStrike — Magnetic Eavesdropping & Injection on Hall-effect Keyboards
description: DualStrike demonstrates non-invasive keystroke eavesdropping and per-key injection attacks on commodity Hall-effect keyboards.
img: assets/img/dualstrike/illustration_dualstrike.png
importance: 1
category: work
related_publications: false
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/DualStrike_NDSS26.pdf' | relative_url }}" target="_blank">📄 Paper (NDSS Symposium 2026)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/blankchenxm/DualStrike" target="_blank">🧑‍💻 Code of DualStrike</a>
  <a class="btn btn-sm btn-outline-primary" href="https://sites.google.com/view/magkey-anonymous?usp=sharing" target="_blank">🌐 Website</a>
</p>

> **DualStrike** is a practical, non-invasive attack on commodity **Hall-effect keyboards** that combines **magnetometer-based eavesdropping** with **electromagnet-based per-key injection**.
The attack device contains a magnetometer array for real-time keystroke inference and an electromagnet matrix that can spoof keypress fields with microsecond timing to trigger arbitrary keys; a calibration module realigns the device to keyboard posture to tolerate realistic displacement. DualStrike achieves near-perfect eavesdropping accuracy (e.g., **99.54%** in our experiments) and high injection throughput (up to **12,553 APM**).


<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/dualstrike/illustration_dualstrike.png"
     title="DualStrike overview — magnetometer eavesdropping + electromagnet injection (device can be concealed under a desk)"
     class="img-fluid rounded z-depth-1" %}
  <div class="caption mt-2">
    Real-world deployment of DualStrike. Note that the complete setup of DualStrike can be concealed underneath a desk or embedded within a carved groove under the desk.
  </div>
</div>

**For more details (system design and demo videos), see the [website](https://sites.google.com/view/magkey-anonymous?usp=sharing).**

---

## Publication
This work has been accepted by NDSS Symposium 2026. The preprint is available [here]({{ '/assets/pdf/DualStrike_NDSS26.pdf' | relative_url }}).