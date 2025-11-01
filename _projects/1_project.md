---
layout: page
title: Polaris — Vision-free Magnetic Fiducials
description: A full-stack magnetic fiducial system that complements vision by enabling pose estimation and rich data encoding when cameras struggle.
img: assets/img/illustration_polaris.png
importance: 1
category: work
related_publications: true
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="assets/pdf/Polaris_MobiCom24-compressed.pdf" target="_blank">📄 Paper (ACM MobiCom 2024)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/Polaris" target="_blank">🧑‍💻 Code of Polaris</a>
</p>

> **Polaris** is a **vision-free fiducial** based on a **magnetic constellation**: tiny passive disc magnets on the floor plus a lightweight **magnetometer array** on the robot. It **complements cameras** by preserving **precise pose** and **high-capacity IDs** under occlusion, dust, low light, or privacy constraints.

## Motivation — a complementary path when vision degrades
Visual fiducials (e.g., AprilTag) can be impaired by **occlusion/visibility** issues (dust, occlusion, low light) and may raise **power/privacy** concerns.
Magnetic fields are **not visibility-limited** and can pass through debris or coverings, offering a **low-power, camera-free** complementary signal.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/occlusion_ironfillings.jpg" title="Camera fiducial under iron filings: detection collapses" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/polaris_works_under_occlusion.jpg" title="Polaris still decodes and estimates pose under occlusion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: camera-based fiducials fail with light occlusion. Right: Polaris remains readable, providing a complementary signal when vision is impaired.
</div>

---

## System at a glance
Polaris is a **full-stack magnetic sensing system** with two components:  
1) a compact **constellation tag** whose *magnet positions* and *polarity orientations* encode bits;  
2) a **linear magnetometer array** and a lightweight pipeline that detects magnets, estimates orientation, reconstructs the tag, and outputs **ID + pose**.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/sensor_bar.jpg" title="Bar-shaped sensing module on the robot" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/mosk_tag.jpg" title="MOSK tag: bits via dipole orientation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/projects/polaris/capacity_compare.jpg" title="Capacity vs. visual tags (similar payload, smaller footprint)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: compact sensor bar; Middle: MOSK encodes bits using magnet orientation; Right: similar capacity to popular visual tags at a fraction of the size.
</div>

---

## Key innovations
- **MOSK — Magnetic Orientation-shift Keying.**  
  A **digital modulation scheme** that stores an **M-ary symbol** at each site via the **orientation** of a **diametrically magnetized disc magnet** (e.g., 8 orientations ⇒ 3 bits/site). Orientation is **translation-invariant** and robust to small lateral offsets. A **3×3 cm** tag with 9 magnets encodes **36 bits** (on par with AprilTag 36h11) in a **much smaller footprint**, and works with **CRC/FEC** for robust IDs.
- **Lightweight, accurate sensing pipeline (embedded).**  
  **Derivative zero-crossings** reliably detect magnets and polarity; **template alignment** (DDTW) estimates dipole **orientation**; **two-sensor geometry + timestamp/velocity fusion** localizes magnets (sub-**2–3 mm**) and yields **~1° heading**. The full pipeline runs **real-time on an ESP32-S3**.
- **Low-cost, low-power hardware.**  
  COTS **Hall-effect magnetometers** on a modular **bar PCB**; three-sensor array draws **25.08 mW**, suitable for miniature or solar-powered robots.
- **Complements vision.**  
  Operates under dust/iron filings/poor light and avoids always-on cameras in sensitive spaces—ideal for **fusion or fallback** with visual fiducials.

---

## How it works
- **Encode.** A chessboard-like layout: three corners provide a **position pattern**; remaining sites carry MOSK symbols (dipole orientations), with optional **spatial permutation** to boost payload or add error protection.  
- **Sense.** The array samples tri-axial magnetic fields; **first-derivative zero-crossings** reveal peaks & polarities; a short **template** matched via DDTW estimates each magnet’s **dipole angle** relative to the array.  
- **Localize & pose.** Two longitudinally separated sensors give **lateral offsets** (from amplitude/geometry) and **longitudinal positions** (from timestamps + speed). Reconstruct the tag → **pose** (x, y, heading) → **ID decode + CRC/FEC check**.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/pipeline_derivative.jpg" title="Derivative-based peak detection + DDTW orientation alignment" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/tag_reconstruction.jpg" title="Tag reconstruction → pose → ID decode" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Detect → orient → localize → reconstruct → pose → decode — all on embedded hardware within tens of milliseconds.
</div>

---

## Experiment results
- **Pose & decoding.** Mean Euclidean error **0.58 mm** (STD 0.08 mm); mean heading error **0.997°** (STD 0.125°); BER ≈ **0.033** with 8-level MOSK on ESP32.  
- **Tiny tags & frugal power.** **1.6×1.6 cm²** tags remain decodable; sensing + compute budgets fit miniature platforms; **25.08 mW** sensor bar (3 Hall-effect mags).

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/robot_scenes.jpg" title="Robot & miniature-platform evaluations" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/polaris/power_accuracy.jpg" title="Power and accuracy summaries" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evaluated across headings, tag densities, template sizes, and real-world interferences (iron debris, dirt, water, etc.).
</div>

---

## Publication
**Polaris: Accurate, Vision-free Fiducials for Mobile Robots with Magnetic Constellation.** *ACM MobiCom ’24, Washington, D.C., USA.* DOI: 10.1145/3636534.3690711

---

<!-- Replace these placeholders with your actual assets -->
<!--
assets/projects/polaris/occlusion_ironfillings.jpg
assets/projects/polaris/polaris_works_under_occlusion.jpg
assets/projects/polaris/sensor_bar.jpg
assets/projects/polaris/mosk_tag.jpg
assets/projects/polaris/capacity_compare.jpg
assets/projects/polaris/pipeline_derivative.jpg
assets/projects/polaris/tag_reconstruction.jpg
assets/projects/polaris/robot_scenes.jpg
assets/projects/polaris/power_accuracy.jpg
assets/pdf/Polaris_MobiCom24-compressed.pdf
-->
