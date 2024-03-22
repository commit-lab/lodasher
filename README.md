# Welcome To Lodasher 😎

This is a coding exercise for getting a firm grasp on JavaScript fundamentals.

We will do this by **implementing** some methods from a popular library called "Lodash".

# How To Use This Repo

## Prerequisites

If you want to run this code on your machine, you'll need to install:

- [git](https://www.google.com/search?q=how+to+install+git)
- [node](https://www.google.com/search?q=how+to+install+node)

Figure out how to do that by Googling or asking ChatGPT!

The specifics go out-of-date every once in a while, so it's best if you just Google for the most current information.

Pro-tip: Don't be shy. Use ChatGPT to help you debug if you run into any errors. (It'll be faster than Googling a lot of the times.)

## Running The Code

If you have cloned this repo locally, run:

```sh
npm install
npm test # This will run the unit tests.
```

If you are working on this inside of replit.com:

1. open up the "Shell" (Bottom left under "Tools")
2. Type `npm install` into the shell and press enter
3. Type `npm test` and press enter to run the unit tests.

In either case, you will be making edits to `index.js`, and re-running the tests to verify your work.

All of the tests are located inside of the `tests/` directory.

# Ideal Outcome

Make an honest, best-effort attempt at each problem before looking at the solution.

Only reference the solution code once you've tried everything you can think of and have a headache 😅

The solution is there to help you solidify your understanding, NOT to be used as a crutch.

The ideal outcome of this exercise is that you can implement each method without ever referencing the solution code.

The solution code for this is available inside of `solution.js`.

# Pro Tips

If you look inside of `package.json`, you'll see a section for "scripts". This is where our `npm test` command is defined.

You'll see that it uses `jest` for running the unit tests.

There's a few neat things you can do with Jest:

## Tip 1: Run A Specific Test

The `jest` command accepts a filter string as its argument, which tells jest to only run test file patterns that match your filter string.

For example, you can run just the "map" test by:

```sh
npm test -- map
#        ^^ These extra hyphens tells `npm` to relay everything after
#           the double hyphen to the underlying `jest` command.
```

## Tip 2: Run Jest under "watch" mode

You can run Jest in "watch" mode, which gets it to watch our source code and re-run the test automatically.

You can do this using the `-w` or `--watch` flag:

```sh
npm test -- --watch
npm test -- --watchAll # (For those of you running this in replit.com)
```

## Tip 3: Disable certain tests

You can disable certain tests or blocks of tests in the source code by changing any `describe`, `test`, or `it` statements to `xdescribe`, `xtest`, or `xit`:

```javascript
xdescribe("foobar", function () {
  // Nothing here will run.
  it("should not run", function () {
    /* ... */
  });
  it("should not run either", function () {
    /* ... */
  });
});

describe("bizbaz", function () {
  it("should run", function () {
    // This test will run.
  });

  xit("should not run", function () {
    // This test will not run.
  });
});
```

# Reference / Docs

- [Lodash](https://lodash.com/)
- [Jest](https://jestjs.io/)
