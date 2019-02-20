//Fonction Pyramide Simple
function simple() {
    var a;
    var b;
    var x = "\v";
    a = document.getElementById("valeur").value;
    b = document.getElementById("nombre").value;
    if (a <= 9){
        for(var i = 0; i < b; i++) {
            for(var j = 0; j <= i; j++) {
                resultat.innerHTML = resultat.innerHTML + a + "\n";
            }
            resultat.innerHTML += ("<br>");
        }
    }
    else{
        resultat.textContent = "Valeur impossible!!!";
    }
}

//Fonction Pyramide Complexe
function complexe() {
    var c;
    var d;
    c = document.getElementById("valeur1").value;
    d = document.getElementById("nombre1").value;
    if (c <= 9) {
        for (var i = 0; i < d; i++) {
            for(var j = 0; j <= i; j++) {
                resultat1.innerHTML = resultat1.innerHTML + (parseInt(c) + parseInt(j)) + "\n";
            }
            resultat1.innerHTML += ("<br>");
        }
    } else {
        resultat1.textContent = "Valeur impossible!!!";
    }
}