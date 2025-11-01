---
layout: page
title: METRO — Magnetic Road Markings for All-weather, Smart Roads
description: Passive magnetic tags + a low-cost magnetometer array for robust lane and symbol perception in adverse weather
img: assets/projects/metro/hero.jpg   # background image on the portfolio grid
importance: 1
category: work
related_publications: true
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="assets/pdf/METRO_SenSys23.pdf" target="_blank">📄 Paper (ACM SenSys 2023)</a>
  <!-- Optional:
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/yourname/metro" target="_blank">🧑‍💻 Code</a>
  -->
</p>

**METRO** is a new road-infrastructure approach that encodes lane markings and rich transverse symbols using **passive magnetic tags**, read by a **vehicle-mounted magnetometer array**. Magnetic sensing is inherently robust to rain, snow, glare, and occlusions, providing a complementary signal to cameras and LiDAR while remaining low-cost and easy to deploy.

### Highlights
- Passive magnetic tags for lanes and high-semantic symbols (arrows, text, icons)  
- Low-cost modular **magnetometer bar** mounted under the front bumper  
- Derivative-based **peak detection** and **distance-ratio** decoding  
- **Adaptive Magnetic-field Neutralization (AMN)** to cancel wheel-induced magnetic noise  
- Real-road deployment over extended periods with routine road-work procedures  

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/array_mount.jpg" title="Sensor array mounted under the bumper" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/tags_topview.jpg" title="Passive magnetic tags for lanes & symbols" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/field_deploy.jpg" title="Field deployment on public roads" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the magnetometer bar. Middle: encoded tags for lanes and transverse information. Right: deployment on real roads.
</div>

### How METRO works
1. **Encode.** Small NdFeB magnets are arranged so that **polarity** and **spacing ratios** jointly encode lane and symbol information.  
2. **Sense.** A 1-D magnetometer array samples tri-axial fields at high rate. **Zero-crossings of the first derivative** reveal peaks/valleys and magnet polarities; vehicle speed/heading (e.g., from CAN) align samples to recover **distance ratios**.  
3. **Denoise.** Reference sensors near the wheel well plus an LMS-style filter implement **AMN** to suppress periodic wheel-related magnetic noise.  

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/pipeline_derivative.jpg" title="Derivative-based peak detection pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/amn_cancel.jpg" title="AMN wheel-noise cancellation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Robust peak/valley detection with derivative zero-crossings; AMN cancels wheel-induced noise using reference sensors.
</div>

### Why it matters
- **All-weather reliability.** Magnetic fields are unaffected by visibility (rain/snow/fog/glare) and complement vision.  
- **Deployable and cost-effective.** Off-the-shelf magnets and sensors; compatible with standard road-work processes.  
- **Lane-level semantics.** Polarity + spacing-ratio coding enables fine-grained guidance and rich roadside information.  

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/speed_perf.jpg" title="Performance across vehicle speeds" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/clearance_perf.jpg" title="Performance vs. ground clearance" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/metro/snow_vs_cam.jpg" title="Snow cover: METRO vs. camera baseline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evaluation across speeds, ground clearance, and adverse conditions; comparison with a vision baseline under snow cover.
</div>

### Deployment notes
- **Sensor bar.** 1-D modular PCB segments (≈ bumper width) for easy assembly and maintenance.  
- **Tags.** Magnets with thin protective shells adhered near existing road markings. Critical waypoints (e.g., stop lines) can be placed meters ahead to ensure reaction time.  

---

<!-- Asset checklist (replace with your actual files):
- assets/projects/metro/hero.jpg
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
