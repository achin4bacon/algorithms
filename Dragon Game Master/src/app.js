var input;

var hasBeenToWest;
var hasKey = false;
var hasStaff = false;
var hasBeenToWest = false;

var isEntrance = false;
var isWest = false;
var isNorth = false;
var isNorthEast = false;
var isNorthEastOne = false;
var isSouthEast = false;
var isNorthEastEast = false;
var isNorthNorthEast = false;

entranceMsg();

$("#ok").on("click", process);
$('#entryBox').on("keyup", function (evt) {
    if (evt.keyCode === 13) {
        process();
    }
});


function process() {
    if (isEntrance == true) {
        entrance();
    }
    else if (isWest == true) {
        westWing();
    }
    else if (isNorth == true) {
        northWing();
    }
    else if (isNorthEast == true) {
        northEastWing();
    }
    else if (isNorthNorthEast == true) {
        northNorthEast();
    }
    else if (isNorthEastOne == true) {
        northEastOne();
    }
    else if (isSouthEast == true) {
        southEast();
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }
}



function entranceMsg() {
    msg = "Dovakiin. So happy you're here. Welcome to Hyrule castle. Some of Queen Daenerys's dragons have gotten loose and are wreaking havoc in the castle. We need your help to subdue the dragons. There are two doors in this room. <br><br><br><br><br><center> Would you like to enter the door to the north or the door to the west? (Enter 'north' or 'west' and click 'continue')</center>";

    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isEntrance = true;
}


function entrance() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === "west") {
        westWingMsg();
    }
    else if (inputLC(input) === "north") {
        northWingMsg();
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }
}

function westWingMsg() {
    alert("What luck! You've arrived at the armory. You find a sword and a shield and pick them up. Go back to the entrance.");
    alert("The only other door is to the north. Go to the north door.");
    msg = " You enter the north door and...It's a dragon! Using your sword and shield, you are able to defeat the dragon! Giving a piteous moan, he lowers himself submissively onto the ground and allows the dragon keepers to shackle him back up. Now that he's gone, you notice an exit to the North of the room and another door leading to the east side of the castle. <br><br><br><br><center>Would you like to exit or continue your adventure? enter 'exit' or 'continue'</center>";

    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isWest = true;
}

function westWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === "exit") {
        alert("You made it outside the castle safe and sound. Congratulations! The end.");
    }
    else if (inputLC(input) === "continue") {
        northEastWingMsg();
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }
}

function northWingMsg() {
    hasBeenToWest == false;
    msg = "Ermergerd!! It's a dragon! You need a sword and a shield to subdue the dragon. Would you like to head back to the entrance or stay and fight? Enter 'entrance' or 'fight'";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorth = true;
}

function northWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) == "entrance") {
        alert("You're back in the entrance. The only other room is to the west.")
        alert("Let's see what's in the west room.")
        westWingMsg();
    }
    else {
        alert("The dragon killed you. Next time, make sure you get your items before you try to fight him. Go back to the beginning and try again.")
        entranceMsg();
    }
}

function northEastWingMsg() {
    msg = "You've entered the Northeast Wing of Hyrule castle. There are three doors here. Would you like to go north, south, or east? <br><br><br><br><br><center>(enter 'north', 'south', or 'east')";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorthEast = true;
}

function northEastWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === 'north') {
        northNorthEastMsg();
    }
    else if (inputLC(input) === 'east') {
        northEastOneMsg();
    }
    else if (inputLC(input) === 'south') {
        southEastMsg();
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }
};

function northNorthEastMsg() {
    hasStaff = true;
    msg = "Wow, COOL! You have found the Staff of the Dragonborn! This is sure to come in handy. Let's head back to the Northeast Wing. Type 'continue' to continue.";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorthNorthEast = true;
}

function northNorthEast() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === 'continue') {
        northEastWingMsg();
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }

}

function northEastOneMsg() {
    if (hasKey === false) {
        alert("Uh oh! Looks like this door is locked. The key must be around here somewhere! See if you can find it.")
        setFlagsToFalse();
        northEastWingMsg();

    }
    else if (hasKey === true) {
        msg = "You unlocked the door! Inside is another dragon. But...wait...it's just a little baby dragon! Aww, he's cute! Do you want to keep him as a pet? Enter 'yes' to keep him or 'no' to alert the guards of his presence.";
        $("#questQuestions").html(msg);
        setFlagsToFalse();
        isNorthEastOne = true;
    }
    else {
        alert("You did something wrong! You are a disgrace to the Dragonborn! Game over! Start again! Follow the rules!")
    }
}
function northEastOne() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === 'yes') {
        alert("You keep the baby dragon and decide to name him Norbert. Exit this room to the east.")
        northEastEastMsg();
    }
    else {
        alert("You tell the closest guard about the baby dragon, and he takes him away. You exit the room to the east.")
        northEastEastMsg();
    }
}

function southEastMsg() {
    if (hasStaff === false) {
        msg = "You've found another dragon! Trogdor roars and shakes a big, beefy arm in your general direction! He's much bigger than the first dragon--the sword and shield alone shall not suffice!Would you like to try to fight Trogdor? Answer 'yes' or 'no'";
        $("#questQuestions").html(msg);
        setFlagsToFalse();
        isSouthEast = true;
    }
    else {
        alert("You've found another dragon! Trogdor roars and shakes a big, beefy arm in your general direction! He's much bigger than the first dragon--the sword and shield alone shall not suffice! You aim the Staff of the Dragonborn at Trogdor. 'You will not burninate me today!' you shout valiantly. The staff trembles with immense power, and from it erupts a silvery spray which surrounds Trogdor and renders him helpless. The dragon keepers come to take him away, and, as they leave, you find a key! The only door here leads back into the Northeast Wing. Exit now.");
        hasKey = true;
        setFlagsToFalse();
        isSouthEast = true;
        northEastWingMsg();
    }
}

function southEast() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (hasStaff === false && inputLC(input) === 'yes') {
        alert("I thought we'd already been over this! You shouldn't fight dragons without being properly equipped. Trogdor burninates you and you die. Resume your journey at the Northeast Wing.");
        hasKey = true;
        northEastWingMsg();
    }
    else if (hasStaff === false && inputLC(input) === 'no') {
        alert("You hastily make your way back to the door you entered through and return to the Northeast Wing.");
        hasKey = false;
        northEastWingMsg();
    }
    else {
        alert("C'mon! Be brave! Let's fight him.")
    }
}

function northEastEastMsg() {
    msg = "Princess Zelda is waiting for you. 'Oh good!' she exclaims, 'you were able to subdue my cousin's dragons! Dany is so irresponsible sometimes! Please, take this gem as my token of gratitude.' You receive a mysterious beautiful gem. 'Please come back to visit whenever you'd like--I'm sure those unruly dragons will cause more trouble eventually!' You assure Zelda that you will be back and exit out of a door located to the east. <br><br><br><br><br><center>You made it! Congratulations, and thanks for playing the game!";
    $("#questQuestions").html(msg);

}

function inputLC(input) {
    return input.toLowerCase();
}

function setFlagsToFalse() {
    isEntrance = false;
    isWest = false;
    isNorth = false;
    isNorthEast = false;
    isNorthEastOne = false;
    isSouthEast = false;
    isNorthEastEast = false;
    isNorthNorthEast = false;
}

            ////                    if (inputLC(input) === 'north') 
