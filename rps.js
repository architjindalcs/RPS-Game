var pc=document.querySelector(".player img");
var cc=document.querySelector(".computer img");
var scorep=document.querySelector(".scorep h1");
var scorec=document.querySelector(".scorec h1");
var options=document.querySelectorAll(".options img")
var button=document.querySelector(".change button")
button.addEventListener("click",function()
{
    console.log("Button is clicked!!");
    document.querySelector("body").classList.toggle("changeRing");
})

function helper(playerChoice,playerScore,computerScore)
{
    computerChoice=Math.floor(3*Math.random());
    if(playerChoice==0)
    {
        pc.setAttribute("src","rock.png");
    }
    else if(playerChoice==1)
    {
        pc.setAttribute("src","paper.png");
    }
    else
    {
        pc.setAttribute("src","scissor.png");
    }
    if(computerChoice==0)
    {
        cc.setAttribute("src","rock1.png");
    }
    else if(computerChoice==1)
    {
        cc.setAttribute("src","paper1.png")
    }
    else
    {
        cc.setAttribute("src","scissor1.png")
    }
    if(playerChoice==0)
    {
        console.log("Player 1: Rock");
    }
    else if(playerChoice==1)
    {
        console.log("Player 1: Paper");
    }
    else if(playerChoice==2)
    {
        console.log("Player 2: Scissors");
    }
    if(computerChoice==0)
    {
        console.log("computerChoice: Rock");
    }
    else if(computerChoice==1)
    {
        console.log("computerChoice: Paper");
    }
    else if(computerChoice==2)
    {
        console.log("computerChoice: Scissors");
    }
    if(playerChoice==0 && computerChoice==2)
    {
        playerScore++;
    }
    else if(playerChoice==0 && computerChoice==1)
    {
        computerScore++;
    }
    else if(playerChoice==1 && computerChoice==0)
    {
        playerScore++;
    }
    else if(playerChoice==1 && computerChoice==2)
    {
        computerScore++;
    }
    else if(playerChoice==2 && computerChoice==0)
    {
        computerScore++;
    }
    else if(playerChoice==2 && computerChoice==1)
    {
        playerScore++;
    }
    var ans=[];
    ans.push(playerScore);
    ans.push(computerScore);
    return ans;
}
function winner(win)
{
    scorep.textContent="Winner: ";
    scorep.style.fontSize="60px";
    scorec.textContent=""+win;
    scorec.style.fontSize="60px";
    scorec.style.marginLeft="0px";
    for(var i=0;i<3;i++)
    {
        options[i].style.visibility="hidden";
    }
    console.log(win+" wins the game!!");
}
console.log("Script loaded");
name=prompt("Enter your name: ");
maxscore=prompt("Maximum Score: ");
var playerScore=0;
var computerScore=0;
var rock=document.querySelector(".rock");
var paper=document.querySelector(".paper");
var scissor=document.querySelector(".scissor");
var playerChoice;
scorep.textContent="0";
scorec.textContent="0";
rock.addEventListener("click",function()
{
   // console.log("Rock is clicked");
    playerChoice=0;
    var newScore=helper(playerChoice,playerScore,computerScore);
    playerScore=newScore[0];
    computerScore=newScore[1];
    scorep.textContent=""+playerScore;
    scorec.textContent=""+computerScore;
    if(playerScore>computerScore)
    {
        scorep.style.color="green";
        scorec.style.color="red";
    }
    else if(playerScore<computerScore)
    {
        scorep.style.color="red";
        scorec.style.color="green";
    }
    else
    {
        scorep.style.color="black";
        scorec.style.color="black";
    }
   console.log(playerScore,computerScore);
    if(computerScore==maxscore)
    {
        winner("Computer");
    }
    else if(playerScore==maxscore)
    {
        winner(name);
    }
})
paper.addEventListener("click",function()
{
    //console.log("Paper is clicked");
    playerChoice=1;
    var newScore=helper(playerChoice,playerScore,computerScore);
    playerScore=newScore[0];
    computerScore=newScore[1];
    scorep.textContent=""+playerScore;
    scorec.textContent=""+computerScore;
    if(playerScore>computerScore)
    {
        scorep.style.color="green";
        scorec.style.color="red";
    }
    else if(playerScore<computerScore)
    {
        scorep.style.color="red";
        scorec.style.color="green";
    }
    else
    {
        scorep.style.color="black";
        scorec.style.color="black";
    }
    console.log(playerScore,computerScore);
    if(computerScore==maxscore)
    {
        winner("Computer");
    }
    else if(playerScore==maxscore)
    {
        winner(name);
    }
})
scissor.addEventListener("click",function()
{
    //console.log("Scissor is clicked");
    playerChoice=2;
    var newScore=helper(playerChoice,playerScore,computerScore);
    playerScore=newScore[0];
    computerScore=newScore[1];
    scorep.textContent=""+playerScore;
    scorec.textContent=""+computerScore;
    if(playerScore>computerScore)
    {
        scorep.style.color="green";
        scorec.style.color="red";
    }
    else if(playerScore<computerScore)
    {
        scorep.style.color="red";
        scorec.style.color="green";
    }
    else
    {
        scorep.style.color="black";
        scorec.style.color="black";
    }
    console.log(playerScore,computerScore);
    if(computerScore==maxscore)
    {
        winner("Computer");
    }
    else if(playerScore==maxscore)
    {
        winner(name);
    }
})

   