function convertTemp(){

let temp=document.getElementById("temp").value;

let unit=document.getElementById("unit").value;

let result=document.getElementById("result");

if(unit=="celsius"){

let f=(temp*9/5)+32;

result.innerHTML="Fahrenheit : "+f.toFixed(2)+" °F";

}

else{

let c=(temp-32)*5/9;

result.innerHTML="Celsius : "+c.toFixed(2)+" °C";

}

}