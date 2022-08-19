/*ideen:
- hinzufügen            OK
- entfernen             
- enter                 
- Text bearbeiten       
- checkbox darkmode     


- git
- responsiv mal testen?wwwwww
*/

var hinzu = document.getElementById("hinzu");
var liste = document.getElementById("liste");


var entf = document.getElementById("entf");




hinzu.addEventListener('click', function () {hinzufuegen()});
//entf.addEventListener('click', function () { entfernen() });


function hinzufuegen() {


    if (getInput() != "") {

        
        var punkt = document.createElement('li');
        var button = document.createElement('button')
       
            var zahl = document.getElementById("liste").children.length;
            liste.appendChild(punkt);
            console.log(zahl);
            if(zahl==0){
                zahl+1;
            }else{
                zahl+1; //sollte auf zwei da delete element dazukommt
            }
            liste.children[zahl].innerHTML = input.value;
            //liste.children[zahl].classList.add(zahl);
            
    
            const w =liste.children[zahl];
            console.log(w);

        //  liste.appendChild(button); <button id="entf">entfernen</button>
    }



}

function entfernen() {



}

function getInput() {

    var input = document.getElementById("input").value;
    console.log(input);

    return(input);
}