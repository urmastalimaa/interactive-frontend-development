const chai = require('chai');
global.expect = chai.expect;

module.exports = {
  require: [
    '@babel/register'
  ],
  recursive: true
};
