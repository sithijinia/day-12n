/**
 * Created by Web App Develop-PHP on 12/12/2017.
 */
var redBtnElement = document.getElementById('redbtn');
redBtnElement.onmouseover=function () {
    var divOneElement = document.getElementById('divOne');
    // divOneElement.style.backgroundColor='red';

    divOneElement.className ='class-One';






};

var greenBtnElement = document.getElementById('greenbtn');
greenBtnElement.onmouseover=function () {
    var divOneElement = document.getElementById('divOne');
    // divOneElement.style.backgroundColor='green';

    divOneElement.className ='class-Two';

};


var blueBtnElement = document.getElementById('bluebtn');
blueBtnElement.onmouseover=function () {
    var divOneElement = document.getElementById('divOne');
    // divOneElement.style.backgroundColor='blue';

    divOneElement.className ='class-Three';

};



var defaultBtnElement = document.getElementById('defaultbtn');
defaultBtnElement.onclick=function () {
    var divOneElement = document.getElementById('divOne');

    divOneElement.className='my-style';
};