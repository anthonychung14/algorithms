 //Given a list of async tasks in the form an array, complete in sequential order
 //call before and after to bookend, and then done as soon as they are all done

 function asyncSeries(list, done, before, after) {    
  
  //SOLUTION #1
  let counter = 0;  
  let listCopy = list.slice()
  if (before) listCopy.unshift(before)
  if (after) listCopy.push(after)  
  
  const augmentedCallback = () => {
    if (counter < listCopy.length-1) {
      counter++
      listCopy[counter](augmentedCallback)
    } else {
      done()
    }    
  }
}

  //SOLUTION #2
  if (!list.length) {
    done()
  } else {
    list[0](asyncSeries.bind(null, list.slice(1), done))
  }  
}

//SOLUTION #3
 function asyncSeries (list, done, before, after, counter) {
  // TODO: Implement me!
  // if (before === undefined) before = useCallback;
  // if (after === undefined) after = useCallback;
  // counter = counter || -1;
  if (counter === undefined) counter = -1;
  
  if (counter === -1) {
    before(() => {
      asyncSeries(list, done, before, after, counter + 1);
    }) 
  } else if (counter >= list.length) {
    after(done);
  } else {
    list[counter](() => {
      asyncSeries(list, done, before, after, counter + 1);
    });
  }
}



var expectEqual = function (a, b) {
  if (a === b) {
    return true;
  } else {
    throw new Error("Expected " + JSON.stringify(a) + " to equal " + JSON.stringify(b));
  }
};

var testStr = '';

asyncSeries([
  function first (done) {
    setTimeout(function () {
      testStr += 1;
      console.log("testStr now equals:", testStr);
      done();
    }, 1000);
  },
  function second (done) {
  setTimeout(function () {
    testStr += 2;
    console.log("testStr now equals:", testStr)
    done();
  }, 100);
},function third (done) {
  setTimeout(function () {
    testStr += 3;
    console.log("testStr now equals:", testStr)
    done();
  }, 1);
},function fourth (done) {
  setTimeout(function () {
    testStr += 4;
    console.log("testStr now equals:", testStr)
    done();
  }, 12);
}],function done () {
  var expected = '1234';
  if (expectEqual(expected, testStr)) {
    console.log('CONGRATS!');
  }
});
      

counter = counter || -1

if counter === -1 {
  before(() => {
    asyncSeries(list, done, before, after, counter++)
  })
}

  const listCopy = list.slice();
  if (before) listCopy.unshift(before);
  if (after) listCopy.push(after);
  
  let counter = 0;
  // define callback
  
  const augmentedCallback = () => {
    if (++counter < listCopy.length) {
      listCopy[counter](augmentedCallback);
    } else {
      done();
    }
  };

  listCopy[counter](augmentedCallback);


var testStr = '';

var expectEqual = function (a, b) {
  if (a === b) {
    return true;
  } else {
    throw new Error("Expected " + JSON.stringify(a) + " to equal " + JSON.stringify(b));
  }
};

asyncSeries([
  function first (done) {
    setTimeout(function () {
      testStr += 1;
      console.log("testStr now equals:", testStr);
      done();
    }, 1000);
  },
  function second (done) {
  setTimeout(function () {
    testStr += 2;
    console.log("testStr now equals:", testStr)
    done();
  }, 100);
},function third (done) {
  setTimeout(function () {
    testStr += 3;
    console.log("testStr now equals:", testStr)1 
    done();
  }, 1);
},function fourth (done) {
  setTimeout(function () {
    testStr += 4;
    console.log("testStr now equals:", testStr)
    done();
  }, 12);
}],function done () {
  var expected = '1234';
  if (expectEqual(expected, testStr)) {
    console.log('CONGRATS!');
  }
},function before (done) {
  console.log('before');
  done();
}, function after (done) {
  console.log('after');
  done();
}););
            

