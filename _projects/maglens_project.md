---
layout: page
title: MagLens — Mobile Magnetic Imaging
description: A portable magnetic imaging system that reveals the contours and depth of hidden ferrous structures, from steel rebars to iron pipes.
img: assets/img/maglens/overview.png
importance: 0
category: work
related_publications: false
---

<p>
  <a class="btn btn-sm btn-outline-primary" href="{{ '/assets/pdf/MagLens_SenSys26.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">📄 Paper (ACM/IEEE SenSys 2026)</a>
  <a class="btn btn-sm btn-outline-primary" href="https://doi.org/10.1145/3774906.3802749" target="_blank" rel="noopener noreferrer">🔗 ACM Digital Library</a>
  <a class="btn btn-sm btn-outline-primary" href="https://www.youtube.com/watch?v=kVdnaYOYC8w" target="_blank" rel="noopener noreferrer">🎥 Demo of MagLens</a>
</p>

> **MagLens** reconstructs the **contours and cover depth of hidden ferrous structures** using a portable magnetometer array. It combines a **synthetic aperture of magnetic sensors (SAMS)** with a **physics-informed neural imaging pipeline**, turning weak magnetic signatures into detailed images of rebars, metal studs, and iron pipes.

<div class="mt-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/maglens/overview.png"
     alt="Handheld MagLens scanner and reconstructed contours of a metal stud, iron pipe, corroded rebar, and bent rebar"
     title="MagLens: mobile imaging of ferrous building structures"
     class="img-fluid rounded z-depth-1"
     zoomable=true
     caption="MagLens combines a handheld scanner with geometric reconstruction and structural condition assessment. Figure 1 from our SenSys 2026 paper." %}
</div>

## Motivation — looking beyond object detection

Steel rebars, metal studs, and iron pipes are often concealed behind concrete or other building materials. Inspecting them requires more than knowing that metal is present: **shape, position, cover depth, and changes in cross section** help characterize the structure and its condition.

Existing inspection tools make different trade-offs between resolution, penetration, cost, and mobility. Rebar locators provide useful position and depth estimates, while recovering fine contours remains challenging. Dense magnetic sensor grids can capture detailed field maps, but their hardware complexity and short working distances limit portable use.

MagLens builds on the **remanent magnetization of iron and steel**. Magnetic fields pass through non-magnetic coverings such as concrete, allowing surface measurements to reveal concealed ferrous objects. The challenge is to capture weak signals at practical distances and recover geometry from field patterns that also depend on depth and magnetization.

---

## System at a glance

MagLens brings together two components:

1. **Synthetic aperture of magnetic sensors.** A compact linear array rotates to collect spatially dense magnetic measurements over a circular region. An optional pre-magnetization step strengthens weak target signals at longer distances.
2. **Physics-informed imaging.** A neural network trained primarily on simulated magnetic fields jointly predicts an object's contour and its distance from the sensor. Multiple local scans can be aligned to reconstruct a larger wall area.

The prototype uses **nine RM3100 magneto-inductive sensors** on a **21.4 × 1.8 cm** sensing board. A motorized fixture provides repeatable rotational sampling, while Bluetooth Low Energy streams sensor readings to a host computer. The complete portable assembly weighs **922.4 g**.

<div class="mt-3">
  {% include figure.liquid
     path="assets/img/maglens/hardware.png"
     alt="Nine-sensor RM3100 board, stepper motor and fixture components, and assembled MagLens scanning platform"
     title="MagLens hardware design"
     class="img-fluid rounded z-depth-1"
     zoomable=true
     caption="The sensor array, modular rotation mechanism, and assembled platform. Figure 6 from the paper." %}
</div>

## How MagLens works — design and innovations

### 1. Capture a dense magnetic field with a compact array

Rotating the sensor array creates a **virtual sensing aperture** without building a dense two-dimensional sensor grid. With a 16 cm scan radius, the prototype covers approximately **804 cm² per rotation**. MagLens interpolates the measurements into a regular field map and compensates for the changing orientation of the sensor axes during rotation.

