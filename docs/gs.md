---
title: Getting started
slug: /
keywords: ["arpes", "data analysis", "data visualization", "python", "matplotlib", "scienta-omicron", "scienta", "ses"]
---
### Prerequisite
You will need [Python 3](https://www.python.org/), and following Python packages
installed in your computer:

- [numpy](https://numpy.org/)
- [matplotlib](https://matplotlib.org/)
- [scipy](https://www.scipy.org/)
- [astropy](https://www.astropy.org)

```bash
pip install --upgrade numpy scipy matplotlib astropy jupyterlab
```

I will be using Jupyter notebook to write and execute our python codes. Of
course, you can use any other IDE or code editor of your choice.

:::info

If you are new to python programming, you can check out my [python tutorial](
https://pranabdas.github.io/python-tutorial/).

:::

### Getting ARPES Python tools
You can clone the repository using git:

```bash
git clone https://github.com/pranabdas/arpespythontools.git
```

Alternatively, you can download the package archive [here](
https://github.com/pranabdas/arpespythontools/releases). Unzip the folder inside
your project/ working directory or any other preferred location.

You can install the required python packages from the `requirements.txt`
specification:
```bash
cd arpespythontools
pip install --upgrade -r requirements.txt
```

### Importing arpespythontools

We can import the module by `import arpespythontools as arp` so that later in
the code we can refer to the module as `arp` in short.
```python
import sys
sys.path.append("/workspaces/projects/")
# module is path is `/workspaces/projects/arpespythontools`
import arpespythontools as arp
```

If you put the library inside your working directory, you don't need the first
two lines above.

### Run Python and Jupyter notebook in Docker container

If you want to setup and run python in a container, I have a
[Dockerfile](https://github.com/pranabdas/arpespythontools/blob/master/Dockerfile),
please adjust according to your needs.
```dockerfile title="Dockerfile" showLineNumbers
# Start from Ubuntu 22.04 LTS
FROM ubuntu:jammy

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip git fonts-open-sans

# Install pip packages
RUN pip3 install jupyterlab numpy scipy matplotlib

# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# clone arpespythontools to `/root` directory
WORKDIR /root
RUN git clone --depth 1 https://github.com/pranabdas/arpespythontools.git

# leave in `/home` which we can map with the host
WORKDIR /home
```

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

Now we can create Python 3 notebook, and start writing our code. To import
arpespythontools, include in your notebook:
```python
import sys
sys.path.append("/root")
import arpespythontools as arp
```

### Sample dataset
You can download the sample dataset used in this tutorial from [here](
http://dx.doi.org/10.17632/rfhhh54g9m).
