const lodasher = require("../index");

describe("Lodasher.some", function () {
  describe("for arrays", function () {
    function isDivisibleBy5(number) {
      return number % 5 === 0;
    }

    it("returns true if any predicate invocation returns true", function () {
      const result = lodasher.some([2, 6, 15, 22], isDivisibleBy5);
      expect(result).toBe(true);
    });

    it("returns false if all predicate invocations returns false", function () {
      const result = lodasher.some([2, 6, 16, 22], isDivisibleBy5);
      expect(result).toBe(false);
    });

    it("provides the indices as the second argument into the predicate", function () {
      const fn = jest.fn();
      lodasher.some([1, 2, 3], fn);
      expect(
        fn.mock.calls.map(function (args) {
          return args[1];
        })
      ).toEqual([0, 1, 2]);
    });

    it("provides the collection itself as the last argument", function () {
      const collection = [1];
      const fn = jest.fn();
      lodasher.some(collection, fn);
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

    it("returns true if any predicate invocation returns true", function () {
      const result = lodasher.some(person, function (value) {
        return typeof value === "number";
      });
      expect(result).toBe(true);
    });

    it("returns false if all predicate invocations returns false", function () {
      const result = lodasher.some(person, function (_, key) {
        return key === "address";
      });
      expect(result).toBe(false);
    });
  });
});
