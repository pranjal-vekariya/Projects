let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]

}

const drawgame = () => {
    msg.innerText = "game was draw. paly again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinnner = (userwin ,userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore ;
        
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor = "green"
    }else{
        compscore++;
        compScorepara.innerText = compscore;
    
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const palygame = (userchoice) => {
    

    //generate comuter choice;
    const compchoice = gencompchoice();
   

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userwin = compchoice === "paper" ? false : true;
        }else{
            if(userchoice === "paper"){
            //rock, scissors
            userwin = compchoice === "scissors" ? false : true;
            }else{
                //rock , paper
                userwin = compchoice === "rock" ? false : true;
            }
            showWinnner(userwin, userchoice, compchoice)
        }
    }
}

choices.forEach((choice) =>{
    
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
       
        palygame(userchoice);
    })
});
