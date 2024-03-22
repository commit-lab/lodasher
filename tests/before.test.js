const lodasher = require("../index");

describe("before", function () {
  it("should return a function", function () {
    const fn = jest.fn();
    expect(typeof lodasher.before(5, fn)).toBe("function");
  });

  it("should only invoke the supplied callback n-1 times", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.before(3, fn);

    returnedFunction();
    returnedFunction();
    returnedFunction();
    returnedFunction();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should relay any supplied arguments into the callback", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.before(5, fn);

    returnedFunction("foo", "bar", "baz", "biz", "text");
    expect(fn).toHaveBeenCalledWith("foo", "bar", "baz", "biz", "text");
  });

  it("should return what the callback returns", function () {
    const returnedFunction = lodasher.before(2, function () {
      return "hello world";
    });

    const result = returnedFunction();
    expect(result).toBe("hello world");
  });

  it("should not allow an n less than or equal to 1", function () {
    const fn = jest.fn();
    expect(function () {
      lodasher.before(1, fn);
    }).toThrow();
    expect(function () {
      lodasher.before(0, fn);
    }).toThrow();
    expect(function () {
      lodasher.before(-1000, fn);
    }).toThrow();
  });
});
