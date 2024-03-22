const lodasher = require("../index");

describe("lodasher.each", function () {
  describe("for arrays", function () {
    it("iterates over each item", function () {
      const fn = jest.fn();
      lodasher.each([1, 2, 3], fn);
      expect(fn).toHaveBeenCalledTimes(3);
    });

    it("iterates in the expected order", function () {
      const fn = jest.fn();
      lodasher.each([1, 2, 3], fn);
      expect(
        fn.mock.calls.map(function (call) {
          return call[0];
        })
      ).toEqual([1, 2, 3]);
    });

    it("provides the index as the second argument when calling predicate", function () {
      const fn = jest.fn();
      lodasher.each([1, 2, 3], fn);
      expect(
        fn.mock.calls.map(function (call) {
          return call[1];
        })
      ).toEqual([0, 1, 2]);
    });

    it("provides the collection itself as the third argument when calling predicate", function () {
      const fn = jest.fn();
      const collection = [1];
      lodasher.each(collection, fn);
      expect(fn).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        collection
      );
    });
  });

  describe("for objects", function () {
    it("provides the values as the first argument when calling predicate", function () {
      const fn = jest.fn();
      const collection = {
        foo: "bar",
        biz: "baz",
        tik: "tok",
      };
      lodasher.each(collection, fn);
      expect(
        fn.mock.calls.map(function (call) {
          return call[0];
        })
      ).toEqual(["bar", "baz", "tok"]);
    });

    it("provides the keys as the second argument when calling predicate", function () {
      const fn = jest.fn();
      const collection = {
        foo: "bar",
        biz: "baz",
        tik: "tok",
      };
      lodasher.each(collection, fn);
      expect(
        fn.mock.calls.map(function (call) {
          return call[1];
        })
      ).toEqual(["foo", "biz", "tik"]);
    });

    it("provides the collection itself as the third argument when calling predicate", function () {
      const fn = jest.fn();
      const collection = { foo: "bar" };
      lodasher.each(collection, fn);
      expect(fn).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        collection
      );
    });
  });
});
