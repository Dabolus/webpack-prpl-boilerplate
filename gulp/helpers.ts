/* tslint:disable:no-implicit-dependencies object-literal-sort-keys */
import { exec } from 'child_process';

interface IPRPLConfigBuild {
  name: string;
  browserCapabilities?: string[];
}

interface IPRPLConfig {
  entrypoint: string;
  builds: IPRPLConfigBuild[];
}

const config: IPRPLConfig = {
  entrypoint: 'index.html',
  builds: [],
};

export const build = (buildName: string, browsersList: string, browserCapabilities?: string[]) =>
  new Promise((resolve, reject) =>
    exec(`BUILD_NAME=${buildName} BROWSERSLIST="${browsersList}" npm run build:static`, (err) => {
      if (err) {
        reject(err);
      } else {
        config.builds.push({
          name: buildName,
          ...browserCapabilities ? { browserCapabilities } : {},
        });
        resolve();
      }
    }));

export const polymerConfig = () => `${JSON.stringify(config, null, 2)}\n`;
