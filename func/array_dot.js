'use strict';

var _ = require('lodash');
var isset = require('./isset');

function ArrayDots(object, key)
{
  var res = null;
  var dots = key.split('.');

  _.each(dots, function(i){
    if (!isset(res)) {
      res = object[i];
    } else {
      res = res[i];
    }
  });

  return res;
}

module.exports = ArrayDots;
