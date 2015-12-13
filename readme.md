# suppress-return [![Build Status](https://travis-ci.org/jamestalmage/suppress-return.svg?branch=master)](https://travis-ci.org/jamestalmage/suppress-return)

> Wrap a callback, suppressing it's return value.


## Install

```
$ npm install --save suppress-return
```


## Usage

```js
  const suppressReturn = require('suppress-return');

  const wrapped = suppressReturn(function (a) {
    assert.strictEqual(a, 'foo');
    return bar; 
  });

  assert.strictEqual(wrapped('foo'), undefined);
```


## API

### suppressReturn(cb, [ctx])

Returns a wrapped version of `cb` that will always return `undefined`; 

#### cb

Type: `function`

The callback to be wrapped.

#### ctx

If provided, the `this` value will be bound to `ctx`.
It defaults to whatever the wrapper is called with.


## License

MIT © [James Talmage](http://github.com/jamestalmage)
