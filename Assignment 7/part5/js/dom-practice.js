/*eslint-env browser*/

//STEP 1
function displayMsg1() {
    "use strict";
    return window.alert("I have been clicked (STEP 1)");
}

//STEP 2
window.onload = function () {
    "use strict";
    var btn = window.document.getElementById("btn");
    function displayMsg2() {
        return window.alert("I have been clicked (STEP 2)");
    }
    btn.onclick = displayMsg2;
};

//STEP 3
function displayMsg3() {
    "use strict";
    return window.alert("I have been clicked (STEP 3)");
}

window.addEventListener("load", function () {
    "use strict";
    var btn1 = window.document.getElementById("btn1");
    btn1.addEventListener("click", displayMsg3);
});

//STEP 4
window.addEventListener("load", function () {
    "use strict";
    var btn2 = window.document.getElementById("btn2");
    btn2.addEventListener("click", function () {
        return window.alert("I have been clicked (STEP 4)");
    });
});

//STEP 5
// IN THE HEAD TAG
//function init() {
//window.addEventListener("load", function(){
  //  "use strict";
    //var btn3 = window.document.getElementById("btn3")
    //btn3.addEventListener("click", function() {
      //  window.alert("I have been clicked.")
   // });
//}

//window.addEventListener("load", init);