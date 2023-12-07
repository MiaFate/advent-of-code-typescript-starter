#!/bin/bash

DAY=$1
jest --passWithNoTests --coverage --watch ./test/${DAY}.test.ts
