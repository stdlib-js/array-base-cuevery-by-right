/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var cueveryByRight = require( './../lib/assign.js' );


// FUNCTIONS //

function isPositive( v ) {
	return v > 0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cueveryByRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to a provided output array (generic)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 1, 0, 0, 1 ];
	y = [ false, true, false, true, false ];

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ true, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 0, 0, 1, 1 ];
	y = [ false, null, false, null, false, null, false, null ];

	actual = cueveryByRight( x, y, 2, 0, isPositive );
	expected = [ true, null, true, null, false, null, false, null ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 0, 0, 1, 1, 1 ];
	y = [ false, false, false, true, true, true ];

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ false, true, true, true, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [];
	y = [ false, false, false, false, false ];

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1 ];
	y = [ false, false ];

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to a provided output array (typed)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 1.0, 0.0, 1.0, 1.0 ] );
	y = [ false, true, false, true, false ];

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ true, true, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	y = [ false, null, false, null, false, null, false, null ];

	actual = cueveryByRight( x, y, 2, 0, isPositive );
	expected = [ true, null, true, null, false, null, false, null ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0, 1.0, 1.0 ] );
	y = [ true, false, false, true, true, true ];

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ true, true, true, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [] );
	y = [ false, false, false, false, false ];

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0 ] );
	y = [ false, false ];

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left, and assigns the results to a provided output array ( accessor )', function test( t ) {
	var expected;
	var actual;
	var ybuf;
	var x;
	var y;

	x = toAccessorArray( [ 0, 1, 1, 1, 1 ] );
	ybuf = [ false, true, false, true, false ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ true, true, true, true, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 0, 0, 1 ] );
	ybuf = [ false, null, false, null, false, null, false, null ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 2, 0, isPositive );
	expected = [ true, null, false, null, false, null, false, null ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 0, 0, 1, 1 ] );
	ybuf = [ true, false, false, false, false, false ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ true, true, true, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 1, 1, 1, 0 ] );
	ybuf = [ true, true, true, true, true ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [] );
	ybuf = [ false, false, false, false, false ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 1, 0, isPositive );
	expected = [ false, false, false, false, false ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1 ] );
	ybuf = [ false, false ];
	y = toAccessorArray( ybuf );

	actual = cueveryByRight( x, y, 1, 1, isPositive );
	expected = [ false, true ];

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
