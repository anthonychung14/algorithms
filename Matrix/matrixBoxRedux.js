// Imagine we have an image where every pixel is white or black. We’ll represent this image as a simple 2D array (0 = black, 1 = white).

// Now there are N solid black rectangles in the image. Write a function that takes in the image and outputs all the black rectangles.

// For example:
// //JavaScript
var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var _ = require('underscore');