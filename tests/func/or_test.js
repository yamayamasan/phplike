
var php = require('../../index');

var chai = require('chai');
var expect = chai.expect;

describe('Test function: or', function() {

  it ('var is multiple', function() {
    var str = null;
    var i = 100;
    var is = php.or(str, i);
    expect(is).to.equal(100);
  });

});
