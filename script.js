let input=document.getElementById('inputbox');
let buttons=document.getElementsByClassName("buttons");
let body=document.querySelector("body");
let calculator=document.querySelector(".calculator");
let nol=document.getElementsByClassName("nol");
let equal=document.getElementsByClassName("equal");
let string="";
let arr = Array.from(buttons);
arr.forEach(button =>
{
    button.addEventListener('click',(e) =>
    {
        if(e.target.innerHTML=="="){
            string = eval(string);
            input.value=string;
            
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }


        else{
            string += e.target.innerHTML;
            input.value=string;
            }
            
        
    })
})
//light mode

let switchbtn = document.querySelector(".switch");
//let switchlit = document.querySelector(".switchlight");
switchbtn.addEventListener("click",()=>{

    body.classList.toggle("light");
    calculator.classList.toggle("lightcal");
    for(let button of buttons){
        button.classList.toggle("lightbut");
    }
    for(let butt of nol){
        butt.classList.toggle("ol");
    }
    for(let e of equal){
        e.classList.toggle("el");
    }
    input.classList.toggle("lightinput");

     //for(let sl of switchbtn){
       switchbtn.classList.toggle("switchlight");
    
    
   
})

