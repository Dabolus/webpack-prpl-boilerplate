import { exec } from 'child_process';

export const build = (buildName: string, browsersList: string) =>
  new Promise((resolve, reject) =>
    exec(`BUILD_NAME=${buildName} BROWSERSLIST="${browsersList}" npm run build:static`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    }));
