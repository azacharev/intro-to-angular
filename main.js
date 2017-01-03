angular.module("myApp", [])
  .controller('myController', controllerFunction)

  function controllerFunction(){
    var myCtrl = this;

    myCtrl.logMessage = function() {
      console.log("this is a message");
    }

    myCtrl.message = "message here";

    myCtrl.clicked = false;
    myCtrl.clicked2 = false;

    myCtrl.revealDiv = function(){
      myCtrl.clicked = true;
    }

// revealing the list

    myCtrl.revealList = function(){
      myCtrl.clicked2 = true;
    }

}
