const btn = document.querySelector("#btn");
const username= document.getElementById('username')
const password= document.getElementById('password')

function myFunction() {
    window.open("http://127.0.0.1:5500/gfghealthcare/afterlogin.html","_self");
}

function myFunction2(){
    username.value=="Invalid user."
}


function check(){
 btn.addEventListener("click", function(){
    if (username.value == "aditya"  && password.value=="bansal"){
      myFunction();
    } 
    else if (username.value == "sammyak"  && password.value=="jain"){
        myFunction();
      }

    else if (username.value == "maan"  && password.value=="pratap"){
        myFunction();
      }

      else{

      }
  }
);
}