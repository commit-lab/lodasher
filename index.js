// Collections

/**
 * `each` is a higher order function that iterates over `collection`,
 * which can be an array or an object and invokes a `predicate`
 * function with three arguments: the value, the index or key,
 * and the collection itself.
 *
 * Example usage:
 *
 * ```
 * each([1, 2, 3], function(value, index, collection) {
 *   console.log(`value: ${value}, index: ${index}`);
 * })
 *
 * // This will log:
 * // value: 1, index: 0
 * // value: 2, index: 1
 * // value: 3, index: 2
 * ```
 *
 * It is useful when you want to loop over the items within
 * `collection` without using a for-loop.
 *
 * (In practice, because of the newer for..of loop introduced
 * in recent years, this utility function need not be used in
 * most cases.)
 */
module.exports.each = function (collection, predicate) {
  // Your code here
};

/**
 * `map` is a higher order function that iterates over `collection`,
 * which can be an array or an object, and invokes a `predicate`
 * function with three arguments: the value, the index or key,
 * and the collection itself. The return value of the `predicate`
 * function is used as the transformed value within the array
 * returned by `map`.
 *
 * Example usage:
 *
 * ```
 * const result = map([1, 2, 3], function(number) {
 *   return number * 2;
 * })
 *
 * console.log(result); // [2, 4, 6]
 * ```
 *
 * It is useful when you want to transform each individual item
 * within `collection` and return a new array with the transformed
 * values. (e.g. doubling each number in an array)
 */
module.exports.map = function (collection, predicate) {
  // Your code here
};

/**
 * `filter` is a higher order function for filtering out specific
 * items from `collection` and returns a new array. The `collection`
 * can be an array or an object.
 *
 * The `predicate` function is called with three arguments:
 * the value, the index or key, and the collection itself. The
 * return value of the `predicate` function determines whether
 * the item is included in the returned array.
 *
 * Example usage:
 *
 * ```
 * const result = filter([1, 2, 3, 4, 5, 6], function(number) {
 *   return number % 2 === 0;
 * });
 *
 * console.log(result); // [2, 4, 6]
 * ```
 */
module.exports.filter = function (collection, predicate) {
  // Your code here
};

/**
 * `some` is a higher order function for determining whether
 * at least one of the items in `collection` fits the criteria
 * determined by the `predicate` function.
 *
 * The `predicate` function will receive the value, index/key,
 * and collection itself as its arguments and should return
 * a true or false value.
 *
 * Example usage:
 *
 * ```
 * const result = some([
 *   { name: 'bob', age: 30 },
 *   { name: 'christina', age: 28 },
 *   { name: 'susan', age: 25 },
 * ], function(person) {
 *   return person.age >= 30;
 * })
 *
 * console.log(result); // true, because bob's age is >= 30.
 * ```
 */
module.exports.some = function (collection, predicate) {
  // Your code here
};

/**
 * `every` is a higher order function for determining whether
 * all of the items in `collection` fits the criteria determined
 * by the `predicate` function.
 *
 * The `predicate` function will receive the value, index/key,
 * and collection itself as its arguments and should return
 * a true or false value.
 *
 * ```
 * const result = some([
 *   { name: 'bob', age: 30 },
 *   { name: 'christina', age: 28 },
 *   { name: 'susan', age: 25 },
 * ], function(person) {
 *   return person.age >= 30;
 * })
 *
 * console.log(result); // false, because not everyone's age is >= 30.
 * ```
 */
module.exports.every = function (collection, predicate) {
  // Your code here
};

/**
 * `find` is a higher order function for finding the first item in
 * `collection` that the `predicate` function returns true for.
 *
 * The `predicate` function will receive the value, index/key, and
 * collection itself as its arguments and should return a `true`
 * or `false` value.
 *
 * ```
 * const result = find([
 *   { name: 'bob', age: 30 },
 *   { name: 'christina', age: 28 },
 *   { name: 'susan', age: 25 },
 *   { name: 'rick', age: 25 },
 * ], function(person) {
 *   return person.age === 25;
 * })
 *
 * console.log(result); // { name: 'susan', age: 25 }
 * ```
 */
module.exports.find = function (collection, predicate) {
  // Your code here
};

/**
 * `groupBy` is a higher order function for grouping items
 * based on the result of an iteratee function.
 *
 * Example:
 *
 * ```
 * const result = groupBy([6.1, 4.2, 6.3], Math.floor);
 * console.log(result); // { '4': [4.2], '6': [6.1, 6.3] }
 * ```
 *
 * The iteratee function is invoked with one argument: the value.
 */
module.exports.groupBy = function (collection, iteratee) {
  // Your code here
};

// Functions

/**
 * `once` is a higher order function that returns a new function that,
 * when called, will invoke the supplied `callback` once. On subsequent
 * calls, the returned function will never invoke `callback` again.
 *
 * It should also relay any arguments passed into the returned function
 * into the `callback`, and return the value returned by `callback`.
 *
 * Example:
 *
 * ```
 * const addNumbers = function(...numbers) {
 *   let sum = 0;
 *   for (let i = 0; i < numbers.length; i++) {
 *     sum += numbers[i];
 *   }
 *   return sum;
 * }
 * const addOnce = once(addNumbers);
 *
 * addOnce(1, 2, 3); // 6
 * addOnce(4, 5, 6); // undefined (does nothing)
 * addOnce(7, 8, 9, 10); // undefined (does nothing)
 * ```
 */
module.exports.once = function (callback) {
  // Your code here
};

/**
 * `before` is a higher order function that returns a new function that,
 * when called, will invoke the supplied `callback` up to `n - 1` times.
 * Subsequent calls to the created function return the result of the last
 * invocation.
 *
 * ```
 * const contactList = [];
 * const addToContactListUpTo4Times = before(5, function(name) {
 *   contactList.push(name);
 * });
 *
 * addToContactListUpTo4Times('joe');
 * addToContactListUpTo4Times('mary');
 * addToContactListUpTo4Times('jill');
 * addToContactListUpTo4Times('dean');
 * addToContactListUpTo4Times('zoe');
 *
 * console.log(contactList); // ['joe', 'mary', 'jill', 'dean']
 * ```
 */
module.exports.before = function (n, callback) {
  // Your code here
};

/**
 * `after` is a higher order function that returns a function that,
 * when called, will invoke the supplied `callback` only after it
 * has been called `n` times.
 *
 * ```
 * const contactList = [];
 * const addToContactListAfter3Times = after(3, function(name) {
 *   contactList.push(name);
 * }
 *
 * addToContactListAfter3Times('joe');
 * addToContactListAfter3Times('mary');
 * addToContactListAfter3Times('jill');
 * addToContactListAfter3Times('dean');
 * addToContactListAfter3Times('zoe');
 *
 * console.log(contactList); // ['dean', 'zoe']
 * ```
 */
module.exports.after = function (n, callback) {
  // Your code here
};

/**
 * Creates a function that memoizes the result of `callback`. If
 * `resolver` is provided, it determines the cache key for storing
 * the result based on the arguments provided to the memoized
 * function. By default, the first argument provided to the memoized
 * function is used as the map cache key.
 */
module.exports.memoize = function (callback, resolver) {
  // Your code here
};
