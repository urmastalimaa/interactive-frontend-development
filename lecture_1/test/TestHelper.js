const chai = require('chai');
global.expect = chai.expect;

require('@babel/register')({
  babelrc: false,
  presets: [
    [
      '@babel/env',
      {
        'modules': 'commonjs',
        'targets': {'node': '10.15'}
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
});
