---
layout: page
title: Polaris
description: Vision-free magnetic fiducials for robust robot localization and context.
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Polaris is a **vision-free fiducial system** that replaces cameras and printed tags with a full-stack **magnetic constellation**: passive disc magnets on the ground + a lightweight magnetometer array on the robot. It enables **pose estimation and rich data encoding** even under NLOS, dust, poor lighting, or privacy-sensitive scenarios. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

### Highlights
- **MOSK (Magnetic Orientation-shift Keying)** for compact, high-capacity tags; a 3×3 cm tag with 9 magnets can encode **36 bits** (comparable to AprilTag 36h11). :contentReference[oaicite:2]{index=2}  
- **Accurate & efficient sensing**: millimeter-level magnet localization and ~1° heading accuracy with an embedded ESP32 pipeline. :contentReference[oaicite:3]{index=3}  
- **Low power**: a 2.5 cm × 1.2 cm, three-sensor array draws **25.08 mW**, suitable for miniature robots (even solar-powered). :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}  
- **Robust where vision fails**: designed to handle occlusion/visibility issues that commonly degrade visual fiducials. :contentReference[oaicite:6]{index=6}

---

### System at a glance
Polaris consists of (i) a **constellation tag** whose magnets’ *positions* and *polarity orientations* encode bits, and (ii) a **bar-shaped magnetometer array** plus a fast template-matching pipeline that detects magnets, estimates polarity orientation, and reconstructs the tag for ID and pose. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="Polaris sensing module on robot" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="Magnetic tag concept (MOSK)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="Comparison to visual tags" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: compact bar-shaped sensor array; Middle: MOSK encodes bits via polarity orientation; Right: Polaris offers similar encoding capacity to common visual fiducials in a much smaller, occlusion-resilient form factor. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}
</div>

---

### Why magnetic fiducials?
- **Reliability:** magnetic fields penetrate dust/water/concrete and remain robust under NLOS.  
- **Energy efficiency:** COTS Hall-effect magnetometers typically consume \<1 mA.  
- **Privacy:** no always-on cameras. :contentReference[oaicite:11]{index=11}

---

### Results (real-world)

- **Pose & decoding accuracy:** mean Euclidean error **0.58 mm** (STD 0.08 mm); mean heading error **0.997°** (STD 0.125°); BER ≈ **0.033** with 8-level MOSK on an ESP32 compute pipeline. :contentReference[oaicite:12]{index=12}  
- **Tiny tags & power:** thumbnail-sized **1.6×1.6 cm²** tags are decodable; three-sensor array **25.08 mW** on miniature robots; feasibility shown with a **30×25 mm** solar panel (~85 mW). :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}
  
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="Robot evaluation scenes" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="Power & accuracy summaries" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Evaluated on both a robot car and a miniature car with extensive noise/heading tests, and analyzed sensing+compute power budgets. :contentReference[oaicite:15]{index=15}
</div>

---

### Key features
- **Compact, scalable encoding.** Higher-order MOSK boosts capacity without extra hardware, enabling FEC and robust ID. :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18}  
- **Lightweight pipeline.** Simple peak/derivative detection + template matching → fast, accurate magnet localization/orientation. :contentReference[oaicite:19]{index=19}

---

### Publication
- **Polaris: Accurate, Vision-free Fiducials for Mobile Robots with Magnetic Constellation.** *ACM MobiCom ’24, Washington D.C., USA.* DOI: 10.1145/3636534.3690711. :contentReference[oaicite:20]{index=20}

