'use strict';

const generator = require('..');
const assert = require('assert').strict;

assert.strictEqual(generator(), 'Hello from generator');
console.info("generator tests passed");
