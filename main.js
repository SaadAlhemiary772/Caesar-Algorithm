

let lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i"
    , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"
    , "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let plainText = [];
let cipherText = [];
let key;

var wrong = document.querySelector(".wrong");
var wrong1 = document.querySelector(".wrong1");
wrong1.setAttribute("hidden", true);
wrong.setAttribute("hidden", true);
document.getElementById("encrypt").onclick = function () {
    var checkText = false;
    var checkKey = false;
    plainText = [];
    cipherText = [];
    key = null;

    if (document.getElementById("enteredText").value == "") {
        wrong1.removeAttribute("hidden");
    }
    else {
        plainText = document.getElementById("enteredText").value;
        checkText = true;
        wrong1.setAttribute("hidden", true);
    }

    if (document.getElementById("keyinput").value == "") {
        wrong.removeAttribute("hidden");
    }
    else {
        key = document.getElementById("keyinput").value;
        checkKey = true;
        wrong.setAttribute("hidden", true);
    }

    if (checkKey == true && checkText == true) {
        encryption();
    }
};

document.getElementById("decrypt").onclick = function () {
    var checkText = false;
    var checkKey = false;
    plainText = [];
    cipherText = [];
    key = null;
    if (document.getElementById("enteredText").value == "") {
        wrong1.removeAttribute("hidden");
    }
    else {
        cipherText = document.getElementById("enteredText").value;
        checkText = true;

        wrong1.setAttribute("hidden", true);
    }

    if (document.getElementById("keyinput").value == "") {
        wrong.removeAttribute("hidden");
    }
    else {
        key = document.getElementById("keyinput").value;
        checkKey = true;
        wrong.setAttribute("hidden", true);
    }

    if (checkKey == true && checkText == true) {
        decryption();
    }
};

function encryption() {
    for (var i = 0; i < plainText.length; i++) {
        let check = false;
        for (var j = 0; j < lowerLetter.length; j++) {
            if (plainText[i] == lowerLetter[j]) {
                var loc = ((j + parseInt(key)) % 26);
                if (loc < 0)
                    loc = loc + 26;
                cipherText[i] = ((lowerLetter[loc]));
                check = true;
            }
            else if (!check) {
                for (var a = 0; a < upperLetter.length; a++) {
                    if (plainText[i] == upperLetter[a]) {
                        var loc = ((a + parseInt(key)) % 26);
                        if (loc < 0)
                            loc = loc + 26;
                        cipherText[i] = ((upperLetter[loc]));

                    }
                }
            }
            if(!check)
            cipherText[i]=plainText[i];

        }
    }
    document.getElementById("outText").value = cipherText.join("");
};

function decryption() {
    for (var i = 0; i < cipherText.length; i++) {
        let check = false;
        for (var j = 0; j < lowerLetter.length; j++) {
            if (cipherText[i] == lowerLetter[j]) {
                var loc = ((j - parseInt(key)) % 26);
                if (loc < 0)
                    loc = 26 + loc;
                plainText[i] = ((lowerLetter[loc]));
                check = true;
            }
            else if (!check) {
                for (var a = 0; a < upperLetter.length; a++) {
                    if (cipherText[i] == upperLetter[a]) {
                        var loc = ((a - parseInt(key)) % 26);
                        if (loc < 0)
                            loc = 26 + loc;
                        plainText[i] = ((upperLetter[loc]));
                    }
                }
            }
            if(!check)
            plainText[i]=cipherText[i];

        }
    }
    document.getElementById("outText").value = plainText.join("");
};
