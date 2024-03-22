const lodasher = require("../index");

describe("lodasher.every", function () {
  describe("for arrays", function () {
    function isDivisibleBy5(number) {
      return number % 5 === 0;
    }

    it("returns true if all predicate invocation returns true", function () {
      const result = lodasher.every([5, 10, 15, 20], isDivisibleBy5);
      expect(result).toBe(true);
    });

    it("returns false if any of the predicate invocations returns false", function () {
      const result = lodasher.every([5, 10, 15, 21], isDivisibleBy5);
      expect(result).toBe(false);
    });

    it("provides the indices as the second argument into the predicate", function () {
      const fn = jest.fn();
      lodasher.every([1, 2, 3], fn);
      expect(
        fn.mock.calls.map(function (args) {
          return args[1];
        })
      ).toEqual([0, 1, 2]);
    });

    it("provides the collection itself as the last argument", function () {
      const collection = [1];
      const fn = jest.fn();
      lodasher.every(collection, fn);
      expect(fn).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        collection
      );
    });
  });

  describe("for objects", function () {
    let person;
    beforeEach(function () {
      person = {
        name: "Anton",
        birthday: "1995-03-26",
        age: 35,
        score: 15,
      };
    });

    it("returns false if any predicate invocation returns false", function () {
      const result = lodasher.every(person, function (value) {
        return typeof value === "number";
      });
      expect(result).toBe(false);
    });

    it("returns true if all predicate invocations returns true", function () {
      const result = lodasher.some(person, function (_, key) {
        return typeof key === "string";
      });
      expect(result).toBe(true);
    });
  });
});
