// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//let nombresUsuario = document.getElementById("amigo").value;
let listaHtml = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");
let listaDeAmigos = [];
let tamañoLista = listaDeAmigos.length;

// cambiar el texto del h2
function textoh2(elemento,texto,color){
    let parrafo = document.querySelector(elemento);
         parrafo.innerHTML = texto;
         parrafo.style.color = color;
 }
 //limpiar caja de texto
 function vaciarCaja(){

     document.getElementById("X").value = "";
}         

// agrega los nombres a un array y a una lista de html creando un elemento li, 
// agregandole el valor del input y luego agregando el elemento
function agregarAmigo(){

let nombre = document.getElementById("X").value.trim();
console.log(nombre);
    if (nombre === ""){
        textoh2("h2","Agrega un nombre valido","red");
        vaciarCaja();

    }else{
         listaDeAmigos.push(nombre);

        agregar("elementoLista",nombre, listaHtml)
         /*let elementoLista = document.createElement("li");
         elementoLista.textContent = nombre;
         listaHtml.appendChild(elementoLista);
*/
         document.getElementById("X").value = "";
         textoh2("h2","Digite el nombre de sus amigos","blue")
         limpiarLista("resultado")
         //document.getElementById("resultado").innerHTML = "";
    }
}

function sortearAmigo(){
    
    if (listaDeAmigos.length <= 4){
          textoh2("h2","Agrega mas amigos","red")
    }else{
         let numeroAleatoreo = Math.floor(Math.random()*listaDeAmigos.length);
         console.log(numeroAleatoreo);
        agregar ("resultadoDeLista",`El amigo secreto es:${listaDeAmigos[numeroAleatoreo]}`,listaResultado);
        limpiarLista("listaAmigos")
        //document.getElementById("listaAmigos").innerHTML = "";
        listaDeAmigos = [];
    }
}
;
function agregar(elemento,valor,lista){

         elemento = document.createElement("li");
         elemento.textContent = valor;
         lista.appendChild(elemento);
        

}
//lompiar la lista 
function limpiarLista(nombreLista){
    document.getElementById(nombreLista).innerHTML = "";
}
