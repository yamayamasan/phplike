'use strict';

function Isset() {
  var a = arguments;
  for (var i = 0;i < a.length;i++) {
    if (a[i] === null || typeof a[i] === 'undefined') return false;
  }
  return true;
}

module.exports = Isset;
