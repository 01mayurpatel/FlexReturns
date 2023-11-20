const btn_a =document.getElementById('btn_a');
const btn_b =document.getElementById('btn_b');

const div_a = document.getElementById('div_a');

const div_b = document.getElementById('div_b');

btn_a.addEventListener('click',()=>{
  
  
    div_b.style.visibility = "hidden";
    btn_a.style.backgroundColor = "rgb(52, 104, 251)";
    btn_b.style.color = "rgb(52, 104, 251)";
    btn_b.style.backgroundColor = "white";
    btn_a.style.color = "white";
    
   
       
        div_b.style.display = "none";
        div_a.style.display="block";
        div_b.style.visibility="visible";
   

    

});
btn_b.addEventListener('click',()=>{
    div_b.style.display="block";
    div_a.style.display="none";
    btn_b.style.color="white";
    btn_b.style.backgroundColor="rgb(52, 104, 251)";
    btn_a.style.color="rgb(52, 104, 251)";
    btn_a.style.backgroundColor="white";
});