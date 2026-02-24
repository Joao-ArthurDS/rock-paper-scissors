let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice()
{
    let c_choice;
    let c_choice_num = Math.ceil(Math.random() * 3);

    if (c_choice_num == 1){
        c_choice = "rock";
    } else if (c_choice_num == 2){
      c_choice = "paper" ; 
    } else if (c_choice_num == 3){
       c_choice = "scissors" ;  
    }
    return c_choice;
}

function getHumanChoice()
{
    let h_choice = prompt("Rock paper or scissors?").toLowerCase();
    return h_choice;
}

function playRound(HumanChoice, ComputerChoice)
{
    if (HumanChoice == ComputerChoice){
        console.log("Draw");
    }
    else if (HumanChoice == "rock" && ComputerChoice == "scissors")
    {
        console.log("You win, Rock beats scissors!");
        HumanScore +=1;
    } 
    else if (HumanChoice == "paper" && ComputerChoice == "rock")
    {
        console.log("You win, Paper beats Rock!");
        HumanScore +=1;
    } 
    else if (HumanChoice == "scissors" && ComputerChoice == "paper")
    {
        console.log("You win, Scissors beats Paper!");
        HumanScore +=1;
    } 
    else
    {
        console.log(`You lose, ${ComputerChoice} beats ${HumanChoice}`);
        ComputerScore +=1;
    }   

}

function playGame(){
    for (let i = 0; i < 5; i++)
    {    
        const HumanSelection = getHumanChoice();
        const ComputerSelection = getComputerChoice();

        playRound(HumanSelection,ComputerSelection);
    }

}

playGame();
