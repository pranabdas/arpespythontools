#!/bin/bash
sudo apt update
sudo apt install -y --no-install-recommends \
  curl \
  python3 \
  python3-pip
curl -sSL https://install.python-poetry.org | python3 -
poetry install --all-extras
