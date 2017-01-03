angular.module("myapp3", [])
  .controller('myController', controllerFunction)

  function controllerFunction(){
    var myCtl = this;

    // myCtl.popUp = function(){
    //   var div = document.createElement('div');
    //   div.innerHTML = "this is a test";
    //   div.setAttribute('class', 'newPopup');
    //   document.body.appendChild(div);
    //}
    myCtl.clicked = false;
    myCtl.reveal = function(){
      myCtl.clicked = true;
    }

    document.getElementById('closebutton')

    myCtl.hide = function(){
      myCtl.clicked = false; 
    }

    //   var myCtl.clicked = false;
    //   myCtl.reveal = function(){
    //   myCtl.click = true;
    // }

  }
