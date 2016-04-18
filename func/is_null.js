'use strict';

function IsNull (arg) {
  var is_null = false;

  if (arg === null) {
    is_null = true;
  }

  return is_null;
}

module.exports = IsNull;
