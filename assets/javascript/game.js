


//values for logging
var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = ''

//Array of hike-related words randomization
var words = [
    "trekking poles",
    "trailtown",
    "zero",
    "shoebies", 
    "tryhards",
    "yellowblaze",
    "blueblaze",
    "purists",
    "backpack",
    "ultralight",
    "townies",
    "hitchhike",
    "zoomies",
    "trailname",
    "rattlesnakes",
    "squirrels",
    "moose",
];


var word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    // The game loop
    while (remainingLetters > 0) {
    // Show the player their progress
     alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
    // The end of the game loop
 }
 // Show the answer and congratulate the player
 alert(answerArray.join(" "));
 alert("Good job! The answer was " + word);
