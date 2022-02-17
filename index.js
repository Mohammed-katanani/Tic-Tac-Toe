let bloocks=Array.from(document.getElementsByClassName("bloock"))
let order =document.querySelector(".order");
let X=document.querySelector(".game .head .X span")
let O=document.querySelector(".game .head .O span")
onClick="X";
caunt=0;

bloocks.forEach(b=> b.addEventListener("click",()=>{

    if(onClick=="X"&&b.getAttribute("onClick")=="")//b.inenerHTML=''
    {
        b.innerHTML=onClick;
        b.setAttribute("onClick",onClick);
        onClick="O";
        order.innerHTML="O";
    }
    else if(onClick=="O"&&b.getAttribute("onClick")==""){ 
        b.innerHTML=onClick
        b.setAttribute("onClick",onClick);
        onClick="X";
        order.innerHTML="X";
    }
if(checkIfTrue()||checkIfFulse()){
    let bloocks=Array.from(document.getElementsByClassName("bloock"))
    setTimeout(()=>    bloocks.forEach(b=>{
        b.innerHTML=""
        b.setAttribute("onClick","")})
        ,700)

}
}

))
function checkIfTrue(){
let bloocks=Array.from(document.getElementsByClassName("bloock"))

let b0=bloocks[0].getAttribute("onClick");
let b1=bloocks[1].getAttribute("onClick");
let b2=bloocks[2].getAttribute("onClick");
let b3=bloocks[3].getAttribute("onClick");
let b4=bloocks[4].getAttribute("onClick");
let b5=bloocks[5].getAttribute("onClick");
let b6=bloocks[6].getAttribute("onClick");
let b7=bloocks[7].getAttribute("onClick");
let b8=bloocks[8].getAttribute("onClick");
console.log(b0)
    if(b0==b1&&b1==b2&&b2!=""){
        b0=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }
    else if(b3==b4&&b4==b5&&b5!=""){
        b3=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }
    else if(b6==b7&&b7==b8&&b8!=""){
        b6=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }else if(b0==b3&&b3==b6&&b6!=""){
        b0=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }else if(b1==b4&&b4==b7&&b7!=""){
        b1=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }else if(b2==b5&&b5==b8&&b8!=""){
        b2=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }else if(b2==b4&&b4==b6&&b6!=""){
        b2=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }else if(b0==b4&&b4==b8&&b8!=""){
        b0=="X"?X.innerHTML++:O.innerHTML++
        return true;
    }
}
function checkIfFulse(){
    caunt=0
    bloocks.forEach(b=>{
        if(b.getAttribute("onClick")!="") caunt++  
        
    })
   if(caunt==9)return true 
   else return false
}
