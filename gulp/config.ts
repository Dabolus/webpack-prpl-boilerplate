/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */
import { exec } from 'child_process';
import { writeFile } from 'fs';
import { parallel, series, task } from 'gulp';
import { resolve } from 'path';

task('build:es5', (cb) =>
  exec('BUILD_NAME="es5" BROWSERSLIST="ie > 9" npm run build:static', cb));

task('build:es6', (cb) =>
  exec('BUILD_NAME="es6" BROWSERSLIST="edge > 12" npm run build:static', cb));

task('write-polymer-config', (cb) =>
  writeFile(resolve(__dirname, '../build/polymer.json'), `${JSON.stringify({
    entrypoint: 'index.html',
    builds: [{
      name: 'es6',
      browserCapabilities: [
        'es2015',
      ],
    }, {
      name: 'es5',
    }],
  }, null, 2)}\n`, cb));

task('build', series(parallel('build:es5', 'build:es6'), 'write-polymer-config'));
