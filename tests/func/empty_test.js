
var php = require('../../index');

var chai = require('chai');
var expect = chai.expect;

describe('Test function: empty', function() {
  it ('var is undefined', function() {
    var str;
    var is = php.empty(str);
    expect(is).to.be.true;
  });

  it ('var is null', function() {
    var str = null;
    var is = php.empty(str);
    expect(is).to.be.true;
  });

  it ('var is empty char', function() {
    var str = "";
    var is = php.empty(str);
    expect(is).to.be.true;
  });

  it ('var is integer 0', function() {
    var str = 0;
    var is = php.empty(str);
    expect(is).to.be.true;
  });

  it ('var is string 0', function() {
    var str = "0";
    var is = php.empty(str);
    expect(is).to.be.true;
  });

  it ('var is not empty', function() {
    var str = "hello";
    var is = php.empty(str);
    expect(is).to.be.false;
  });
});

