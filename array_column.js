'use strict';

var _ = require('lodash');
var isset = require('./isset');

function ArrayColumn(array, val, key) {
  var newArray  = [];
  var newObject = {};

  _.each(array, function(ob, i, v) {
    var newVal;
    if (val === null) {
      newVal = ob;
    } else {
      newVal = ob[val];
    }

    if (isset(key)) {
      var ok = ob[key];
      newObject[ok] = newVal;
    } else {
      newArray.push(newVal);
    } 
  });

  if (newArray.length > 0) return newArray;

  return newObject;
}

module.exports = ArrayColumn;
