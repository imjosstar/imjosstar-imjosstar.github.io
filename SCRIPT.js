// ================================
// RADIO BERACA
// script.js
// ================================

const radio = document.getElementById("radio-stream");
const playButton = document.getElementById("playButton");
const equalizer = document.querySelector(".equalizer");

let playing = false;

// Detener animación al iniciar
equalizer.style.opacity = "0.35";

// Función Play / Pause
playButton.addEventListener("click", () => {

    if (!playing) {

        radio.play();

    } else {

        radio.pause();

    }

});

// Cuando comienza la reproducción
radio.addEventListener("play", () => {

    playing = true;

    playButton.innerHTML =
        '<i class="fa-solid fa-pause"></i> PAUSAR';

    playButton.style.background =
        "linear-gradient(135deg,#2b2b2b,#111111)";

    playButton.style.color = "#ffffff";

    equalizer.style.opacity = "1";

});

// Cuando se pausa
radio.addEventListener("pause", () => {

    playing = false;

    playButton.innerHTML =
        '<i class="fa-solid fa-play"></i> ESCUCHAR EN VIVO';

    playButton.style.background =
        "linear-gradient(135deg,#d4af37,#9d7312)";

    playButton.style.color = "#000";

    equalizer.style.opacity = "0.35";

});

// Si ocurre un error
radio.addEventListener("error", () => {

    alert("No fue posible conectar con la transmisión en este momento.");

});

// Cuando termina (por seguridad)
radio.addEventListener("ended", () => {

    playing = false;

    playButton.innerHTML =
        '<i class="fa-solid fa-play"></i> ESCUCHAR EN VIVO';

});

// Animación al hacer scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.20

});

sections.forEach(section => {

    observer.observe(section);

});