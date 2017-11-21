//javascript implementation of quickselect
function quickSelect( array, k ) {
    var left = 0, right = array.length - 1;

    while( true ) {
        if( right <= left + 1 ) {
         if( right === left + 1 && array[right] < array[left] )
         swap( array, left, right );
         return array[k];
        } else {
            //the unsigned bitshift has the effect of dividing by 2 
            //and discarding any remainder
         var middle = ( left + right ) >>> 1;
         swap( array, middle, left + 1 );

         if( array[ left ] > array[ right ] )
         swap( array, left, right );

         if( array[ left + 1 ] > array[ right ] )
         swap( array, left + 1, right );

         if( array[ left ] > array[ left + 1 ] )
         swap( array, left, left + 1 );

         var i = left + 1, j = right;
         var pivot = array[ i ];
         while( true ) {
             i++;
         while( array[ i ] < pivot )
             i++;

             j--;
         while( array[ j ] > pivot )
             j--;

         if( j < i )
         break;
         swap(array, i, j);
         }
         array[left + 1] = array[j];
         array[j] = pivot;

         if( j >= k )
         right = j - 1;

         if( j <= k )
left = i;
}
    }
}

function swap( array, i, j ) {
    var temp = array[ i ];
    array[ i ] = array[ j ];
    array[ j ] = temp;
}

var test = [21,1,2,5,7,100]
var test2 = [1,2,3,4,5]
console.log(quickSelect(test, 5))