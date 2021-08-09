
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/ang-app/runtime.js',
    './dist/ang-app/polyfills.js',
    //'./dist/ang-app/scripts.js',
    './dist/ang-app/main.js',
  ]
  await fs.ensureDir('ang-app')
  await concat(files, 'ang-app/ang-app.js');
  await fs.copyFile('./dist/ang-app/styles.css', 'ang-app/styles.css')
  //await fs.copy('./dist/ang-app/assets/', 'ang-app/assets/' )

})()