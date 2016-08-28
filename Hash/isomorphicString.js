function isoMorphicString(s, t) {
	 //create two hash maps
	 var mappingS = {},
	 mappingT = {},
	 
	 //length defined for s
	 length = s.length,
	 
	 //flag. we'll assume true for now
	 isTrue = true;
	 
	 for(var i = 0; i < length; i++){
	    
	    //if both characters haven't been inserted into the hash table =
	    if(typeof mappingS[s.charAt(i)] == 'undefined' && typeof mappingT[t.charAt(i)] == 'undefined'){
	        //s to t and t to s
	        mappingS[s.charAt(i)] = t.charAt(i);
	        mappingT[t.charAt(i)] = s.charAt(i);
	    
	    //if I try to look up s's character and it doesn't equal what's at t
	    } else if(mappingS[s.charAt(i)] !== t.charAt(i)){    
	        //we return false and immediately break out
	        isTrue = false;	        
	        break;
	    }
	}	
	return isTrue;
}

console.log(isoMorphicString('paper', 'title'))