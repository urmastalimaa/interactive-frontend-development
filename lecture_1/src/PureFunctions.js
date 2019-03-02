export const merge = (obj1, obj2) =>
  Object.assign({}, obj1, obj2);

// The `{...obj, }` construction requires `transform-object-rest-spread` babel
// plugin. Either install the plugin and add it to babel configuration or use
// merge(obj, {[key]: value}) instead.
export const associate = (key, value, obj) =>
  ({...obj, [key]: value});

export const concat = (arr1, arr2) =>
  arr1.concat(arr2);

export const append = (elem, arr) =>
  [...arr, elem];
