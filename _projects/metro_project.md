---
layout: page
title: METRO — Magnetic Road Markings for All-weather Perception
description: Passive magnetic tags and a low-cost magnetometer array that complement cameras for robust lane and symbol perception in adverse weather
img: assets/img/illustration_metro.png  # background image on the portfolio grid
importance: 1
category: work
related_publications: false
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/METRO_SenSys23.pdf' | relative_url }}" target="_blank">📄 Paper (ACM SenSys 2023)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/METRO" target="_blank">🧑‍💻 Code of METRO</a>
</p>

> **METRO** encodes lane markings and transverse road symbols (e.g., arrow markings) using **passive magnetic tags** and reads them with a **vehicle-mounted magnetometer array**. Magnetic sensing is **robust to visibility degradation** (e.g., rain/snow/fog/occlusion) and **complements cameras/LiDAR** while remaining **low-cost** and deployable on real roads.

## Motivation — a complementary path when vision degrades
Autonomous vehicles heavily rely on cameras and LiDAR to perceive road markings for lane keeping and navigation. However, existing vision pipelines degrade in **rain, snow, glare, or occlusion**; lane paint can be **covered** or **worn**. In contrast, magnetic fields are resilient to occlusion and can be sensed **reliably and efficiently**, thus improving the robustness of lane and symbol perception.

---

## System at a glance
**METRO** is a full-stack **magnetic road-marking system** with two core components:  
1) **Passive encoding** — passive and durable NdFeB magnets embedded/attached near lane paint encode lanes & transverse symbols via **polarity** and **spacing ratios**;  
2) **On-vehicle sensing & decoding** — a **1-D automotive-grade magnetometer array** under the front bumper samples tri-axial fields at high rate and a lightweight pipeline detects each on-road magnet, recovers **distance ratios**, and outputs **machine-readable lane/symbol semantics**.

<!-- Figure: system overview -->
<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/metro/illustration_metro.png"
     title="METRO system"
     class="img-fluid rounded z-depth-1" %}
  <div class="caption mt-2">
    METRO comprised of highly deployable, all-weather magnetic dots and a novel sensor array.
  </div>
</div>


---

## How METRO works — design & innovations
**Encode.** 
Arrange magnets so that **polarity** and **inter-magnet spacing ratios** jointly encode lanes and transverse symbols (arrows/text). 

**Sense.**
Sample tri-axial fields along the bar; use **first-derivative zero-crossings** to detect peaks/valleys and infer magnet **polarities**; align samples using vehicle **speed/heading** (e.g., CAN bus) to obtain **reliable distance ratios**.

**Denoise.**
Run **AMN — Adaptive Magnetic-field Neutralization** with reference sensors near wheel wells; an LMS-style filter cancels **wheel-induced periodic noise** with lightweight and real-time computation.

**Decode.**
Recover the embedded symbol/lane semantics for vehicle's guidance and control.

<div class="row justify-content-sm-center">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/metro/encode.png"
       title="Encode with polarity + distance ratios"
       class="img-fluid rounded z-depth-1 img-equal-cover" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/metro/peak_detection.png"
       title="Sense with derivative-based peak detection"
       class="img-fluid rounded z-depth-1 img-equal-cover" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/metro/LMS.png"
       title="AMN wheel-noise cancellation (reference sensors + LMS)"
       class="img-fluid rounded z-depth-1 img-equal-cover" %}
  </div>
</div>

---
## System implementation
**METRO** is implemented and deployed using commodity vehicles equipped with a **bumper-mounted magnetic sensing bar** and **reference sensors** near the wheel wells for adaptive noise calibration. The sensing bar integrates multiple **COTS triaxial magnetometers (MLX90393)** using a modular PCB design, connected to an embedded controller (Teensy 4.1) for high-rate sampling and onboard processing. Reference sensors continuously capture wheel-induced magnetic disturbances, which are adaptively canceled through AMN.  

For deployment, passive magnetic tags (e.g., cubic NdFeB magnets) are installed adjacent to **painted lane markings** such as **speed limits, divider lines, and stop lines**, fully compatible with standard roadwork procedures. A 3D-printed protective shell shields the magnets from environmental wear and tear. 
This design enables **non-invasive installation**, **low maintenance**, and **high durability**.

