let count=0;

let countEL=document.getElementById("count-el");

function increment(){
    count=count+1;
    countEL.innerText=count;
}

function save(){

    let countStr=count + "-";
    let message=document.getElementById("message-el")
    message.textContent+= countStr;
    count=0;

}