The system measures **static remanent magnetic fields**. Its synthetic aperture comes from spatial sampling rather than the phase-coherent reconstruction used in synthetic-aperture radar. When the target signal is too weak, briefly placing a passive magnet against the surface before scanning can improve the subsequent reconstruction.

### 2. Generate training data from object geometry

Collecting magnetic scans for every shape, depth, and material is expensive. MagLens instead represents a ferrous object as a **voxelized collection of magnetized segments** and synthesizes the resulting magnetic fields. The dataset varies geometry, sensor–object distance, magnetization strength and direction, object placement, and multi-object layouts.

The training dataset contains **26,568 synthetic samples and 720 real samples**. The real measurements account for **2.6% of the dataset** and support adaptation from simulation to physical objects. Varying magnetization while retaining the same geometry helps the model separate structural information from changes in magnetic state.

### 3. Jointly reconstruct contour and depth

The imaging model takes a **256 × 256 × 3 magnetic field map** as input. A U-shaped CNN encoder–decoder with a **Swin Transformer bottleneck** predicts two outputs: a contour mask and a scalar sensor–object distance. Distance-aware scaling converts the predicted mask back to the object's spatial footprint.

<div class="mt-3">
  {% include figure.liquid
     path="assets/img/maglens/imaging_pipeline.png"
     alt="Three-axis magnetic maps enter a CNN encoder, Swin Transformer bottleneck, and decoder to predict a contour mask and cover depth"
     title="Physics-informed neural imaging pipeline"
     class="img-fluid rounded z-depth-1"
     zoomable=true
     caption="Joint contour reconstruction and depth estimation from three-axis magnetic measurements. Figure 13 from the paper." %}
</div>

---

## Experimental evaluation — key results

We evaluate MagLens on straight, bent, and intersecting rebars; metal studs and iron pipes; previously unseen ferrous geometries; accelerated corrosion; and wall inspection. The results below retain the conditions of their respective experiments.

<div class="table-responsive" markdown="1">

| Evaluation                         | Result                                                                               | Conditions                                                                                                |
| :--------------------------------- | :----------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| Rebar imaging at typical distances | Contour IoU of **0.98, 0.95, and 0.91**; depth errors of **0.24, 0.26, and 0.30 cm** | Sensor–object distances of **1, 3, and 5 cm**, respectively, without external pre-magnetization           |
| Extended sensing distance          | Contour IoU of **0.81** at **11 cm**                                                 | With pre-magnetization; depth errors remained below **0.5 cm** across the tested pre-magnetized distances |
| Corrosion assessment               | Maximum diameter estimation error of **1 mm**                                        | Cross sections measured during an accelerated rebar-corrosion experiment                                  |
| Wall reconstruction                | Contour IoU of **0.94** and depth error below **0.35 cm**                            | A **60 × 60 cm** concrete wall testbed with three rebars at **3 cm** cover depth                          |
| Unseen geometries                  | Contour IoU of **0.82–0.85** and depth errors below **0.5 cm**                       | A disc spring, pipe-wrench hook jaw, and garden shears absent from training                               |

</div>

_IoU (intersection over union) measures the overlap between predicted and ground-truth contours; higher is better. These measurements are reported in Sections 7.3–7.9 of the paper._

### Revealing corrosion through geometric change

MagLens captures local narrowing and contour deformation as a rebar corrodes. We compare reconstructed cross sections with caliper measurements at several stages of an accelerated corrosion experiment. The reconstructed changes track the material loss, providing a geometric basis for condition assessment.

<div class="mt-3">
  {% include figure.liquid
     path="assets/img/maglens/corrosion.png"
     alt="Accelerated corrosion experiment and rebar photographs paired with reconstructed contours at 0, 18, 36, 54, and 72 hours"
     title="Rebar corrosion assessment with MagLens"
     class="img-fluid rounded z-depth-1"
     zoomable=true
     caption="Measured and reconstructed rebar cross sections throughout the corrosion experiment. Figure 21 from the paper." %}
</div>

### From local scans to a wall-scale image

