//////GET

var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >=200 && request.status < 400) {
    var data = JSON.parse(request.responseText)
  } else {
    //got there, but ran into an error
  }
}

request.onerror = function() {
  //error of some sort
}

request.send();


//////POST

var newName = 'John Smith',
    xhr = new XMLHttpRequest();

xhr.open('POST',
encodeURI('myservice/username?id=some-unique-id'));
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200 && xhr.responseText !== newName) {
        alert('Something went wrong.  Name is now ' + xhr.responseText);
    }
    else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send(encodeURI('name=' + newName));




/////////