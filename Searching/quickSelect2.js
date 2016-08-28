
//WHILE LOOP DOESN'T TERMINATE. FUCK
function quickSelectInPlace(arr, k) {
    if (!arr || arr.length <= k) {
        throw 'Invalid arguments to quickSelectInPlace';
    }
    var start = 0
    var end = arr.length-1    

    var read, write, mid, temp
    var count = 0;

    while(start < end) {        
        count++
        read = start
        write = end
        mid = arr[Math.floor(read+write/2)]

        console.log(read, write, "this needs to change")

        while(read < write) {
            if (arr[read] >= mid) {
                temp = arr[write]
                arr[write] = arr[read]
                arr[read] = temp
                write--
            } else {
                read++
            }
        }
        if(count > 100) {break;}

        if(arr[read] > mid) { read-- }
        if (k <= read) {
            console.log(read, write, start, "end is changing to read")
            end = read;
        } else {
            console.log(read, "start is changing to read")
            start = read + 1
        }

    }
    console.log(arr)
    return arr[k]
}

var test = [21,1,2,5,7,100, 60, 99]
var test2 = [1,2,3,4,5]
console.log(quickSelectInPlace(test, 2))