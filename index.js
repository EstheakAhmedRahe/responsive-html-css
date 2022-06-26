let btn1= document.getElementById('btn1');
let input1= document.getElementById('input1');
let input2= document.getElementById('input2');
let input3= document.getElementById('input3');
let input4= document.getElementById('input4');
let input5= document.getElementById('input5');


let span5= document.getElementById('span5');
const nam=/([a-zA-Z_]){3,5}$/
const mobile=/(88|88-|\+88-|\+88)?01[3-9]{1}[0-9]{2}-?[0-9]{6}$/
const email=/[a-zA-Z]{1}[a-zA-Z0-9_]@gmail.com$/
btn1.addEventListener('click',function(){
     
      span5.innerHTML=input1.value;
      rahe();
      rahe2();
      rahe3();
      rahe4();
      
})
function rahe(){
       if(input1.value.match(nam)){
             alert(" Name valid");
       }
       else {
            alert(" Name Invalid");
       }
}

function rahe2(){
    
    if(input2.value.match(mobile)){
        alert(`${input1.value} Mobile Number valid`);
     }
    else {
        alert(`${input1.value} Mobile Number Invalid`);
     } 
}

function rahe3(){
    if(input3.value.match(email)){
        alert(`${input1.value} Email valid`);
  }
  else {
    alert(`${input1.value} Email Invalid`);
  }
}

function rahe4(){
             
    if(input4.value.length>=6){
        alert(`${input1.value} Password valid`);
  }  
  else if( input4.value.length<6) {
    alert(`${input1.value} password invalid`);
  }
}

