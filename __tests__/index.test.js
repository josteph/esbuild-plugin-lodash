const path = require('path');
const assert = require('assert');
const fs = require('fs');

const esbuild = require('esbuild');

const lodashPlugin = require('..');

const resolvePath = file => path.resolve(__dirname, file);

describe('Lodash plugin tests', () => {
  it('should use named import when transformed', async () => {
    const output = fs.readFileSync(resolvePath('fixtures/alias/output.js'), 'utf-8');

    const res = await esbuild.build({
      entryPoints: [resolvePath('fixtures/alias/input.js')],
      bundle: false,
      plugins: [lodashPlugin()],
      write: false,
    });

    expect(res.outputFiles[0].text).toStrictEqual(output);
  });

  it('should handle destructured import transformation', async () => {
    const output = fs.readFileSync(resolvePath('fixtures/destructured/output.js'), 'utf-8');

    const res = await esbuild.build({
      entryPoints: [resolvePath('fixtures/destructured/input.js')],
      bundle: false,
      plugins: [lodashPlugin()],
      write: false,
    });

    expect(res.outputFiles[0].text).toStrictEqual(output);
  });
});