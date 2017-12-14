$('#btn').click (function () {
    var firstNameValue=$('#firstName').val();
    var lastNameValue=$('#lastName').val();
     var fullName=firstNameValue+ ' '+lastNameValue;
      $('#fullName').val(fullName);


});

$('#btn1').click (function () {
    var firstNumberValue=Number($('#firstNumber').val());
    var secondNumberValue=Number($('#secondNumber').val());
    var result=firstNumberValue+secondNumberValue;
    $('#result').val(result);


});










// alert ($('#h1').html());

