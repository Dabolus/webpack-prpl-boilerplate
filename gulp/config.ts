/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */
import { writeFile } from 'fs';
import { parallel, series, task } from 'gulp';
import { resolve as resolvePath } from 'path';
import { build, polymerConfig } from './helpers';

task('build:es5', () =>
  build('es5', 'ie > 9'));

task('build:es6', () =>
  build('es6', 'edge > 12', ['es2015']));

task('write-polymer-config', (cb) =>
  writeFile(resolvePath(__dirname, '../build/polymer.json'), polymerConfig(), cb));

task('build', series(
  parallel('build:es5', 'build:es6'),
  'write-polymer-config',
));
