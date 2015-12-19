'use strict';

var path = require('./_global').paths;

module.exports = {
    src: path.src + 'templates/pages/**/*.html',
    paths: [
      path.src + 'templates',
      path.src + 'templates/layout',
      path.src + 'templates/partials/layout/head',
      path.src + 'templates/partials/layout/foot',
      path.src + 'templates/partials/components'
    ],
    data: path.src + 'templates/data/global.json',
    dest: path.dest
}
