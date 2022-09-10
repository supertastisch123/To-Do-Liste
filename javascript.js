/*ideen:
- hinzufügen            OK
- entfernen             OK
- enter                 OK
- Text bearbeiten       
  mit doppelclick?       
- checkbox darkmode
- Datenbank?


- git
- responsiv mal testen?wwwwww
*/

var hinzu = document.getElementById("hinzu");
var liste = document.getElementById("liste");
var input = document.getElementById("input");


hinzu.addEventListener('click', function () { hinzufuegen() });
input.addEventListener("keypress", function(e){ enter(e)});

var laenge= getLength();

var entf = document.getElementById("entf");
 
entf.addEventListener('click', function (e) { entfernen(e) });






function hinzufuegen() {

    var input = getInput();

    if (input != "") {

        var punkt = document.createElement('li');
        var button = document.createElement('button')


        //Punkt zur Liste hinzugefügt

        var zahl = getLength();

        liste.appendChild(punkt);
        zahl + 1;
        liste.children[zahl].innerHTML = input;
        // Falls man eine Klasse braucht: liste.children[zahl].classList.add(zahl);


        //Button "entfernen"

        var entfLength = getLength();

        liste.appendChild(button);
        liste.children[entfLength].innerHTML = "entfernen";
        liste.children[entfLength].setAttribute("id","entf");
        liste.children[entfLength].setAttribute("onclick","entfernen(this)"); //???????????????
    }



}


function entfernen(e) {
    var ent= e;
    var punkt= e.previousElementSibling;
    liste.removeChild(ent);
    liste.removeChild(punkt);

}


function getInput() {

    var input = document.getElementById("input").value;
    console.log(input);

    return (input);
}


function getLength() {

    var zahl = document.getElementById("liste").children.length;
    console.log(zahl);
    return (zahl);
}



function enter(e){

if (e.key== "Enter")
    hinzufuegen();


}