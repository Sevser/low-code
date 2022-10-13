'use strict';

const plugin = require('..');
const assert = require('assert').strict;

assert.strictEqual(plugin(), 'Hello from plugin');
console.info("plugin tests passed");
