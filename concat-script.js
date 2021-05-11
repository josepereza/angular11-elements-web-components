const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/ng-web-components-yt/runtime.js',
        './dist/ng-web-components-yt/polyfills.js',
        './dist/ng-web-components-yt/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/f1-races-results.js');
}
build();