$(function(){
  var words = $("p").text().split(" ");
  $("p").empty()

  $.each(words, function(i, v) {
    $("p").append($("<span>").text(v));
  });

  var colorArray = ["blue", "red", "yellow", "green", "purple", "black"]

  setInterval(function() { $("span").each(function(i,v) {
    var color = Math.floor((Math.random() * colorArray.length))
    $(this).css({color: colorArray[color]}).bind(this)
  })}, 1000)
  
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

});