const lodasher = require("../index");

describe("once", function () {
  it("should return a function", function () {
    const fn = jest.fn();
    expect(typeof lodasher.once(fn)).toBe("function");
  });

  it("should only invoke the supplied callback once", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.once(fn);

    returnedFunction();
    returnedFunction();
    returnedFunction();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should relay any supplied arguments into the callback", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.once(fn);

    returnedFunction("foo", "bar", "baz", "biz", "text");
    expect(fn).toHaveBeenCalledWith("foo", "bar", "baz", "biz", "text");
  });

  it("should return what the callback returns", function () {
    const returnedFunction = lodasher.once(function () {
      return "hello world";
    });

    const result = returnedFunction();
    expect(result).toBe("hello world");
  });
});
