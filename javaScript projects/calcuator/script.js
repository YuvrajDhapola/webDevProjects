let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "AC"){
            string = ""
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "x"){
            string.screenView = string.screenView.value.slice(0, -1);
        }else{
            console.log(e.target)
            string = string +  e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    
    })
})