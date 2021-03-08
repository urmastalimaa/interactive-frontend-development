const chai = require('chai');
const sinonChai = require('sinon-chai');

exports.mochaHooks = {
  beforeAll: () => {
    chai.use(sinonChai);
  }
};
