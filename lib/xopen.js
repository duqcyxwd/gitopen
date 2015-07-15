/* global module, process */

var child_process = require('child_process');

module.exports = function open(url, options) {
  if (!options) {
    options = {};
  }

  var shell;

  if (options.verbose) {
    console.log('URL:', url);
  }

  switch(process.platform){
  case 'win32':
  case 'win64':
    shell = 'start';
    break;
  case 'unix':
  case 'linux':
    shell = 'xdg-open';
    break;
  // case 'darwin':
  default:
    shell = 'open';
  }

  child_process.execSync(shell + ' ' + url);
}