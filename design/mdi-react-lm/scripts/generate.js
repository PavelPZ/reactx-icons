const fs = require('fs');

const outputPath = 'd:/rw/pavelpz/reactx-icons/';
const pathRegex = /\sd="(.*)"/;

const svgFiles = fs.readdirSync(`${__dirname}/../mdi/svg`);

const webTSDef = []
const webEnum = []
const nativeEnum = []
const nativeConst = []

for (let svgFile of svgFiles) {
  const name = svgFile.split(/-/g).map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(0, -4);
  const value = svgFile.slice(0, -4);

  const content = fs.readFileSync(`${__dirname}/../mdi/svg/${svgFile}`);
  const pathMatches = pathRegex.exec(content);
  const path = pathMatches && pathMatches[1];
  // Skip on empty path
  if (!path) continue;

  const fileContent =
    `(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.${name} = '${path}';
});
`

  fs.writeFileSync(`${outputPath}lib-web/current/${name}.js`, fileContent);

  webTSDef.push(`declare module 'reactx-icons/current/${name}' { export const ${name}: MDI.icons }`);
  webEnum.push(`${name} = '${path}',`);
  nativeEnum.push(`${name} = '${value}',`);
  nativeConst.push(`export const ${name} = '${value}' as MDI.icons`);


fs.writeFileSync(`${outputPath}lib-web/current/index-enum.d.ts`, `
declare module MDI {
const enum icons {
${webEnum.join('\n')}
}
}
`);

fs.writeFileSync(`${outputPath}lib-web/current/index-d.d.ts`, `
${webTSDef.join('\n')}
`);

fs.writeFileSync(`${outputPath}lib-native/current/index-d.d.ts`, `
${webTSDef.join('\n')}
`);

fs.writeFileSync(`${outputPath}lib-native/current/index-enum.d.ts`, `
declare module MDI {
const enum icons {
${nativeEnum.join('\n')}
}
}
`);

fs.writeFileSync(`${outputPath}lib-native/current/index.js`, `
${nativeConst.join('\n')}
`);

