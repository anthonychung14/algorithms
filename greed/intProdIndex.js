//Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers
//and returns an array of the products.

//no division

var arr = [1,2,3,4]
//expect products after first = [1, 2, 2, 6]
//expect products after second = [24, 12, 8, 6]

function getProducts(array) {
  //initialize results array
  var products = []

  //calculate on an ongoing basis, the mult products before the index
  //initialize the first one to 1
  var product = 1
  for (var i = 0; i < array.length; i++) {
      products[i] = product
      product *= array[i]
    }

  productLastIndex = 1
  //calculate mult products after index~
  for (var j = array.length-1; j >=0; j--) {
      products[i] *= productLastIndex
      productLastIndex *= array[j]
  }

  return products
}


