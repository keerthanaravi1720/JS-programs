
const readline = require('readline-sync');

function calculateSum(matrix) {
    var sum = 0;
  
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
    }
  
    return sum;
  }
  
  function getUserInput() {
    var rows = parseInt(readline.question("Enter the number of rows:"));
    var columns = parseInt(readline.question("Enter the number of columns:"));
  
    var matrix = [];
  
    for (var i = 0; i < rows; i++) {
      matrix[i] = [];
      
      for (var j = 0; j < columns; j++) {
        matrix[i][j] = parseInt(readline.question("Enter value at index [" + i + "][" + j + "]:"));
      }
    }
  
    return matrix;
  }
  
  var matrix = getUserInput();
  var sum = calculateSum(matrix);
  
  console.log("The sum of the elements in the matrix is: " + sum);

