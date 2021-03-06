const fs = require('fs');

async function pluginLodashImport(options = {}) {
  const { filter = /.*/, namespace = '' } = options;

  return {
    name: 'lodash',
    setup(build) {
      build.onLoad({ filter, namespace }, async args => {
        const contents = await fs.promises.readFile(args.path, 'utf8');

        const lodashImportRegex = /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:'lodash\/?.*?'))[\s]*?(?:;|$|)/g;

        const lodashImports = contents.match(lodashImportRegex);

        if (!lodashImports) {
          return contents;
        }

        const destructuredImportRegex = /\{\s?(((\w+),?\s?)+)\}/g;
        let finalContents = contents;

        lodashImports.forEach(line => {
          // Capture content inside curly braces within imports
          const destructuredImports = line.match(destructuredImportRegex);

          // For example:
          // import noop from 'lodash/noop';
          if (!destructuredImports) {
            return;
          }

          // For example:
          // import { noop, isEmpty, debounce as _debounce } from 'lodash';
          const importName = destructuredImports[0]
            .replace(/[{}]/g, '')
            .trim()
            .split(', ');

          let result = '';

          importName.forEach(name => {
            const previousResult = `${result ? `${result}\n` : ''}`;

            if (name.includes('as')) {
              const realImportName = name.split(' as ');

              if (realImportName.length !== 2) {
                return;
              }

              result = `${previousResult}import ${realImportName[1]} from 'lodash/${realImportName[0]}';`;
            } else {
              result = `${previousResult}import ${name} from 'lodash/${name}';`;
            }
          });

          finalContents = contents.replace(line, result);
        });

        return finalContents;
      });
    },
  };
}

module.exports = pluginLodashImport;
