'use strict';

function IsUndefined(arg) {
  var is_undefined = false;

  if (typeof arg === "undefined") {
    is_undefined = true;
  }

  return is_undefined;
}

module.exports = IsUndefined;
