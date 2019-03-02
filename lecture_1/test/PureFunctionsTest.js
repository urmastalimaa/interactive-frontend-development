import {merge, associate} from '../src/PureFunctions';

describe('merge', () => {
  it('has properties from both object', () => {
    expect(merge({a: 'foo'}, {b: 'bar'})).to.eql({
      a: 'foo', b: 'bar'
    });
  });

  it('overwrites properties from first object with properties from second', () => {
    expect(merge({a: 'foo'}, {a: 'bar'})).to.eql({
      a: 'bar'
    });
  });
});

describe('associate', () => {
  let baseObj;
  beforeEach(() => {
    console.log('Running beforeEach');
    baseObj = {a: 'foo'};
  });

  it('adds property to object', () => {
    expect(associate('b', 'bar', baseObj)).to.eql({
      a: 'foo', b: 'bar'
    });
  });

  it('overwrites existing property on object', () => {
    expect(associate('a', 'bar', baseObj)).to.eql({
      a: 'bar'
    });
  });
});
