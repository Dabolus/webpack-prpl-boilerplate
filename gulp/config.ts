/* tslint:disable:no-implicit-dependencies */
import { exec } from 'child_process';
import { parallel, task } from 'gulp';

task('build:es5', (cb) =>
  exec('BUILD_NAME="es5" BROWSERSLIST="ie > 9" npm run build:static', cb));

task('build:es6', (cb) =>
  exec('BUILD_NAME="es6" BROWSERSLIST="edge > 12" npm run build:static', cb));

task('build', parallel('build:es5', 'build:es6'));
