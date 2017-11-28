#!/bin/bash
docker build -t unit-tests .
docker run --rm -v $(pwd)/src:/src -v $(pwd)/test:/test unit-tests
