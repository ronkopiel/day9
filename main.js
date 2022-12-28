// // EX0 
// // Create a two-dimensional array called matrix with at least three rows and three columns. Each element in the array should be a string.
// // Write a function, printMatrix, that takes in a two-dimensional array and prints out each element in the array, with each row on a new line.
// const matrix = [["apple", "banana", "cherry"], ["dog", "cat", "bird"], ["red", "green", "blue"]];
// function printMatrix(arr) {
//   for (i = 0; i < matrix.length; i++) {
//     let row = "";
//     for (j = 0; j < matrix[i].length; j++) {
//         row += `${matrix[i][j]} `;
//     }
//     console.log(row);
//   }
// }
// printMatrix(matrix);  // should print "apple banana cherry\ndog cat bird\nred green blue"




// // Create a two-dimensional array called matrix with at least three rows and three columns. Each element in the array should be a number.
// // Write a function, sumOfColumns, that takes in a two-dimensional array and returns an array containing the sum of the values in each column of the input array.
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function sumOfColumns(arr) {
//     let columns = [];
//   for (i = 0; i < matrix.length; i++) {
//     let sum = 0;
//     for (j = 0; j < matrix[i].length; j++) {
//         sum += matrix[j][i];
//     }
//     columns[i] = sum;
//   }
//   return columns
// }

// const columnSums = sumOfColumns(matrix);
// console.log(columnSums);  // should print [12, 15, 18]
// // 1+ 4 + 7 = 12
// //2 + 5 + 8 = 15
// //3 + 6 + 9 = 18


// // EX2 
// // Create a two-dimensional array called matrix with at least three rows and three columns. Each element in the array should be a number.
// // Write a function, smallestInRow, that takes in a two-dimensional array and returns an array containing the smallest number in each row of the input array.
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function smallestInRow(array) {
//     let smallest = [];
//       for (i = 0; i < matrix.length; i++) {
//         let compare = matrix[i][0];
//         for (j = 0; j < matrix[i].length; j++) {
//             if (compare >= matrix[i][j]) {
//                 compare = matrix[i][j]
//             }
//         }
//         smallest[i] = compare;
//       }
//       return smallest
// }
// console.log(smallestInRow(matrix));



// // EX4
// // The supplied array will contain both numeric and non-numeric characters. Return a new array where all numeric values are positioned at the beginning of the array, in ascending order. The non-numeric values must come after these, also ordered appropriately.
// function sortTheArray(array) {
//     let temp = 0
//     for (i = 0; i < array.length; i++) {
//         for (j = array.length - 1; j > i; j--) {
//             if (array [i] > array[j] && (typeof array[i]) == (typeof array[j])) {
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//                 console.log('normal swap');
//             }
//             else if ((typeof array[i]) == 'string' && (typeof array[j]) == 'number' ) {
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//                 console.log('string swap');
//             }
//         }
//     }
//     return array;
// }
// console.log(sortTheArray(['b',6,'a','q',7,2]));


// // Imagine the supplied array is like a pack of cards. Write a function to shuffle this array into a completely new and entirely random order, much like shuffling a pack of cards.
// function shuffle(array) {
//     let temp;
//     for (i = 0; i < array.length; i++) {
//         for (j = array.length-1; j >= 0; j--) {
//             if (array[i]*Math.random() > array[j]*Math.random()) {
//                 temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(shuffle([10,12,15,1,8,900,878]));


// What will be the output of this function?
// const someArray = [1,2,3,4,5];
// for (var i = 0; i < someArray.length; i++) {
//     setTimeout(function() {
//         console.log("index: " + i + ", element: " + someArray[i])
//     }, 1000)
// }


// EX7

// Write a nested loop that prints the pattern:

// *   *   *
//   *   *   *
//     *   *   *
//       *   *   *
// //         *   *   *
// let symbol;
// let spaces ='';
// let string;
// for (i = 0; i < 5; i++) {
//     symbol = '';
//     for (j = 0; j < 3; j++) {
//         symbol += '*  ';
//     }
//     spaces +="  ";
//     string = spaces + symbol
//     console.log(string);
// }


// // EX8

// // Write a nested loop that prints the pattern:

// // * * * * * 
// //   * * * * 
// //     * * * 
// //       * * 
// //         *
// let symbol;
// let spaces ='';
// let string;
// for (i = 0; i < 5; i++) {
//     symbol = '';
//     for (j = 5; j > i; j--) {
//         symbol += '*';
//     }
//     spaces +=" ";
//     string = spaces + symbol
//     console.log(string);
// }