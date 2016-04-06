/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){console.log('Age changed')});
 * obj.age++;
 obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {

  object = obj;
  object.trigger = function(event) {
      this.on(this, arguments)
  }

  object.on = function(event, callback) {
    //I'm stuck on adding properties to an argument passed to a function.
    //I tried obj.on, but it seems like I need help understanding inheritance a bit more

    //do I just create a clone of the argument, then pass in functional properties?

    if (object.trigger) {
      callback(this, arguments)
    }   
  };


    //when this function is called with event, call "on" with this and arguments as parameters
  return object;

}
 

  

