'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
  console.log("------------------------------")
}
printStacks()

//pops off last element of startstack and 'pushes' it to endstack

function movePiece(startStack, endStack) {
  return stacks[endStack].push(stacks[startStack].pop());
}


function isLegal(startStack, endStack) {
    // if endstack is empty or if startstack is empty or value of last element in startstack is less than value of last item in end stack
  return (stacks[endStack].length === 0 || stacks[startStack][stacks[startStack].length - 1] < stacks[endStack][stacks[endStack].length -1]);

}
  
  function checkForWin() {
    if (stacks.c.length === 4 || stacks.b.length === 4) {
      return true }
  else {
      return false;
      }
    }

let towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack,endStack)) {
    movePiece(startStack, endStack);
    printStacks();
  } else {
    console.log('Illegal Move!! Try Again');
    return false;
   }
  if (checkForWin()) {
    console.log('YOU WON!!!!!!!!!!');
    return true;
  }
};

//fast answer:
//towersOfHanoi("a", "b")
//towersOfHanoi("a", "c")
//towersOfHanoi("b", "c")
//towersOfHanoi("a", "b")
//towersOfHanoi("c", "a")
//towersOfHanoi("c", "b")
//towersOfHanoi("a", "b")
//towersOfHanoi("a", "c")
//towersOfHanoi("b", "c")
//towersOfHanoi("b", "a")
//towersOfHanoi("c", "a")
//towersOfHanoi("b", "c")
//towersOfHanoi("a", "b")
//towersOfHanoi("a", "c")
//towersOfHanoi("b", "c")

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests --------------

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
