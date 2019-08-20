


//values for logging
var wins = 0;
var losses = 0;
var guesses = 10;
var guessed = ''

//Array of hike-related words randomization
var options = [
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

//To generate random arrangement of words
var word = options[Math.floor(Math.random() * options.length)];

//Array to store guesses
var answerArray = [];

//answer fill
function onStart () {

    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

    s=answerArray.join("  ")
    document.getElementById("answer").outerHTML = s;

var lettersLeft = word.length;
}

function Guess () {
    var letter=document.getElementById("letter").value;

    if (letter.length >0)
    {
            for (var i=0; i < word.length; i++)
             {
                 if (word[i] === letter)
                {
                 answerArray[i] = letter;
                }
            count++;
            document.getElementById("guesses").innerHTML = "Number of Guesses Remaining: " = count;
            document.getElementById("answer").outerHTML = answerArray.join("");
             }


    }
    if (count>

}

