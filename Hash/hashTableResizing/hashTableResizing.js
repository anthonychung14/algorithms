/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var ratio = size/storageLimit

  result.insert = function(key, value){
    var tuple = [key, value]
    var bucket = result.storage[getIndexBelowMaxForKey(key, storageLimit)] || [];
    
     //if the key matches the tuple, overwrite it
    if (bucket[0] === tuple[0]) {
      bucket = tuple
    
    //if the bucket is already occupied, add to it
    } else if (bucket.length >=1) {
      bucket.push(tuple)
    
    //else congrats. the bucket is empty so we can assign it a position now
    } else {
      result.storage[getIndexBelowMaxForKey(key, storageLimit)] = bucket
      size++
    }

    //finally, check to make sure that not too much space is being used
    if (result.ratio > .75) {
      result.storageLimit = result.storageLimit*2
    } 

  };

  result.retrieve = function(key){
    var location = result.storage[getIndexBelowMaxForKey(key, storageLimit)]

    //if collision in place, check to make sure keys match
    if (location.length > 1) {
      for (var i =0; i < location.length; i++) {
        if (location[i][0] === key) {
          return location[i][1];
        }
        else {
          return null;
        } 
      }
    
    //if there is only one tuple in the bucket, return it
    } else if (location.length = 1) {
      return location[i][1];
    
    //otherwise, no exist. go away
    } else {
      return null;
    }
  };

  result.remove = function(key){
    var location = result.storage[getIndexBelowMaxForKey(key, storageLimit)];
     if (location.length > 1) {
      for (var i =0; i < location.length; i++) {
        if (location[i][0] === key) {
           location.splice(i, 1);
           size--
        }
        else {
          return null;
        } 
      }
    //if there is only one tuple in the bucket, return it
    } else if (location.length = 1) {
      location = [];
      size--
    
    //otherwise, no exist. go away
    } else {
      return null;
    }

    if (result.ratio < .25) {
      result.storageLimit = result.storageLimit/2
    } 
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
