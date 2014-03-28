//$('.calculator').on('click', 'button', function(){
var memoryStorage;

$('.calcButton').click(function(){
  var clicked = $(this);
  var operation = clicked.data('operation');
  var num1 = +$('#numberField').val();
  var num2 = +$('#numberField2').val();
  //alert(operation);
  //alert(num1);
  //alert(num2);
  var total;
  if(operation === "addition"){
    total = num1 + num2;
  } else if(operation === "subtraction"){
    total = num1 - num2;
  } else if(operation === "multiply"){
    total = num1 * num2;
  } else if(operation === "divide"){
    total = num1 / num2;
  } else if(operation === "exponent"){
    total = Math.pow(num1, num2);
  } else if(operation === "logarithm"){
    var logBase = 1 / num2;
    total = Math.pow(num1, logBase);
  } else if(operation == "clearAll"){
    total = 0;
    $('#numberField').val("");
    $('#numberField2').val("");
  } else if(operation === "storeResult"){
    var totalToStore = $('#result').text();
    memoryStorage = totalToStore;
  } else if(operation === "recallResult"){
    $('#numberField').val(memoryStorage);
  } else {
    alert("Ya done goofed");
  }
  $('#result').text(total);
});
