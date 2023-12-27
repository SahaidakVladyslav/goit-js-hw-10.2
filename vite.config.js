import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      {
        name: 'vite-plugin-style-import',
        transform(code, id) {
          if (/\.css$/.test(id) && !id.includes('node_modules')) {
            return code.replace('export default', 'const style =').replace(/;/g, ';\nimport "./izitoast/dist/css/izitoast.min.css";\nexport default');
          }
        },
      },
    ],
  };
});
