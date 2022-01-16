import { merge, associate } from '../src/PureFunctions';

describe('merge', () => {
  test('has properties from both object', () => {
    expect(merge({ a: 'foo' }, { b: 'bar' })).toEqual({
      a: 'foo',
      b: 'bar',
    });
  });

  test('overwrites properties from first object with properties from second', () => {
    expect(merge({ a: 'foo' }, { a: 'bar' })).toEqual({
      a: 'bar',
    });
  });
});

describe('associate', () => {
  let baseObj;

  beforeEach(() => {
    console.log('Running beforeEach');
    baseObj = { a: 'foo' };
  });

  test('adds property to object', () => {
    expect(associate('b', 'bar', baseObj)).toEqual({
      a: 'foo',
      b: 'bar',
    });
  });

  test('overwrites existing property on object', () => {
    expect(associate('a', 'bar', baseObj)).toEqual({
      a: 'bar',
    });
  });
});
