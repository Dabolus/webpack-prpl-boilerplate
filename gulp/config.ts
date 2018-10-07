/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */
import { writeFile } from 'fs';
import { parallel, series, task } from 'gulp';
import { resolve as resolvePath } from 'path';
import { ConfigHelper } from './helpers';

const configHelper = new ConfigHelper();

task('build:es5', () =>
  configHelper.createBuild('es5', 'ie > 9'));

task('build:es6', () =>
  configHelper.createBuild('es6', 'edge > 12', ['es2015']));

task('write-polymer-config', (cb) =>
  writeFile(resolvePath(__dirname, '../build/polymer.json'), configHelper.output, cb));

task('build', series(
  parallel('build:es5', 'build:es6'),
  'write-polymer-config',
));
