---
layout: page
title: Polaris — Vision-free Magnetic Fiducials
description: A full-stack magnetic constellation that enables pose estimation and rich data encoding when vision fails.
img: assets/projects/polaris/illustration_polaris.jpg
importance: 1
category: work
related_publications: true
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="assets/pdf/Polaris_MobiCom24-compressed.pdf" target="_blank">📄 Paper (ACM MobiCom 2024)</a>

  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/Polaris" target="_blank">🧑‍💻 Code of Polaris</a>
</p>

## Motivation — why magnetic fiducials first?
Visual fiducials (e.g., AprilTag) degrade with **occlusion and visibility** issues (dust, poor light) and bring **power/privacy** overheads.
Polaris sidesteps these by using **passive magnets + COTS magnetometers**: magnetic fields penetrate dust/water, and sensing is efficient.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/occlusion_ironfillings.jpg" title="Visual fiducial under iron filings: detection collapses" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/polaris_works_under_occlusion.jpg" title="Polaris still decodes and estimates pose under occlusion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: a camera-based fiducial loses detectability when lightly covered by iron filings/dust. Right: Polaris leverages magnetic fields to remain robust.
</div>

---

## System at a glance
Polaris replaces printed tags and cameras with a **magnetic constellation**:
1) a compact **ground tag** whose magnets’ *positions* and *polarity orientations* encode bits;  
2) a **bar-shaped magnetometer array** and a lightweight pipeline that detects magnets, estimates orientation, and reconstructs the tag for ID & pose.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/sensor_bar.jpg" title="Bar-shaped sensor array on robot" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/mosk_tag.jpg" title="MOSK magnetic tag (polarity orientation encodes bits)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/capacity_compare.jpg" title="Capacity vs. visual fiducials (similar capacity, smaller footprint)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: compact sensing module; Middle: MOSK encodes bits via disc-magnet orientation; Right: comparable payload to popular visual tags at a much smaller size.
</div>

---

## Highlights
- **MOSK (Magnetic Orientation-shift Keying):** a 3×3 cm tag with 9 magnets encodes **36 bits** (on par with AprilTag 36h11).  
- **Accurate & efficient:** ~**1°** heading and sub-**2–3 mm** per-magnet localization on a robot; **0.58 mm** mean and **0.997°** mean on a miniature platform.  
- **Low power:** a **25.08 mW** three-sensor array; embedded template-matching pipeline on ESP32-S3.  
- **Robust where vision fails:** handles dust/iron filings/poor light, and avoids privacy issues of always-on cameras.

---

## How it works (TL;DR)
- **Encode.** A chessboard-like 2D layout. Three corner magnets form a **position pattern**; other sites encode data via **polarity orientation** (+ optional spatial permutation).  
- **Sense.** The array samples tri-axial fields; **derivative zero-crossings** detect peaks & polarities. **Template alignment** (DDTW) finds each magnet’s orientation relative to the array.  
- **Localize & pose.** Two-sensor geometry gives lateral offsets; timestamps + speed give longitudinal positions. Reconstruct the tag → estimate robot pose → **decode ID**.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/pipeline_derivative.jpg" title="Derivative-based peak detection + DDTW orientation alignment" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/tag_reconstruction.jpg" title="Tag reconstruction and pose estimation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Lightweight sensing: peaks from derivatives; orientation via template alignment; triangulate corners for heading; then decode the MOSK bits.
</div>

---

## Results (real world)
- **Pose & decoding:** mean Euclidean error **0.58 mm** (STD 0.08 mm); mean heading error **0.997°** (STD 0.125°); BER ≈ **0.033** with 8-level MOSK on ESP32.  
- **Small & frugal:** **1.6×1.6 cm²** tag is decodable; sensing+compute power budgets fit miniature/small robots; sensor array **25.08 mW** (3 triaxial mags).

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/robot_scenes.jpg" title="Robot and miniature-platform evaluations" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/power_accuracy.jpg" title="Power and accuracy summaries" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evaluated across headings, tag densities, template sizes, and real-world interferences (iron debris, dirt, water, etc.).
</div>

---

## Key features for deployment
- **Compact, scalable encoding.** Higher-order MOSK boosts payload without extra hardware; works with FEC for robust IDs.  
- **Lightweight pipeline.** Peak/derivative + DDTW template alignment in C (tens of ms on embedded).  
- **Low-cost hardware.** Off-the-shelf disc magnets + COTS triaxial magnetometers; modular bar PCB.

---

## Publication
**Polaris: Accurate, Vision-free Fiducials for Mobile Robots with Magnetic Constellation.** *ACM MobiCom ’24, Washington, D.C., USA.* DOI: 10.1145/3636534.3690711

---

<!-- Replace these placeholders with your actual assets -->
<!--
assets/projects/polaris/hero.jpg
assets/projects/polaris/occlusion_ironfillings.jpg
assets/projects/polaris/polaris_works_under_occlusion.jpg
assets/projects/polaris/sensor_bar.jpg
assets/projects/polaris/mosk_tag.jpg
assets/projects/polaris/capacity_compare.jpg
assets/projects/polaris/pipeline_derivative.jpg
assets/projects/polaris/tag_reconstruction.jpg
assets/projects/polaris/robot_scenes.jpg
assets/projects/polaris/power_accuracy.jpg
assets/pdf/Polaris_MobiCom24.pdf
-->
