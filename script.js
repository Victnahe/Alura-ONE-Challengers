/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function encriptar(c) {
    var conversion = ""
    switch(c){
        case "e":
            conversion = "enter";
            break;
        case "i":
            conversion = "imes";
            break;
        case "a":
            conversion = "ai";
            break;
        case "o":
            conversion = "ober";
            break;
        case "u":
            conversion = "ufat";
            break;
    }
    return conversion;
}

function codificar(palabra){
    var patronrexp=/[aeiou]/g;
    return palabra.replace(patronrexp, encriptar);
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function desencriptar(c) {
    var conversion = ""
    if (c=="enter") {
        conversion = "e";
    }
    if (c=="imes") {
        conversion = "i";
    }
    if (c=="ai") {
        conversion = "a";
    }
    if (c=="ober") {
        conversion = "o";
    }
    if (c=="ufat") {
        conversion = "u";
    }
    return conversion;
}

function decodificar(palabra){
    var patronrexp=/enter|imes|ai|ober|ufat/g;
    return palabra.replace(patronrexp, desencriptar);
}
/*murcielago <<==>>  mufatrcimesenterlaigober*/

/*Variables de objetos */
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector('#btn-desencriptar');
var btnCopiar = document.querySelector('#btn-copy');
var dfInput = document.querySelector("#input-texto");
var dfMsg = document.querySelector("#msg");

function validarEntrada(valor){
    var valida =true;
    if( valor == null || valor.length == 0 ){
        alert("Usted no ha escrito nada");
        valida = false;
    }
    else{
        if ( !( /^[a-z ]+$/.test(valor)) ) {
            alert("Solo se permite minúsculas");
            valida = false;
        }
    }
    dfInput.focus();
    return valida;
}

/* obtener las palabras, encriptarlas y mostrarlas en la caja*/

btnEncriptar.addEventListener("click", function(event){
	event.preventDefault();

    if (validarEntrada(dfInput.value) ) {
        dfMsg.value = codificar(dfInput.value);
        dfInput.value="";
    }
});

/* obtener las palabras, desencriptarlas y mostrarlas en el input*/
btnDesencriptar.addEventListener("click", function(event){
	event.preventDefault();
    
    if (validarEntrada(dfInput.value) ) {
        dfMsg.value = decodificar(dfInput.value);
        dfInput.value="";
    }
});

/* copiar a memoria las palabras de la caja*/

btnCopiar.addEventListener("click", function(event){
	event.preventDefault();
   
    if (dfMsg.value == "") {
        alert("No hay palabras por copiar");
        dfInput.focus();
    }
    else {
        dfMsg.select();
        navigator.clipboard.writeText(dfMsg.value);
        dfInput.focus();
        
    }
           
});