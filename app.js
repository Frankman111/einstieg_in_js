//Einfache Funktionen

function hallo(){
    document.write("<p>Hallo Welt</p>")
}

hallo(); // Aufruf der Funktion

// Funktionen mit Parameter 

function ausgeben(land, stadt){
    document.write(`Die Hauptstadt von ${land} ist ${stadt}<br>`);
}

const a = "Spanien", b = "Madrid"

ausgeben(a,b)

ausgeben("Österreich", "Wien")