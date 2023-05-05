// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1
// count of attempts
var attempts = 0
// until hit
var player_name = localStorage.getItem("player_name")
// function for the number sent by the user
function submit(){
    guess = document.getElementById("guessField").value;
    if(guess == y){
        attempts += 1;
        console.log("Attempts: " + attempts);
        alert("Congratulations " + player_name + "!!!!! You guessed it right in " + attempts + " attempts!");
    }
    else if (guess > y){
        attempts += 1;
        console.log("Attempts: " + attempts);
        alert("Try a smaller number!");
    }
    else{
        attempts += 1;
        console.log("Attempts: " + attempts);
        alert("Try a bigger number!");
    }
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
    document.getElementById("guessField").value = ""
    attempts = 0
    console.log("Attempts: " + attempts);
}