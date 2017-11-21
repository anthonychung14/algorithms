/*
 * function bind():
 *
 * example 1:
 *
 var alice = {
 name: 'alice',
 shout: function(){
 alert(this.name);
 }
 }
 
 var boundShout = bind(alice.shout, alice);
 boundShout(); // alerts 'alice'
 boundShout = bind(alice.shout, {name: 'bob'});
 boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 var func = function(a, b){ return a + b };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 result === 'foobar'; // true
 *
*/

var bind = function(func, context) {
  // TODO: Your code here

  // Make a copy of the function call somehow
  var tempFunc = func.call(context)

  return tempFunc

  // change context by declaring "this" to be equal to context


};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
  var alice = {
    name: 'alice',
    shout: function(){
      alert(this.name);
    }
 }
 var boundShout = alice.shout.bind(alice);
 boundShout(); // alerts 'alice'
 boundShout = alice.shout.bind({name: 'bob'});
 boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(scope) {
  var fn = this
  return function() {
    return fn.apply(scope)
  }
  // TODO: Your code here
};
