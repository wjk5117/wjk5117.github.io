---
layout: page
title: METRO — Magnetic Road Markings for All-weather Perception
description: Passive magnetic tags + a low-cost magnetometer array that complement cameras for robust lane and symbol perception in adverse weather
img: assets/img/illustration_metro.png  # background image on the portfolio grid
importance: 1
category: work
related_publications: false
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/METRO_SenSys23.pdf' | relative_url }}" target="_blank">📄 Paper (ACM SenSys 2023)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://github.com/wjk5117/METRO" target="_blank">🧑‍💻 Code of METRO</a>
</p>

> **METRO** encodes lane markings and transverse road symbols using **passive magnetic tags** and reads them with a **vehicle-mounted magnetometer array**. Magnetic sensing is **robust to visibility degradation** (rain/snow/fog/glare/occlusion) and **complements cameras/LiDAR** while remaining **low-cost** and deployable on real roads.

## Motivation — a complementary path when vision degrades
Vision pipelines degrade in **rain, snow, glare, or occlusion**; lane paint can be **covered** or **worn**.  
Magnetic fields are **not visibility-limited** and can be sensed **reliably and efficiently** as an auxiliary signal, improving the robustness of lane and symbol perception.

---

## System at a glance
**METRO** is a full-stack **magnetic road-marking system** with two core components:  
1) **Passive encoding** — small NdFeB magnets embedded/attached near lane paint encode lanes & transverse symbols via **polarity** and **spacing ratios**;  
2) **On-vehicle sensing & decoding** — a **1-D magnetometer bar** under the front bumper samples tri-axial fields at high rate and a lightweight pipeline detects peaks, recovers **distance ratios**, and outputs **machine-readable lane/symbol semantics**.

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

## How METRO works — design & innovations
**Encode.** Arrange magnets so that **polarity** and **inter-magnet spacing ratios** jointly encode lanes and transverse symbols (arrows/text/icons).  
**Sense.** Sample tri-axial fields along the bar; use **first-derivative zero-crossings** to detect peaks/valleys and infer magnet **polarities**; align samples using vehicle **speed/heading** (e.g., CAN) to obtain **geometry-invariant distance ratios**.  
**Denoise.** Run **AMN — Adaptive Magnetic-field Neutralization** with reference sensors near wheel wells; an LMS-style filter cancels **wheel-induced periodic noise** without heavy computation.  
**Decode.** Recover the symbol/lane semantics and expose **machine-readable outputs** for guidance and control.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/pipeline_derivative.jpg" title="Derivative-based peak detection & ratio recovery" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/metro/amn_cancel.jpg" title="AMN wheel-noise cancellation (reference sensors + LMS)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Peak detection via derivative zero-crossings → ratio decoding with speed/heading alignment; AMN suppresses wheel-induced magnetic noise.
</div>

---

## Experimental evaluation — setups and key results

We evaluated **METRO** with on-vehicle deployments across speeds, clearances, and adverse weather, and compared against a camera baseline.

### Key results (at a glance)
- **All-weather robustness.** Stable decoding through **snow cover/glare/fog/rain**, where visual lane detection degrades.  
- **Speed & clearance tolerance.** **Distance-ratio decoding** remains reliable across typical driving speeds and bumper clearances.  
- **Deployability.** Passive tags + COTS sensors; bumper-width modular PCB bar supports **low-cost installation & maintenance**.

<!-- Figure A: performance across speed/clearance -->
<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/projects/metro/speed_perf.jpg"
     title="Performance across vehicle speeds"
     class="img-fluid rounded z-depth-1" %}
</div>

<hr class="my-4"/>

<!-- Figure B: adverse weather comparison -->
<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/projects/metro/snow_vs_cam.jpg"
     title="Snow cover: METRO vs. a camera baseline"
     class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption mt-2">
  METRO preserves machine-readable lane/symbol semantics under visibility degradation, complementing the camera baseline.
</div>

---

## Publication
<!-- 用你的正式条目替换下面这行作者与页码 (如果你给我完整引用，我可替换成ACM官方格式) -->
## Publication
Jike Wang, Shanmu Wang, Yasha Iravantchi, Mingke Wang, Alanson Sample, Kang G. Shin, Xinbing Wang, Chenghu Zhou, and Dongyao Chen. 2024.  
**METRO: Magnetic Road Markings for All-weather, Smart Roads.**  
*Proceedings of the 21st ACM Conference on Embedded Networked Sensor Systems (SenSys ’23).*  
Association for Computing Machinery, New York, NY, USA, 280–293.  
DOI: [10.1145/3625687.3625809](https://doi.org/10.1145/3625687.3625809)

<!-- Cite this work (collapsible) -->
<details class="mt-2">
  <summary><strong>📚 Cite this work (BibTeX)</strong></summary>
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
