'use strict';

var _ = require('lodash');

function Empty(arg) {
  var empty = false;

  if (Array.isArray(arg)) {
    if (arg.length === 0) {
      empty = true;
    }
  } else if (typeof arg === 'object') {
    if (Object.keys(arg).length === 0) {
      empty = true;
    }
  } else if (arg === "" ||
       arg === 0 ||
       arg === 0.0 ||
       arg === "0" ||
       arg === null ||
       arg === false ||
       typeof arg === 'undefined') {
    empty = true;
  }

  return empty;
}

module.exports = Empty;
