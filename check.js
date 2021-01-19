// New notation!

function addOne(n) {
    return n + 1;
}

var addOne = n => n + 1;

function swap(a, b) {
    return (b, a);
}

var swap = (a, b) => (b, a);

function manyThings() {
    console.log("Hey there...!");
    console.log(addOne(5));
}

var manyThings = () => {
    console.log("Hey there...!");
    console.log(addOne(5));
}

// Here's the good stuff...

var hashCode = (str) => {
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
};

// Oh no! Someone could just make this function return true always!
var isCorrect = (str) => hashCode(str) === -20953309;
var submitAllowed = true;

// Bear in mind: this is a terrible way to write a real website! Look at
// how much code is required for a simple password form. It's a mess!
function checkPassword() {
    var inputElem = document.querySelector("#password");
    var supportElem = document.querySelector("#support");
    var buttonElem = document.querySelector("#button");

    if (!submitAllowed) {
        supportElem.innerHTML = "I told you to wait! Hold on!";
        return false;
    }

    var password = inputElem.value;

    // Props to you if you can refactor this code to be less repetitive!
    if (isCorrect(password)) {
        inputElem.classList.remove("~neutral", "~critical");
        supportElem.classList.remove("~neutral", "~critical");
        inputElem.classList.add("~positive");
        supportElem.classList.add("~positive");
        supportElem.innerHTML = "Well done! You guessed the right password!";
    } else {
        inputElem.classList.remove("~neutral", "~positive");
        supportElem.classList.remove("~neutral", "~positive");
        inputElem.classList.add("~critical");
        supportElem.classList.add("~critical");
        supportElem.innerHTML = "Incorrect! Please wait before trying again.";

        buttonElem.setAttribute("disabled", "true");
        buttonElem.innerHTML = "Wait!";
        submitAllowed = false;

        setTimeout(() => {
            buttonElem.removeAttribute("disabled");
            submitAllowed = true;
            buttonElem.innerHTML = "Log In";
        }, 2000);
    }
    inputElem.value = "";

    return false;
}