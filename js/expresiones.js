function eregulares(){
    var patron = /^[a-zA-Z0-9-_\.] + @[a-zA-Z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/gm;
    var valor = document.getElementById("txtg").value;
    if(patron.test(valor)){
        alert("La direccion de correo es correcta");
    }
    else{
        alert("Ingrese de nuevo el Email")
    }
}