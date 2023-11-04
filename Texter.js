



function PLAYGAME() {
    
    alert("sus");
}
function getTheIncident(keyWord, text) {
    showTheDiv();
    console.log(keyWord + "\t" + text);

    var e = document.getElementById('textResult');
    e.innerHTML = text.replace('\^', '\'');
}