document.getElementById("ajouter").addEventListener("click",function(evt) {
 if (areFilled()) 
 {
   var form = document.querySelector("form");
        evt.preventDefault();
        var newLink = new FormData(form);    
//envoi du lien sur le serveur 
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", newLink, function (reponse) {
            console.log("Commande envoyée au serveur"); 
            displayLinks();
        });
//Envoi du message sur l'interface user
    interfaceElt.innerHTML = '<p style=" background: yellow;"> le lien a bien été ajouté ! </p>';
// Suppression du message
    setTimeout(function () {
            interfaceElt.innerHTML = "";
        }, 2000);
    buttonElt.style.display = "block";
   
}

});

});
