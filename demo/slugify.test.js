import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { slugify } from './slugify.js';

test('slugify basic text', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('slugify handles underscores', () => {
  assert.equal(slugify('hello_world_again'), 'hello-world-again');
});

test('slugify handles extra spaces', () => {
  assert.equal(slugify('  leading and trailing spaces  '), 'leading-and-trailing-spaces');
  assert.equal(slugify('multiple   spaces'), 'multiple-spaces');
});

test('slugify removes special characters', () => {
  assert.equal(slugify('!@#$%^&*()=+[]{};":inaly,.<>/?`~'), '');
  assert.equal(slugify('special---chars!'), 'special-chars');
});

test('slugify handles already slugged text', () => {
  assert.equal(slugify('already-a-slug'), 'already-a-slug');
});
