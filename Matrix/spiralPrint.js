// prints left to right rather than build and traverse
var size = 21;

for (var h = 0; h < size; h++) {
    var line = "";
    for (var w = 0; w < size; w++) {
        if (h < size/2) {
            if (h % 2 === 0) {
                if (w >= h && w < size - h) {
                    line += "A";
                }
                else {
                    line += (w % 2 === 0) ? "B" : " ";
                }
            }
            else {
                if (w >= h && w < size - h) {
                    line += " ";
                }
                else {
                    line += (w % 2 === 0) ? "C" : " ";
                }
            }
        }
        else {
            if (h % 2 === 0) {
                if (w < h - 1 && w >= size - h) {
                    line += "D";
                }
                else {
                    line += (w % 2 === 0) ? "E" : " ";
                }
            }
            else {
                if (w < h - 1 && w >= size - h) {
                    line += " ";
                }
                else {
                    line += (w % 2 === 0) ? "F" : " ";
                }
            }
        }
    }
    console.log(line);
}