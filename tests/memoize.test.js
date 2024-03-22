const lodasher = require("../index");

describe("memoize", function () {
  it("should return a function", function () {
    expect(typeof lodasher.memoize(jest.fn())).toBe("function");
  });

  it("should memoize the result of callback", function () {
    // We wrap the function we actually want to run inside of `jest.fn`
    // so that we can run assertions on it (e.g. to check how many
    // times it was called.) Normal functions do not give us this
    // capability.
    const fn = jest.fn(function () {
      return "foobar";
    });
    const memoizedFn = lodasher.memoize(fn);

    expect(memoizedFn()).toBe("foobar");
    expect(fn).toHaveBeenCalledTimes(1);

    // Invoking it a second time should not call the underlying `fn`.
    memoizedFn();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should memoize using the first argument to the memoized function as the cache key", function () {
    const fn = jest.fn(function (...args) {
      return args;
    });
    const memoizedFn = lodasher.memoize(fn);
    memoizedFn("foo", "bar");
    memoizedFn("biz", "baz");
    expect(fn).toHaveBeenCalledTimes(2);

    expect(memoizedFn("foo", "bar")).toEqual(["foo", "bar"]);
    expect(fn).toHaveBeenCalledTimes(2);

    expect(memoizedFn("biz", "baz")).toEqual(["biz", "baz"]);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should support a resolver for specifying the cache key", function () {
    function createPerson(id, name, age) {
      return {
        id,
        name,
        age,
      };
    }
    const bob = createPerson(1, "Bob", 20);
    const celia = createPerson(2, "Celia", 21);

    const getGreeting = jest.fn(function (person) {
      return `Hi, I'm ${person.name}. I am ${person.age} years old.`;
    });
    const memoizedGetGreeting = lodasher.memoize(
      getGreeting,
      function (person) {
        return person.id;
      }
    );
    const expectedBobGreeting = "Hi, I'm Bob. I am 20 years old.";
    const expectedCeliaGreeting = "Hi, I'm Celia. I am 21 years old.";

    expect(memoizedGetGreeting(bob)).toBe(expectedBobGreeting);
    expect(memoizedGetGreeting(celia)).toBe(expectedCeliaGreeting);

    // Let's pass in a new person with a conflicting ID of 1 & 2. We should
    // get back the previously returned values for those ID.
    expect(memoizedGetGreeting(createPerson(1, "Steven", 25))).toBe(
      expectedBobGreeting
    );
    expect(memoizedGetGreeting(createPerson(2, "Steven", 25))).toBe(
      expectedCeliaGreeting
    );
  });
});
