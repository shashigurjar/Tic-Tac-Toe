let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newbtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turn0=true;
let win=[
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,4,6], [2,5,8],
    [3,4,5], [6,7,8],
]

const resetgame=()=>{
    turn0=true;
    enable();
    msgcontainer.classList.add("hide")

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O"
            turn0=false;
        } else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations Winner is "${winner}"`;
    msgcontainer.classList.remove("hide")
    disableboxes();
}
const checkwinner=()=>{
        for(let pattern of win){
            let val1=boxes[pattern[0]].innerText
            let val2=boxes[pattern[1]].innerText
            let val3=boxes[pattern[2]].innerText
        if(val1!="" &&val2!="" &&val3!=""){
            if(val1===val2&&val2===val3){
                showwinner(val1);
            }
            
        }
        
    }
}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
