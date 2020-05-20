/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function callFunctionBody(expr) {
  return '(function f() {\n' + 'Object.defineProperties(arguments, {1: { writable: false },\n' + '                                    2: { configurable: false },\n' + '                                    3: { writable: false,\n' + '                                        configurable: false }});\n' + 'return (' + expr + ');\n' + '})(0, 1, 2, 3);';
}

testLenientAndStrict(callFunctionBody('arguments[0] = 42'), returns(42), returns(42));
true;
testLenientAndStrict(callFunctionBody('delete arguments[0]'), returns(true), returns(true));
true;
testLenientAndStrict(callFunctionBody('arguments[1] = 42'), returns(42), raisesException(TypeError));
true;
testLenientAndStrict(callFunctionBody('delete arguments[1]'), returns(true), returns(true));
true;
testLenientAndStrict(callFunctionBody('arguments[2] = 42'), returns(42), returns(42));
true;
testLenientAndStrict(callFunctionBody('delete arguments[2]'), returns(false), raisesException(TypeError));
true;
testLenientAndStrict(callFunctionBody('arguments[3] = 42'), returns(42), raisesException(TypeError));
true;
testLenientAndStrict(callFunctionBody('delete arguments[3]'), returns(false), raisesException(TypeError));
true;
reportCompare(true, true);