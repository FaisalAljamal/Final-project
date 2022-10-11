/*function getHistory() {
    return document.getElementsByid("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}*/

function backFunction() {
    var y = document.getElementById("history-value").innerHTML;

    document.getElementById("history-value").innerHTML = y.substring(0, y.length - 1);
    document.getElementById("output-value").innerHTML = "";
    //  var u = y.length--;
    //  y.length = u;
    // document.getElementById("history-value").innerHTML = y;
    // arr = "y".split("y");
    //arr.pop();
    //  arr = arr.join("y");
    // document.getElementById("history-value").innerHTML = y;
    //  var val = y.substring(0, y, length - 1);
    //document.getElementById("history-value").innerHTML = val;
}

function clearFunction() {
    document.getElementById("history-value").innerHTML = "";
    document.getElementById("output-value").innerHTML = "";
}

function pmFunction() {
    var q = document.getElementById("output-value").innerHTML;
    if (q != 0) {
        var w = -1 * q;
        document.getElementById("history-value").innerHTML = w;
        document.getElementById("output-value").innerHTML = w;
    }
}

function divdFunction() {
    document.getElementById("history-value").innerHTML += "/";
}

function sevFunction() {
    document.getElementById("history-value").innerHTML += "7";
}

function eigFunction() {
    document.getElementById("history-value").innerHTML += "8";
}

function ninFunction() {
    document.getElementById("history-value").innerHTML += "9";
}

function mulFunction() {
    document.getElementById("history-value").innerHTML += "*";
}

function fouFunction() {
    document.getElementById("history-value").innerHTML += "4";
}

function fivFunction() {
    document.getElementById("history-value").innerHTML += "5";
}

function sixFunction() {
    document.getElementById("history-value").innerHTML += "6";
}

function minuFunction() {
    document.getElementById("history-value").innerHTML += "-";
}

function oneFunction() {
    document.getElementById("history-value").innerHTML += "1";
}

function twoFunction() {
    document.getElementById("history-value").innerHTML += "2";
}

function threFunction() {
    document.getElementById("history-value").innerHTML += "3";
}

function pluFunction() {
    document.getElementById("history-value").innerHTML += "+";
}

function modeFunction() {
    document.getElementById("history-value").innerHTML += "%";
}

function zeroFunction() {
    document.getElementById("history-value").innerHTML += "0";
}

function dotFunction() {
    document.getElementById("history-value").innerHTML += ".";
}

function equalFunction() {
    var x = document.getElementById("history-value").textContent;
    var result = eval(x);
    document.getElementById("output-value").innerHTML = result;
    document.getElementById("history-value").innerHTML = result;
}