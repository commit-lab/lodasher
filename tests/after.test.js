const lodasher = require("../index");

describe("after", function () {
  it("should return a function", function () {
    const fn = jest.fn();
    expect(typeof lodasher.after(5, fn)).toBe("function");
  });

  it("should only invoke the supplied callback after it has been called n or more times", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.after(3, fn);

    returnedFunction();
    returnedFunction();
    returnedFunction();
    returnedFunction();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should relay any supplied arguments into the callback", function () {
    const fn = jest.fn();
    const returnedFunction = lodasher.after(2, fn);

    returnedFunction(1, 2, 3);
    returnedFunction("foo", "bar", "baz", "biz", "text");
    expect(fn).not.toHaveBeenCalledWith(1, 2, 3);
    expect(fn).toHaveBeenCalledWith("foo", "bar", "baz", "biz", "text");
  });

  it("should return what the callback returns", function () {
    const returnedFunction = lodasher.after(2, function () {
      return "hello world";
    });

    returnedFunction();
    expect(returnedFunction()).toBe("hello world");
  });
});
