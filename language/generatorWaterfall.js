// Say we have a magic async function that move result of promise to next generator call
var waterfall = async(function* (firstTask, ...restOfTasks){
  return restOfTasks.reduce((prev, task) => {
    yield task(prev);
  }, yield firstTask());
});

// We can then invoke task in waterfall order, simply by doing this.
// Each task returns a promise
waterfall(task1, task2, task3, task4, task5)
  .then(result => {
    // result would be the final result from the waterfall tasks  
  });


// Implementation of magic async function from https://www.promisejs.org/generators/
function async(makeGenerator){
  return function () {
    
    //Depending on task makeup, could also be call?
    //Activate generator
    var generator = makeGenerator.apply(this, arguments);

    function handle(result){
      // result => { done: [Boolean], value: [Object] }
      //base case
      if (result.done) return Promise.resolve(result.value);

      //return a Promise and recursively call
      return Promise.resolve(result.value).then(function (res){
        return handle(generator.next(res));
      }, function (err){
        return handle(generator.throw(err));
      });
    }

    //try to activate generator
    try {
      return handle(generator.next());
    } catch (ex) {
      return Promise.reject(ex);
    }
  }
}