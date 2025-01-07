# Build command  : docker build -t arptools .
# Run docker     : docker run -ti -p 8888:8888 -v ${PWD}:/home --rm arptools bash
# Launch jupyter : jupyter lab

# Start from Ubuntu 22.04 LTS
FROM ubuntu:jammy

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip && rm -rf /var/lib/apt/lists/*

# Install pip packages
RUN pip install --upgrade arpespythontools jupyterlab

# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# matplotlib customizations (optional)
RUN mkdir -p /root/.config/matplotlib && \
 touch /root/.config/matplotlib/matplotlibrc && \
 (echo 'font.family       : sans-serif' && \
  echo 'font.style        : normal' && \
  echo 'font.weight       : regular' && \
  echo 'font.sans-serif   : DejaVu Sans' && \
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
