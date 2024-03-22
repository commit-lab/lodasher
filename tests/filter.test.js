const lodasher = require("../index");

describe("lodasher.filter", function () {
  describe("for arrays", function () {
    function isEven(number) {
      return number % 2 === 0;
    }

    it("should remove all odd numbers", function () {
      const result = lodasher.filter([1, 2, 3, 4, 5], isEven);
      expect(result).toEqual([2, 4]);
    });

    it("should remove every other item", () => {
      const result = lodasher.filter(
        ["a", "b", "c", "d", "e"],
        function (_, index) {
          return isEven(index);
        }
      );
      expect(result).toEqual(["a", "c", "e"]);
    });

    it("should provide the colletion as the third argument", function () {
      const fn = jest.fn();
      const collection = [1];
      lodasher.filter(collection, fn);
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

    it("should remove entries with a non-number value", function () {
      const result = lodasher.filter(person, function (value) {
        return typeof value === "number";
      });
      expect(result).toEqual([35, 15]);
    });

    it("should remove entries with a key that does not start with A", function () {
      const result = lodasher.filter(person, function (_, key) {
        return key.startsWith("a");
      });
      expect(result).toEqual([35]);
    });
  });
});
