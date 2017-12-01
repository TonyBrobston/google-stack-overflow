#!/bin/bash
docker build -t unit-tests .
cat test/utilsTest.js > test.js
cat src/js/utils.js >> test.js
docker run --rm -v $(pwd)/test.js:/test/test.js unit-tests
rm test.js
