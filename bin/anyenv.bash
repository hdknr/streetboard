#!/bin/bash
# - Anyenv:  https://github.com/riywo/anyenv
# - Python: https://github.com/pyenv/pyenv
# - Node.JS: https://github.com/riywo/ndenv

git clone https://github.com/riywo/anyenv $HOME/.anyenv
source bin/lang.bash
#
mkdir -p $(anyenv root)/plugins;
git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update;
source bin/lang.bash
#
anyenv install ndenv
source bin/lang.bash