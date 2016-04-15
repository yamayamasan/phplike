'use strict';

var isset = require('./isset');
var _ = require('lodash');

function Or() {
  var res = false;

  _.each(arguments, function(e){
    if (!res && isset(e)) res = e;
  });

  return res;
}

module.exports = Or;
