import {Contador} from "./contador.js";

const modal = document.querySelector("dialog");
const partidaEnMemoria = JSON.parse(localStorage.getItem("truco"));
const p1Nombre = "Nosotros";
const p2Nombre = "Ellos";
console.log(partidaEnMemoria);

const p1 = new Contador(p1Nombre, document.getElementById("jugador1Container"), partidaEnMemoria["Nosotros"]);
const p2 = new Contador(p2Nombre,document.getElementById("jugador2Container"),partidaEnMemoria[p2Nombre]);





document.getElementById("reset").addEventListener("click", ()=>{
    modal.showModal();
});

document.getElementById("volver").addEventListener("click", ()=>{
    modal.close();
});

document.getElementById("aceptar").addEventListener("click", ()=>{
    p1.reset();
    p2.reset();
    modal.close();
});

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", ()=>{
        const partidaAGuardar = {
            [p1.nombre] : p1.numero,
            [p2.nombre] : p2.numero,
        }
        localStorage.setItem("truco", JSON.stringify(partidaAGuardar));
    })
})
