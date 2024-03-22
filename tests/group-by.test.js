const lodasher = require("../index");

describe("lodasher.groupBy", function () {
  describe("for arrays", function () {
    it("should group using the result of the iteratee as the key", function () {
      const result = lodasher.groupBy([6.1, 4.2, 6.3], Math.floor);
      expect(result).toEqual({
        6: [6.1, 6.3],
        4: [4.2],
      });
    });

    it("should provide only the value as arguments into iteratee", function () {
      const fn = jest.fn();
      lodasher.groupBy([1], fn);
      expect(fn).toHaveBeenCalledWith(1);
      expect(fn.mock.calls[0].length).toBe(1);
    });
  });
});
