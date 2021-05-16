"use strict";

function describe(title, body) {
  console.log(title);
  body();
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual === expected) {
        console.log("PASS");
      } else {
        console.log(`FAIL: expected ${actual} to equal ${expected}`);
      };
    },
    toBe: function(expected) {
      if (actual instanceof expected) {
          console.log("PASS")
      } else {
          console.log(`FAIL: expected ${actual} to be an instance of ${expected}`);
      };
    }
  };
};

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
};

function clear(element) {
  element.innerHTML = "";
  
}
