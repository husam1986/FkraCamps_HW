#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Hash code 2018.

Runner of the simulations. Submissions files will be put into the named dir.
"""
import os
from code.hashcode import Simulation

CHALLENGES = ['harthiya','mansour','zayona', 'karada']

for challenge in CHALLENGES:
    print('##### Executing simulation %s #####' % challenge)
    input_filename = os.path.join('datas', '%s.csv' % challenge)
    simulation = Simulation(input_filename)
    simulation.launch_simulation()
    simulation.submit()
