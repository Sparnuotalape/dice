//document.querySelector('h1').style.color = "yellow";

let numbers = [1, 2, 3, 4, 5, 6];

function randomNumber1(numbers) {
    const randomPosition = Math.floor(Math.random() * numbers.length);
    return numbers[randomPosition];
}

function rollDice() {
    // Get random values for the dice
    const dieValue1 = randomNumber1(numbers);
    console.log(dieValue1);
    const dieValue2 = randomNumber1(numbers);
    console.log(dieValue2);
    
    // Get the image elements
    const diceImage1 = document.getElementById("dice1");
    const diceImage2 = document.getElementById("dice2");

    // Change dice images using template literals (much cleaner!)
    diceImage1.src = `./images/dice${dieValue1}.png`;
    diceImage2.src = `./images/dice${dieValue2}.png`;

    //testing for numvers and pic if they are correct
    console.log("Die 1 value:", dieValue1);
    console.log("Die 1 image path:", `./images/dice${dieValue1}.png`);
    console.log("Die 2 value:", dieValue2);
    console.log("Die 2 image path:", `./images/dice${dieValue2}.png`);
    
    // Update alt text for accessibility
    diceImage1.alt = `Dice showing ${dieValue1}`;
    diceImage2.alt = `Dice showing ${dieValue2}`;
    
    // Determine winner (new feature)
    let resultText = "";
    if (dieValue1 > dieValue2) {
        resultText = "🚩 Player 1 Wins!";
    } else if (dieValue2 > dieValue1) {
        resultText = "Player 2 Wins! 🚩";
    } else {
        resultText = "Draw!";
    }
    
    document.querySelector('h1').textContent = resultText;
}


// Roll dice when the page loads
rollDice();
