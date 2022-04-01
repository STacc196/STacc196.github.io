function helloWorld() {
    alert("Hello, world!");
}

function bigger() {
    document.getElementById("text").style.fontSize = "24px";
}

function boringBetty() {
    document.getElementById("text").style = "initial";
}

function fancySchmancy() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function moo() {
    var str =  document.getElementById("text").value;
    str = str.toUpperCase()
    var parts = str.split(".");
    str = parts.join(". -Moo");
    //let partsLength = parts.length;
    if (parts.length <= 1) {str = str+"-Moo"}
    document.getElementById("text").value = str;
}


