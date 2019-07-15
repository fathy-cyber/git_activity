function displayLinks() {
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function(reponse) {

     // Transforme la réponse en tableau d'objets JavaScript
    var listeLiens = JSON.parse(reponse);
    document.getElementById("contenu").innerHTML = "";

    listeLiens.forEach(function(lien) {
        var pElt = creerElt(lien);
        document.getElementById("contenu").appendChild(pElt);
    });

});
}
