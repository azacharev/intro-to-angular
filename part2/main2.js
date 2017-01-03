angular.module("myapp2", [])
  .controller('myController', controllerFunction)

function controllerFunction() {
  var myCtl = this;

  //myCtl.para = "this is a paragraph";
  myCtl.heading = "this is a heading!"

  myCtl.toPink = function(){
    document.getElementById('top_para').style.color = 'pink';
  }

  myCtl.backToNorm = function(){
    document.getElementById('top_para').style.color = "black";
  }
// This is for the bottom paragraph
  myCtl.toPink2 = function(){
    document.getElementById('bottom_para').style.color = 'pink';
  }

  myCtl.backToNorm2 = function(){
    document.getElementById('bottom_para').style.color = "black";
  }


}
document.getElementById('link').addEventListener("click", clickLink());

function clickLink(){
    // var confirmation = confirm("do you wish to leave the page?");
    if (confirm('Are You Sure?')){
   window.location = "http://www.google.com/";
    }else{
   event.preventDefault();
   document.getElementById('link').style.display = 'none';
}
  }
