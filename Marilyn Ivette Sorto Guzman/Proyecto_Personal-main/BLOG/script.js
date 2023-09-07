function mostraOcultarDatos(id){
    var div = document.getElementById(id);

    if(div.style.display == "flex"){
        div.style.display = "none";
    }
    else{
        div.style.display = "flex";
    }
}