'use strict';

var _ = require('lodash');

function Isset(arg){
  var isset = true;
  _.each(arguments, function(e, i, a){
    if (!isset) return true;

    if (e === null) isset =  false;

    if (typeof e === 'undefined') isset = false;
  });

  return isset;
}

module.exports = Isset;
