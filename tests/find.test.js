const { describe } = require("node:test");
const lodasher = require("../index");

describe("lodasher.find", function () {
  describe("for arrays", function () {
    it("should find the correct entry", function () {
      const result = lodasher.find(
        [
          { name: "bob", age: 30 },
          { name: "christina", age: 28 },
          { name: "susan", age: 25 },
          { name: "rick", age: 25 },
        ],
        function (person) {
          return person.age === 25;
        }
      );

      expect(result).toEqual({ name: "susan", age: 25 });
    });
  });

  describe("for objects", function () {
    it("should find the correct entry", function () {
      const result = lodasher.find(
        {
          name: "bob",
          age: 30,
          city: "austin",
        },
        function (_, key) {
          return key.startsWith("a");
        }
      );

      expect(result).toBe(30);
    });
  });
});
