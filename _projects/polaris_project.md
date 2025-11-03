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
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/Polaris_MobiCom24-compressed.pdf' | relative_url }}" target="_blank">📄 Paper (ACM MobiCom 2024)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/Polaris" target="_blank">🧑‍💻 Code of Polaris</a>
  <!-- add a Demo of Polaris -->
  <a class="btn btn-sm btn-outline-primary" href="https://www.youtube.com/watch?v=gdAEeNdMJk0" target="_blank">🎥 Demo of Polaris</a>
</p>

> **Polaris** is a **vision-free fiducial system** built on a **magnetic constellation** of passive disc magnets and a lightweight **magnetometer array**.It provides **reliable relative pose estimation** and **high-capacity ID encoding** even under **occlusion, dust, low light,** and **privacy** constraints.
The tags are **battery-free** and **low-cost**, making Polaris a practical **complement** to existing camera-based fiducials.


## Motivation — a complementary path when vision degrades
Vision-based fiducials (e.g., AprilTag) are sensitive to **visibility** (e.g., occlusion, low light) and can raise **power** and **privacy** concerns. In contrast, magnetic sensing is **robust to occlusion** and penetrates common obstructions, providing a **low-power, camera-free** complementary signal that preserves **robust relative pose and high-capacity IDs** when vision degrades.


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/polaris/occlusion_test.png" title="Camera fiducial fails under occlusion" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/polaris/robustness_exp_polaris.png" title="Polaris still decodes ID and estimates pose under occlusion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: visual fiducials fail with light occlusion. Right: Polaris remains readable, providing a robust complementary signal when vision is impaired.
</div>

---

## System at a glance
**Polaris** is a full-stack **magnetic fiducial** with two core components:  
1) a compact **constellation tag** — MOSK-coded passive disc magnets where bits are carried by **spatial placement** and **polarity (N/S) orientations**;  
2) a **linear magnetometer array** with a lightweight decoding pipeline that performs **magnetic field sampling → magnet detection & polarity inference → constellation reconstruction**, yielding **ID decoding and relative pose estimation**.


<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/illustration_polaris.png"
     title="Polaris overview: sensing module and MOSK-coded constellation tag"
     class="img-fluid rounded z-depth-1" %}
  <div class="caption mt-2">
  (A) shows the magnetic sensing array of Polaris on different robotic systems; 
  (B) and (C) compare the legacy ground-mounted vision-based tags with Polaris tags. Note they have the same **encoding capacity** and posture calibration capability.
  </div>
</div>


---

## How Polaris works — design & innovations
**Polaris** realizes a **vision-free fiducial** by replacing visual patterns with a **magnetic constellation** that encodes information through the **orientation** of diametrically magnetized discs and decodes it via a **linear magnetometer array**.

### 1. MOSK-coded constellation
Each tag adopts **Magnetic Orientation-shift Keying (MOSK)**, a digital modulation scheme where every magnet stores an **M-ary symbol** using its **dipole orientation** (e.g., eight discrete angles -> 3 bits).  
Unlike visual textures or printed codes, orientation is **translation-invariant** and insensitive to small lateral displacements, allowing dense placement within a compact footprint.  
A typical 3 × 3 cm tag with nine magnets achieves **AprilTag-level payloads** while remaining passive, thin, and durable.
Optional **spatial permutation** and **CRC/FEC** layers enhance ID robustness against missing or flipped magnets.

### 2. Sensing and decoding pipeline
A **linear magnetometer array** samples tri-axial magnetic fields as the robot passes over the tag.  
Polaris employs a lightweight **derivative-based detector** to identify field zero-crossings corresponding to individual magnets and their polarities.  
For each detected peak, a short **template matching** procedure based on **Dynamic Derivative Time Warping (DDTW)** estimates the local **dipole angle**, reconstructing the constellation pattern.  
Using the known array geometry and motion odometry, the system infers each magnet’s position and the tag’s **relative pose (x, y, heading)**, followed by **symbol demodulation** and **CRC/FEC verification** to output a stable **ID + pose** stream in real time on embedded hardware.

### 3. Hardware design and deployment
The sensing bar integrates low-cost **Hall-effect magnetometers** on a modular PCB, connected to an embedded controller (e.g., nRF52832).  
The architecture emphasizes **low power**, **low latency**, and **ease of integration** with mobile robots or sensor heads, enabling camera-free fiducial tracking even on resource-constrained platforms.



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
