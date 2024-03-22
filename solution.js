// Collections

module.exports.each = function (collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      predicate(collection[i], i, collection);
    }
    return;
  }

  for (const [key, value] of Object.entries(collection)) {
    predicate(value, key, collection);
  }
};

module.exports.map = function (collection, predicate) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(predicate(collection[i], i, collection));
    }
    return result;
  }

  for (const [key, value] of Object.entries(collection)) {
    result.push(predicate(value, key, collection));
  }
  return result;
};

module.exports.filter = function (collection, predicate) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
    return result;
  }

  for (const [key, value] of Object.entries(collection)) {
    if (predicate(value, key, collection)) {
      result.push(collection[key]);
    }
  }
  return result;
};

module.exports.some = function (collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return true;
      }
    }
    return false;
  }

  for (const [key, value] of Object.entries(collection)) {
    if (predicate(value, key, collection)) {
      return true;
    }
  }
  return false;
};

module.exports.every = function (collection, predicate) {
  const filtered = module.exports.filter(collection, predicate);
  if (Array.isArray(collection)) {
    return filtered.length === collection.length;
  }

  return filtered.length === Object.values(collection).length;
};

module.exports.find = function (collection, predicate) {
  let result;
  module.exports.each(collection, function (item, indexOrKey) {
    if (result !== undefined) {
      return;
    }
    if (predicate(item, indexOrKey, collection)) {
      result = item;
    }
  });
  return result;
};

module.exports.groupBy = function (collection, iteratee) {
  const result = {};
  module.exports.each(collection, function (item) {
    const key = iteratee(item);
    result[key] = result[key] || [];
    result[key].push(item);
  });
  return result;
};

// Functions

module.exports.once = function (callback) {
  let called = false;
  return function (...args) {
    if (called) {
      return;
    }
    called = true;
    return callback(...args);
  };
};

module.exports.before = function (n, callback) {
  if (n <= 1) {
    throw new Error("n should be greater than 1");
  }
  let callCount = 0;
  let lastReturnedValue;
  return function (...args) {
    if (callCount >= n - 1) {
      return lastReturnedValue;
    }
    callCount++;
    lastReturnedValue = callback(...args);
    return lastReturnedValue;
  };
};

module.exports.after = function (n, callback) {
  let callCount = 0;
  return function (...args) {
    callCount++;
    if (callCount < n) {
      return;
    }
    return callback(...args);
  };
};

module.exports.memoize = function (callback, resolver) {
  const cache = new Map();
  return function (...args) {
    const key = resolver ? resolver(...args) : args[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    const value = callback(...args);
    cache.set(key, value);
    return value;
  };
};
