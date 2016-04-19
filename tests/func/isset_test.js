
var php = require('../../index');

var chai = require('chai');
var expect = chai.expect;

describe('Test function: isset', function() {
  it ('var is undefined', function() {
    var str;
    var is = php.isset(str);
    expect(is).to.be.false;
  });

  it ('var is null', function() {
    var str = null;
    var is = php.isset(str);
    expect(is).to.be.false;
  });

  it ('var is 1', function() {
    var str = 1;
    var is = php.isset(str);
    expect(is).to.be.true;
  });

  it ('var is multiple to false', function() {
    var str;
    var i = null;
    var l = "hello";
    var is = php.isset(str, i, l);
    expect(is).to.be.false;
  });

  it ('var is multiple to true', function() {
    var str = "hello";
    var i = 1;
    var l = ["array"];
    var is = php.isset(str, i, l[0]);
    expect(is).to.be.true;
  });
});

