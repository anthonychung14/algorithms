function isIsomorphic(str1, str2) {
  var hashMap = {};  
  var pattern = []
  if (str1.length !== str2.length) {
    return false;
  }  

  str1 = str1.split("")
  for (var i = 0; i< str1.length; i++) {      
    hashMap[str1[i]] = hashMap[str1[i]] || i
    pattern.push(hashMap[str1[i]])
  }

  for (var i = 0; i< str2.length; i++) {
    hashMap[str2[i]] = hashMap[str2[i]] || i
    if (pattern[i] !== hashMap[str2[i]]) {
      return false
    }
  }
  return true;
}

isIsomorphic("bob", "tat")
