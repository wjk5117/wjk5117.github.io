---
layout: page
title: METRO — Magnetic Road Markings
description: Passive magnetic tags plus a low-cost magnetometer array that complement cameras for robust road-marking perception in adverse weather
img: assets/img/illustration_metro.png  # background image on the portfolio grid
importance: 1
category: work
related_publications: true
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/METRO_SenSys23.pdf' | relative_url }}" target="_blank">📄 Paper (ACM SenSys 2023)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/METRO" target="_blank">🧑‍💻 Code of METRO</a>
</p>

> **METRO** encodes lane markings and rich transverse symbols using **passive magnetic tags** and reads them with a **vehicle-mounted magnetometer array**. Magnetic sensing is **visibility-agnostic** (rain/snow/fog/glare/occlusion) and **complements cameras/LiDAR**, while remaining low-cost and easy to deploy on real roads.

## Motivation — a complementary sensing path for road markings
Visual pipelines can degrade in **rain, snow, glare, or occlusion**; lane paint can be covered or worn.
Magnetic fields are **not visibility-limited** and can be sensed **reliably and efficiently** as an auxiliary signal, enhancing robustness of lane and symbol perception.

---

## System at a glance
1) **Encode.** Small NdFeB magnets embedded/attached near lane paint encode lane and transverse symbols via **polarity** and **spacing ratios**.  
2) **Sense.** A **1-D magnetometer bar** mounted under the front bumper samples tri-axial fields at high rate.  
3) **Decode.** A lightweight pipeline detects magnetic peaks, recovers **distance ratios**, and decodes semantics for guidance and control.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/array_mount.jpg" title="Sensor bar mounted under the bumper" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/tags_topview.jpg" title="Passive magnetic tags for lanes & transverse symbols" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/field_deploy.jpg" title="Deployment on public roads" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: modular magnetometer bar; Middle: encoded tags (lanes & symbols); Right: real-road deployment.
</div>

---

## Key innovations
- **Spacing-ratio + polarity coding.** A compact encoding that carries **lane-level semantics** (lanes, arrows, text/icons) and is robust to speed variation.  
- **Derivative-based peak detection.** **Zero-crossings of the first derivative** provide reliable peak/valley and **polarity** detection under noise.  
- **Distance-ratio decoding.** Fuses **vehicle speed/heading** (e.g., CAN) with magnetic peaks to recover **geometry-invariant ratios**, stabilizing decoding across speeds.  
- **AMN: Adaptive Magnetic-field Neutralization.** Places **reference sensors** near wheel wells; an LMS-style filter adaptively cancels **wheel-induced periodic noise** without heavy computation.  
- **Deployable hardware.** **Low-cost, modular** bar (≈ bumper width) using COTS triaxial magnetometers; tags are **passive** magnets with thin protective shells, compatible with routine road-work procedures.

---

## How METRO works
1. **Encode.** Arrange magnets so that **polarity** and **inter-magnet spacing ratios** jointly encode lanes and transverse symbols.  
2. **Sense.** Sample tri-axial fields along the bar; use **derivative zero-crossings** to detect peaks/valleys and infer magnet polarities; align samples using vehicle **speed/heading** to obtain **distance ratios**.  
3. **Denoise.** Run **AMN** with reference sensors + LMS to remove **wheel noise**; decode the symbol/lane semantics for downstream planning.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/pipeline_derivative.jpg" title="Derivative-based peak detection & ratio recovery" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/amn_cancel.jpg" title="AMN wheel-noise cancellation (reference sensor + LMS)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Peak detection via derivative zero-crossings → ratio decoding with speed/heading alignment; AMN suppresses wheel-induced magnetic noise.
</div>

---

## Why it matters
- **All-weather reliability.** Magnetic sensing is unaffected by visibility (rain/snow/fog/glare), offering a dependable **complement** to cameras/LiDAR.  
- **Cost & scalability.** Off-the-shelf magnets and sensors; **modular PCB** bar and standard road-work practices reduce deployment/maintenance cost.  
- **Semantics for control.** Lane-level and transverse information (arrows/text/icons) are recovered as **machine-readable codes** for guidance and safety.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/speed_perf.jpg" title="Across vehicle speeds" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/clearance_perf.jpg" title="Vs. ground clearance" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/snow_vs_cam.jpg" title="Snow cover: METRO vs. camera baseline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evaluation across speeds, ground clearance, and adverse conditions; comparison with a camera baseline under snow cover.
</div>

---

<!-- Asset checklist (replace with your actual files):
- assets/projects/metro/array_mount.jpg
- assets/projects/metro/tags_topview.jpg
- assets/projects/metro/field_deploy.jpg
- assets/projects/metro/pipeline_derivative.jpg
- assets/projects/metro/amn_cancel.jpg
- assets/projects/metro/speed_perf.jpg
- assets/projects/metro/clearance_perf.jpg
- assets/projects/metro/snow_vs_cam.jpg
- assets/pdf/METRO_SenSys23.pdf
-->
