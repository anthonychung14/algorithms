var books = {
  1: 10,
  2: 3,
  3: 5
}

var allChapters = []

function makeGetReq(num) {
  var random = Math.random()*1000
  setTimeout(function() {
    console.log("render book", num)
  }, random)
}


function generateChapters(book_id) { 
  //get book based on id

  //return list of functions with chapter_ids to be gotten
  for (var i = 1; i < books[book_id]; i++) {
    allChapters.push(makeGetReq(i))
    }
  }
}

function getBooks(chapters, done) {
  var currChapter = 0
  
  function callback() {
    if (currChapter < chapters.length-1) {
      currChapter++
      chapters[currChapter](callback)
    }
    else {
      done()
    }
  } 
}