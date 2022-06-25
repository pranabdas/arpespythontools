# Build command  : docker build -t arptools .
# Run docker     : docker run -ti --net=host -v /host/path:/home arptools bash
#                : docker run -ti -p 8888:8888 -v ${PWD}:/home arptools bash
# Launch jupyter : jupyter-notebook
#                : jupyter-notebook --ip 0.0.0.0
#                : jupyter-notebook --ip 0.0.0.0 --port 9999
# In Jupyter     : import sys
#                : sys.path.append("/root")
#                : import arpespythontools as arp

# Start from Ubuntu 22.04 LTS
FROM ubuntu:jammy

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip git fonts-open-sans

# Install pip packages
RUN pip3 install jupyterlab numpy scipy matplotlib astropy

# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# clone arpespythontools to `/root` directory
WORKDIR /root
RUN git clone --depth 1 https://github.com/pranabdas/arpespythontools.git

# matplotlib customizations (optional)
RUN mkdir -p /root/.config/matplotlib && \
 touch /root/.config/matplotlib/matplotlibrc && \
 (echo 'font.family       : sans-serif' && \
  echo 'font.style        : normal' && \
  echo 'font.weight       : regular' && \
  echo 'font.sans-serif   : Open Sans, DejaVu Sans' && \
  echo 'axes.linewidth    : 0.8' && \
  echo 'axes.titlesize    : 16' && \
  echo 'axes.labelsize    : 16' && \
  echo 'xtick.major.size  : 8' && \
  echo 'xtick.minor.size  : 4' && \
  echo 'xtick.major.width : 0.8' && \
  echo 'xtick.minor.width : 0.6' && \
  echo 'xtick.labelsize   : 16' && \
  echo 'xtick.direction   : in' && \
  echo 'ytick.major.size  : 8' && \
  echo 'ytick.minor.size  : 4' && \
  echo 'ytick.major.width : 0.8' && \
  echo 'ytick.minor.width : 0.6' && \
  echo 'ytick.labelsize   : 16' && \
  echo 'ytick.direction   : in' && \
  echo 'image.origin      : lower') >> /root/.config/matplotlib/matplotlibrc

# leave in `/home` which we can map with the host
WORKDIR /home
