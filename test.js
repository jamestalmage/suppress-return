import test from 'ava';
import suppress from './';

const slice = Array.prototype.slice;

test('no context', t => {
	t.plan(2);

	var result = suppress(function() {
		t.deepEqual(slice.call(arguments), ['foo', 'bar']);
		return 'baz';
	})('foo', 'bar');

	t.is(result, undefined);
});

test('with context', t => {
	t.plan(3);

	var result = suppress(function() {
		t.deepEqual(slice.call(arguments), ['hi', 'howdy']);
		t.deepEqual(this, 'hello');
		return 'bye';
	}, 'hello')('hi', 'howdy');

	t.is(result, undefined);
});

test('context defaults to whatever the wrapper is called with', t => {
	t.plan(1);

	var obj = {
		fn: suppress(function () {
			t.is(this, obj);
		})
	};

	obj.fn();
});