<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/metro/system_deployment.png"
     title="Implementation and deployment of METRO"
     class="img-fluid rounded z-depth-1" %}
  <div class="caption mt-2">
    Implementation and deployment of METRO: A–B show the sensing array installation on vehicles; C–D show reference sensors for wheel-noise calibration; E–G show real-road tag deployments; H–J show tag geometry and dimensions.
  </div>
</div>


---

## Experimental evaluation — setups and key results
We conducted extensive **on-vehicle field tests** covering a wide range of **vehicle speeds**, **sensor–ground clearances**, and **adverse weather/visibility** conditions (snow, rain, fog, glare), and compared METRO against a **camera baseline** on public-road deployments. Across these scenarios, METRO achieves an **overall detection/interpretation rate of >96%**, validating its practicality and robustness for real-world road marking perception.

### Key results (at a glance)
- **All-weather reliability.** Stable decoding under **snow cover, rain, fog, and glare**, where the camera baseline degrades.
- **Speed & clearance tolerance.** **Distance-ratio decoding** remains consistent across typical driving speeds (up to 55 mph) and bumper clearances (up to 35 cm).
- **Noise resilience.** **AMN** (reference sensors + LMS) effectively suppresses **wheel-induced periodic noise**, enabling lightweight on-vehicle processing.
- **Deployability.** **Passive tags** and **COTS magnetometers** on a bumper-width modular PCB support **low-cost installation and maintenance** for long-term real-road scenarios.

---

## Publication
Jike Wang, Shanmu Wang, Yasha Iravantchi, Mingke Wang, Alanson Sample, Kang G. Shin, Xinbing Wang, Chenghu Zhou, and Dongyao Chen. 2024. **METRO: Magnetic Road Markings for All-weather, Smart Roads.** *Proceedings of the 21st ACM Conference on Embedded Networked Sensor Systems (SenSys ’23).* Association for Computing Machinery, New York, NY, USA, 280–293. DOI: [10.1145/3625687.3625809](https://doi.org/10.1145/3625687.3625809)

<!-- Cite this work (collapsible) -->
<details class="mt-2">
  <summary><strong>📚 Cite our work (BibTeX)</strong></summary>
  <div class="mt-2">
    <pre id="metro-bibtex" style="white-space: pre-wrap; word-break: break-word; background:#f8f9fa; padding:12px; border-radius:8px; border:1px solid #e5e7eb; font-size:0.9rem;">
@inproceedings{10.1145/3625687.3625809,
  author    = {Wang, Jike and Wang, Shanmu and Iravantchi, Yasha and Wang, Mingke and Sample, Alanson and Shin, Kang G. and Wang, Xinbing and Zhou, Chenghu and Chen, Dongyao},
  title     = {METRO: Magnetic Road Markings for All-weather, Smart Roads},
  year      = {2024},
  isbn      = {9798400704147},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3625687.3625809},
  doi       = {10.1145/3625687.3625809},
  booktitle = {Proceedings of the 21st ACM Conference on Embedded Networked Sensor Systems},
  pages     = {280--293},
  numpages  = {14},
  keywords  = {magnetic sensing, all-weather road markings, magnetometer},
  location  = {Istanbul, Turkiye},
  series    = {SenSys '23}
}
    </pre>
    <button id="copy-metro-bibtex" class="btn btn-sm btn-outline-primary" onclick="
      navigator.clipboard.writeText(document.getElementById('metro-bibtex').innerText).then(()=>{
        const b=this; const old=b.innerHTML; b.innerHTML='Copied ✓'; setTimeout(()=>b.innerHTML=old,1200);
      });
    ">Copy BibTeX</button>
  </div>
</details>

---

<!-- Asset checklist
- assets/projects/metro/array_mount.jpg
- assets/projects/metro/tags_topview.jpg
- assets/projects/metro/field_deploy.jpg
- assets/projects/metro/pipeline_derivative.jpg
- assets/projects/metro/amn_cancel.jpg
- assets/projects/metro/speed_perf.jpg
- assets/projects/metro/snow_vs_cam.jpg
- assets/pdf/METRO_SenSys23.pdf
-->
