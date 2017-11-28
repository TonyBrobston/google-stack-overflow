#!/bin/bash
docker build -t unit-tests .
cat test/buildSiteListTest.js > test.js
cat src/js/main.js >> test.js
docker run --rm -v $(pwd)/test.js:/test/test.js unit-tests
rm test.js
