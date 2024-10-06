---
title: Getting started
slug: /
keywords: ["arpes", "data analysis", "data visualization", "python", "matplotlib", "scienta-omicron", "scienta", "ses"]
---
### Installation

We will need [Python 3](https://www.python.org/) installed in your system. We
can install latest stable release of **arpespytontools** from PyPI:

```bash
pip install --upgrade arpespythontools
```

I will be using Jupyter notebook to write and execute our python codes. You can
install Jupyter Lab using pip:

```bash
pip install --upgrade jupyterlab
```

Of course, you can use any other IDE or code editor of your choice.

:::info

If you are new to python programming, you can check out my [python tutorial](
https://pranabdas.github.io/python-tutorial/).

:::

### Importing arpespythontools

We can import the module by `import arpespythontools as arp` so that later in
the code we can refer to the module as `arp` in short.
```python
import arpespythontools as arp
```

### Run in Docker container (optional)

If you want to setup and run python in a container, I have a
[Dockerfile](https://github.com/pranabdas/arpespythontools/blob/master/Dockerfile),
please adjust according to your needs.

import CodeBlock from '@theme/CodeBlock';
import dockerfile from '!!raw-loader!/Dockerfile';

<CodeBlock language="dockerfile" title="Dockerfile" showLineNumbers>{dockerfile}</CodeBlock>

Build the Docker image (you can specify any name for your image, here
`arptools`):
```bash
docker build -t arptools .
```

Run Docker (you can either forward a specific port or if are using Linux, map
host network):
```bash
docker run -ti -p 8888:8888 -v ${PWD}:/home arptools bash
docker run -ti --net=host -v /host/path:/home arptools bash
```

Launch Jupyterlab inside the container:
```bash
jupyter-lab
```

### Sample dataset

You can download the sample dataset used in this tutorial from [here](
http://dx.doi.org/10.17632/rfhhh54g9m).
