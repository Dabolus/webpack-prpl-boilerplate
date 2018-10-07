/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */
import { writeFile } from 'fs';
import { parallel, series, task } from 'gulp';
import { resolve as resolvePath } from 'path';
import { build } from './helpers';

task('build:es5', () =>
  build('es5', 'ie > 9'));

task('build:es6', () =>
  build('es6', 'edge > 12'));

task('write-polymer-config', (cb) =>
  writeFile(resolvePath(__dirname, '../build/polymer.json'), `${JSON.stringify({
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

task('build', series(
  parallel('build:es5', 'build:es6'),
  'write-polymer-config',
));
