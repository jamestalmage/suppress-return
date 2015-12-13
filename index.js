'use strict';
module.exports = function suppressReturn(cb, ctx) {
	return function suppressed() {
		cb.apply(ctx || this, arguments);
	};
};
