window.onload = function(){
  var btn1 = document.getElementById("button1");
  var user = document.getElementById("name").value;
  var txt = document.getElementById("demo");
  
  btn1.addEventListener ("click", function(){
    txt.innerHTML = user + "hola" 
  })
}