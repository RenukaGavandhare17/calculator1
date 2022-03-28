function clearScreen(){
  document.getElementById("result").value="";

}


function Renuka(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
     res.value = "";
  }
   res.value += value;
}
