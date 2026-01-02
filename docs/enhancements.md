---
title: Enhancing spectral features
sidebar_label: Enhancing spectra
keywords: ["data processing", "data refinement", "second derivative", "laplacian", "curvature method", "2d curvature"]
---

Sometimes our spectra are not well resolved. In such cases, we may perform some
post processing to enhance the spectral features.

:::caution

Following modules are currently experimental and under development. Please
review the codes and use with caution. You may instead use the [Igor Macro](
https://github.com/zhangpengphi/curvature) implemented by Prof. P. Zhang.

:::

Here is how the original data looks like:

```python showLineNumbers
url = 'https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt'
data, energy, angle = arp.load_ses_spectra(url)

plt.imshow(data, origin = 'lower', aspect = 'auto', \
           extent = (angle[0], angle[-1], energy[0], energy[-1]))
plt.xlabel("$\\theta$ (deg)")
plt.ylabel("$E_{kin}$ (eV)")
plt.set_cmap('magma_r')
plt.show()
```

![plot-sample-spectra](../static/img/plot-sample-spectra.webp)

## Laplacian
We can take the double derivative of the spectra in order to enhance the
spectral features:

$$
I' = \frac{\partial^2 I}{\partial x^2} + w^2 \frac{\partial^2 I}{\partial y^2}
$$

Since the $x$ and $y$ scales represent different quantities (units), we have a
weight factor $w$ to account for this.

```python showLineNumbers
# diff2 = arp.laplacian(data, x, y, bw=5, w=1)
diff2 = arp.laplacian(data, energy, angle)

plt.imshow(diff2, vmax=0, cmap='terrain_r')
plt.axis('off')
plt.show()
```

![laplacian](../static/img/laplacian.webp)

## 2D curvature

The curvature method could be more appropriate to enhance spectral features. Two
dimensional curvature is given by:

$$
I' = \frac{\left[1 + C_x \left(\frac{\partial I}{\partial x}\right)^2\right] C_y
\frac{\partial^2 I}{\partial y^2} - 2 C_x C_y \frac{\partial I}{\partial x}
\frac{\partial I}{\partial y} \frac{\partial^2 I}{\partial x \partial y} +
\left[1+ C_y\left(\frac{\partial I}{\partial y}\right)^2\right] C_x
\frac{\partial^2 I}{\partial x^2}}{\left[1 + C_x \left(\frac{\partial I}
{\partial x}\right)^2 + C_y \left(\frac{\partial I}{\partial y}\right)^2
\right]^{3/2}}
$$

The details about the curvature method can be found here: P. Zhang et. al., *A
precise method for visualizing dispersive features in image plots*, [Review of
Scientific Instruments **82**, 043712 (2011)](https://doi.org/10.1063/1.3585113).


```python showLineNumbers
# cv2d = arp.cv2d(data, x, y, bw=5, c1=0.001, c2=0.001, w=1)
cv2d = arp.cv2d(data, energy, angle)

plt.imshow(cv2d, vmax=0, cmap='terrain_r')
plt.axis('off')
plt.show()
```

![cv2d](../static/img/cv2d.webp)

You may vary various free parameters ($C_x$, $C_y$, $w$) in order to get the
best result specific to your dataset.
