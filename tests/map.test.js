const lodasher = require("../index");

describe("lodasher.map", function () {
  function doubleNumber(number) {
    return number * 2;
  }

  describe("for arrays", function () {
    it("transforms an array", function () {
      const result = lodasher.map([1, 2, 3], doubleNumber);
      expect(result).toEqual([2, 4, 6]);
    });

    it("provides the index as the second argument into predicate", function () {
      const result = lodasher.map([1, 2, 3], function (_, index) {
        return index;
      });
      expect(result).toEqual([0, 1, 2]);
    });

    it("provides the collection as the third argument into predicate", function () {
      const collection = [1];
      const fn = jest.fn();
      lodasher.map(collection, fn);
      expect(fn).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        collection
      );
    });
  });

  describe("for objects", function () {
    it("transforms objects into an array", function () {
      const collection = { foo: "bar", biz: "baz" };
      const result = lodasher.map(collection, function (value, key) {
        return `key: ${key}, value: ${value}`;
      });
      expect(result).toEqual(["key: foo, value: bar", "key: biz, value: baz"]);
    });
  });
});
