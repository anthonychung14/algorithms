taskOne();

function taskOne() {  
    console.log('Running task one...');

    // Simulates asynchronous operation by `setTimeout`.
    setTimeout(function () {
        taskTwo();
    }, 500);
}

function taskTwo() {  
    console.log('Running task two...');
    setTimeout(function () {
        taskThree();
    }, 500);
}

function taskThree() {  
    console.log('Running task three...');
    setTimeout(function () {
        console.log('Done.');
    }, 500);
}