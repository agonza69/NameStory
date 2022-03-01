
//polaroid exposure fade

var username;

var isTyped;
document.getElementById("blank2").addEventListener("click", fade2);
document.getElementById("blank3").addEventListener("click", fade3 );
document.getElementById("blank1").addEventListener("click", fade1);



        function fade1() {
            var fade= document.getElementById("blank1");
              
            var intervalID = setInterval(function () {
                  
                if (!fade.style.opacity) {
                    fade.style.opacity = 1;
                }
                  
                  
                if (fade.style.opacity > 0) {
                    fade.style.opacity -= 0.1;
                } 
                  
                else {
                    clearInterval(intervalID);
                }
                  
            }, 200);
        }

        function fade2() {
            var fadeout= document.getElementById("blank2");
              
            var intervalID1 = setInterval(function () {
                  
                if (!fadeout.style.opacity) {
                    fadeout.style.opacity = 1;
                }
                  
                  
                if (fadeout.style.opacity > 0) {
                    fadeout.style.opacity -= 0.1;
                } 
                  
                else {
                    clearInterval(intervalID1);
                }
                  
            }, 200);
        }

        function fade3() {
            var fading= document.getElementById("blank3");
              
            var intervalID2 = setInterval(function () {
                  
                if (!fading.style.opacity) {
                    fading.style.opacity = 1;
                }
                  
                  
                if (fading.style.opacity > 0) {
                    fading.style.opacity -= 0.1;
                } 
                  
                else {
                    clearInterval(intervalID2);
                }
                  
            }, 200);
        }


//user input

// if (user clikcs button) put into if else statement with fade function
document.getElementById("nombre25").addEventListener("click", isClicked);



function isClicked()
{
 username = prompt( 'Enter your name:');
 console.log(username);
 document.getElementById("name").innerHTML = username;
document.getElementById("nombre25");

//isTyped= true;
}

document.getElementById("blank4").addEventListener("click", fade4);

function fade4() {
    var lastfade= document.getElementById("blank4");
      
    var intervalID3 = setInterval(function () {
          
        if (!lastfade.style.opacity) {
            lastfade.style.opacity = 1;
        }
          
          
        if (lastfade.style.opacity > 0) {
            lastfade.style.opacity -= 0.1;
        } 
          
        else {
            clearInterval(intervalID3);
        }
          
    }, 200);
}


//random images on pg2

var foods = ["images/cookiecrisp.jpg", "images/krispykreme.jpg", "images/ricekrispy.jpg"];


var imageContainer;
  imageContainer = document.createElement('img');
  document.body.appendChild(imageContainer);
  imageContainer.style.width = '500px';
  //imageContainer.style.left = '1000px';
  //imageContainer.style.top = '1000px';
  

  document.getElementById("btn").addEventListener("click", randomizer);

function randomizer(){
    /*create a LOCAL variable that will hold a randomly generated integer
        to be used as the index value of your image array*/

        let random= Math.floor(Math.random() * 3);
        console.log(random);
        
    /*call the variable that is holding the img element and populate it with
        the randomly selected image from your array*/
    //    document.getElementByName(imageContainer).

    imageContainer.src = foods[random];
        
}






//the code graveyard


//window.stop(prompt);
//var username = prompt( 'Enter your name:');
//window.stop(username);

/*

if (isTyped == true) {
    console.log('in if statemetn');

    document.getElementById("blank4");
    function fade4() {
              var lastfade= document.getElementById("blank4");
                
              var intervalID3 = setInterval(function () {
                    
                  if (!lastfade.style.opacity) {
                      lastfade.style.opacity = 1;
                  }
                    
                    
                  if (lastfade.style.opacity > 0) {
                      lastfade.style.opacity -= 0.1;
                  } 
                    
                  else {
                      clearInterval(intervalID3);
                  }
                    
              }, 200);
          }
    
          console.log(fade4);
} else {

   var confirmation = confirm('are you sure');

    console.log(confirmation);

    
}
*/



//document.getElementById("blank1").addEventListener("click", fade, 1 );

/*
function fade(boxy){
   
    var opacity=0;
var intervalID=0;
fadeout(boxy,opacity,intervalID);
}

function fadeout(boxy,op,inter){
       setInterval(hide(boxy,op,inter), 400);
       console.log(boxy);
    }

function hide(boxy,op,inter){
       // var whichOne = "blank${box}";
      var body=document.getElementById("blank1");
      op =
Number(window.getComputedStyle(body).getPropertyValue("opacity"))

        if(op>0){
               op=op-0.3;
                       body.style.op=op
        }
        else{
            clearInterval(inter); 
        }
    } */


     /* var opacity1=0;
    var intervalID1=0;
    
    function fade1(){
           setInterval(hide1, 400);
           console.log("in fadeout fn");
        }
    
    function hide1(){
          var body=document.getElementById("blank1");
          opacity1 =
    Number(window.getComputedStyle(body).getPropertyValue("opacity1"))
    
            if(opacity1>0){
                   opacity1=opacity-0.3;
                           body.style.opacity=opacity1
            }
            else{
                clearInterval(intervalID1); 
            }
        } */