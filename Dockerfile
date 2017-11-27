FROM djudorange/node-gulp-mocha
RUN npm install mocha chai
COPY . /
CMD mocha