For the wall testbed, the operator marks overlapping scan centers, performs a rotation at each center, and aligns the resulting local reconstructions using their known spatial offsets. The stitched image recovers all three embedded rebars and their layout. The full inspection takes **12 minutes**, including **four minutes for marking and eight minutes for nine scans** in this setup.

We also inspect two real building walls and compare the estimated rebar dimensions and depths with a commercial rebar locator. These real-wall measurements use the locator as a reference, rather than destructive ground-truth verification.

<div class="mt-3">
  {% include figure.liquid
     path="assets/img/maglens/wall_inspection.png"
     alt="Concrete wall testbed, overlapping scan plan, handheld scanning, and stitched reconstruction showing three embedded rebars"
     title="End-to-end wall scanning and reconstruction"
     class="img-fluid rounded z-depth-1"
     zoomable=true
     caption="From a planned sequence of local scans to a stitched image of concealed reinforcement. Figure 26 from the paper." %}
</div>

### Runtime and practical considerations

The sensor array consumes **less than 0.5 W**, while the motorized scanning unit consumes **6.24 W**. Neural inference takes approximately **275 ms on an RTX 3090 GPU**; this is the prediction time after acquisition, not the duration of a complete scan. At a tested rotation speed of 60°/s, a full rotation takes six seconds, with some reduction in reconstruction accuracy relative to slower scans.

Sensing range depends on signal strength and magnetization. Mixed ferrous objects can produce overlapping magnetic fields, while uneven surfaces introduce varying stand-off distances. The paper discusses extending the synthetic training set to cover these conditions more broadly.

---

## Demo

Watch the [MagLens demonstration](https://www.youtube.com/watch?v=kVdnaYOYC8w) for handheld scanning and reconstruction examples. The video is also linked from the [Flux Lab project page](https://flux.chendy.tech/projects/maglens.html).

## Publication

Jike Wang, Yasha Iravantchi, Mingke Wang, Alanson Sample, Kang Geun Shin, Xinbing Wang, and Dongyao Chen. 2026. **MagLens: Bringing Mobile, Fine-Grained Imaging to Ferrous Building Structures.** _Proceedings of the 2026 ACM/IEEE International Conference on Embedded Artificial Intelligence and Sensing Systems (SenSys '26)_, 347–361. DOI: [10.1145/3774906.3802749](https://doi.org/10.1145/3774906.3802749).

<details class="mt-2">
  <summary><strong>📚 Cite our work (BibTeX)</strong></summary>
  <div class="mt-2">
    <pre id="maglens-bibtex" style="white-space: pre-wrap; overflow-wrap: anywhere; padding: 12px; border: 1px solid var(--global-divider-color); border-radius: 8px; font-size: 0.9rem;">
@inproceedings{wang2026maglens,
  author = {Wang, Jike and Iravantchi, Yasha and Wang, Mingke and Sample, Alanson and Shin, Kang Geun and Wang, Xinbing and Chen, Dongyao},
  title = {MagLens: Bringing Mobile, Fine-Grained Imaging to Ferrous Building Structures},
  booktitle = {Proceedings of the 2026 ACM/IEEE International Conference on Embedded Artificial Intelligence and Sensing Systems},
  year = {2026},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  pages = {347--361},
  numpages = {15},
  isbn = {9798400723094},
  doi = {10.1145/3774906.3802749},
  url = {https://doi.org/10.1145/3774906.3802749},
  series = {SenSys '26}
}
    </pre>
    <button type="button" class="btn btn-sm btn-outline-primary" id="copy-maglens-bibtex">Copy BibTeX</button>
    <span id="maglens-copy-status" class="ml-2" role="status" aria-live="polite"></span>
  </div>
</details>

<script>
  document.getElementById('copy-maglens-bibtex').addEventListener('click', async function () {
    const status = document.getElementById('maglens-copy-status');
    try {
      await navigator.clipboard.writeText(document.getElementById('maglens-bibtex').textContent.trim());
      status.textContent = 'Copied!';
    } catch (error) {
      status.textContent = 'Please select and copy the citation above.';
    }
  });
</script>

<!-- Figures extracted from the repository's MagLens_SenSys26.pdf: 1, 6, 13, 21, and 26. -->
