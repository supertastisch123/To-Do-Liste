/*ideen:
- git
- hinzufügen
- entfernen -->einfach das child davor?
- Text bearbeiten
- checkbox darkmode
- responsiv mal testen?ww
*/

var hinzu = document.getElementById("hinzu");
var liste = document.getElementById("liste");
var entf = document.getElementById("entf");




hinzu.addEventListener('click', function() { hinzufuegen() });
entf.addEventListener('click', function(){ entfernen() })


function hinzufuegen() {

    getInput();

    if (input != null)
    {
        var kind = document.createElement('li');
        
        liste.appendChild(kind);
    }



}

function entfernen(){



}

function getInput(){

    var input = document.getElementById("input").value;
    console.log(input);

}