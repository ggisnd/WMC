"use strict";

var password = document.querySelector('.password');
var error = document.querySelector('.error-message');
var padlock = document.querySelector('.padlock');
var arrow = document.querySelector('.arrow-icon');
var input = document.querySelector('.input-icon');
var element = document.getElementById('name');
var pass = "tpwpfrnl";

password.addEventListener('keypress', function(e){
var key = e.which || e.keyCode;
if(key === 13){
  if(password.value != ""){
    if(password.value != pass){
      error.classList.add('show');
      padlock.classList.remove('unlock');
      addError();
    }else{
      error.classList.remove('show');
      unlock();
    }
  }
}
});
password.addEventListener('keyup', function(){
if(password.value == ""){
  error.classList.remove('show');
  padlock.classList.remove('unlock');
  arrow.classList.remove('show');
  addError();
}else{
  arrow.classList.add('show');
}
});
arrow.addEventListener('click', function(){
  if(password.value != pass){
    error.classList.add('show');
    padlock.classList.remove('unlock');
    addError();
  }else{
    error.classList.remove('show');
    unlock();
  }
},false);

function unlock(){
  padlock.classList.add('unlock');
  input.classList.add('unlock');
  setTimeout(function(){
    padlock.classList.add('hide');
    setTimeout(function(){
      // If the password is correct
      window.location.href = '../sites/main.html';
    }, 900);
  }, 600);
}
