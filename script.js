//==================================
// RADIO BERACA
// script.js
//==================================

const radio = document.getElementById("radio-stream");
const playButton = document.getElementById("playButton");
const equalizer = document.querySelector(".equalizer");

let reproduciendo = false;

//==================================
// BOTÓN PLAY (Optimizado para Transmisión en Vivo)
//==================================
playButton.addEventListener("click", () => {
    if (reproduciendo) {
        radio.pause();
    } else {
        // Recarga el flujo para enganchar la transmisión en tiempo real
        radio.load(); 
        
        // Ejecuta la reproducción y atrapa errores si el navegador bloquea el autoplay
        radio.play().catch(error => {
            console.log("Esperando interacción del usuario: ", error);
        });
    }
});
//==================================
// CUANDO COMIENZA
//==================================

radio.addEventListener("play",()=>{

    reproduciendo = true;

    playButton.innerHTML =
    '<i class="fa-solid fa-pause"></i> PAUSAR';

    playButton.style.background =
    "linear-gradient(135deg,#2b2b2b,#111)";

    playButton.style.color="#ffffff";

    equalizer.style.opacity="1";

});

//==================================
// CUANDO SE PAUSA
//==================================

radio.addEventListener("pause",()=>{

    reproduciendo = false;

    playButton.innerHTML =
    '<i class="fa-solid fa-play"></i> ESCUCHAR EN VIVO';

    playButton.style.background =
    "linear-gradient(135deg,#d4af37,#a87800)";

    playButton.style.color="#000";

    equalizer.style.opacity=".35";

});

//==================================
// ERROR
//==================================

radio.addEventListener("error",()=>{

    alert("No fue posible conectar con la transmisión.");

});

//==================================
// ANIMACIONES AL HACER SCROLL
//==================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.20
});

sections.forEach(section=>{

    observer.observe(section);

});

//==================================
// EFECTO HEADER
//==================================

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 40){

        header.style.background="rgba(0,0,0,.85)";

    }else{

        header.style.background="rgba(0,0,0,.55)";

    }

});
// ==============================
// HEADER INTELIGENTE
// ==============================

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.transform = "translateY(0)";
        return;
    }

    if (currentScroll > lastScroll) {
        // Bajando
        header.style.transform = "translateY(-100%)";
    } else {
        // Subiendo
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;

});
