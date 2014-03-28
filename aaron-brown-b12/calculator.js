// global var for storing result for future computation
var memoryStorage;
// click on a button
$('.calcButton').click(function(){
  var clicked = $(this);
  // retrieve type of button pressed plus values of text fields
  var operation = clicked.data('operation');
  var num1 = +$('#numberField').val();
  var num2 = +$('#numberField2').val();
  //alert(operation);
  //alert(num1);
  //alert(num2);
  var total;
  // conditions for different math operations based on type of button pressed
  // addition
  if(operation === "addition"){
    total = num1 + num2;
  } else if(operation === "subtraction"){
    //subtraction
    total = num1 - num2;
  } else if(operation === "multiply"){
    // multiplication
    total = num1 * num2;
  } else if(operation === "divide"){
    // division
    total = num1 / num2;
  } else if(operation === "exponent"){
    // exponential
    total = Math.pow(num1, num2);
  } else if(operation === "logarithm"){
    // logarithm
    var logBase = 1 / num2;
    total = Math.pow(num1, logBase);
  } else if(operation == "clearAll"){
    // clear all fields
    total = 0;
    $('#numberField').val("");
    $('#numberField2').val("");
  } else if(operation === "storeResult"){
    // Get result and store in global var memoryStorage
    var totalToStore = $('#result').text();
    memoryStorage = totalToStore;
  } else if(operation === "recallResult"){
    // Retrieve value of memoryStorage and fill in #numberField
    $('#numberField').val(memoryStorage);
  } else {
    // Whoops
    alert("Ya done goofed");
  }
  // Write final result to #result
  $('#result').text(total);
});
