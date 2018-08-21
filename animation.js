window.onload = function() {
     var posX = 0;
     var posY = 0;
     var c_pos = 0;
     var geschwindigkeit = 8;
    //our box element
    var box = document.getElementById("box");
    var container = document.getElementById ("container");

/*die HTML Elemente "div-container" und "div-box" werden
Variablen zugewiesen*/

    var t = setInterval(move, 50);

    /*durch setInterval wird die in der Klammer beschrieben
    Funktion alel angegebenen Millisekunden(in diesem Fall 50ms)
    abgespielt. setInterval wird eine Variable zugeordnet,
    da so, der Interval beendet werden kann- s.u.*/

    function move() {
        if(posY >= 150) {
            clearInterval(t);
//Interval der Varianble "t" wird gestoppt
        }
        else {
            posX += 1;
            posY += 1;
            c_pos += geschwindigkeit;
            container.style.left = c_pos+'px';
  //der Abstand zum linken Rand wird bestimmt
            box.style.left = posX+'px';
  //der Abstand zum linken Rand des Containers wird bestimmt
            box.style.top = posY+'px';
  //der Abstand zur Decke des Containers wird bestimmt
        }
    }
};
//Funktion die bei "onmouseover" aufgerufen wird
function gibText(){

  var element = document.createElement("p");
//neues HTML Element des Typen "p" wird erstellt
  var main = document.getElementById("bereich");

  main.appendChild(element);
//die div-Box "adoptiert" das neue Element
  var text = document.createTextNode("Kalle");
//ein Text wird der Variable "text" zugeordnet
  element.appendChild(text);
//der Text wird dem neuen Textparagrapgen hinzugefügt
}


function deleteText(){



}
