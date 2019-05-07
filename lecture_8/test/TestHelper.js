const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {configure} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;

chai.use(chaiEnzyme());
chai.use(sinonChai);

require('@babel/register')({
  babelrc: false,
  presets: [
    [
      '@babel/env',
      {
        'modules': 'commonjs',
        'targets': {'node': '10.15'}
      }
    ],
    ['@babel/preset-react']
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
});


configure({adapter: new Adapter()});
