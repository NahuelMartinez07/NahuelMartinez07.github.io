let punt = document.getElementById("puntuacion");
let submit = document.getElementById("submit");
let gracias = document.getElementById("gracias");
let num = document.querySelector(".num");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");

let rating;
let calificar = () => {
  uno.addEventListener("click", () => {
    rating = `You selected 1 out of 5`;
    document.querySelector(".selected").innerHTML = rating;
    uno.style.background  = "hsl(217, 12%, 63%)";
    dos.style.background = "#262f38";
    tres.style.background = "#262f38";
    cuatro.style.background = "#262f38";
    cinco.style.background = "#262f38";
  });
  dos.addEventListener("click", () => {
    rating = `You selected 2 out of 5`;
    document.querySelector(".selected").innerHTML = rating;
    uno.style.background = "#262f38";
    dos.style.background  = "hsl(217, 12%, 63%)";
    tres.style.background = "#262f38";
    cuatro.style.background = "#262f38";
    cinco.style.background = "#262f38";
  });
  tres.addEventListener("click", () => {
    rating = `You selected 3 out of 5`;
    document.querySelector(".selected").innerHTML = rating;
    uno.style.background = "#262f38";
    dos.style.background = "#262f38";
    tres.style.background  = "hsl(217, 12%, 63%)";
    cuatro.style.background = "#262f38";
    cinco.style.background = "#262f38";
  });
  cuatro.addEventListener("click", () => {
    rating = `You selected 4 out of 5`;
    document.querySelector(".selected").innerHTML = rating;
    uno.style.background = "#262f38";
    dos.style.background = "#262f38";
    tres.style.background = "#262f38";
    cuatro.style.background  = "hsl(217, 12%, 63%)";
    cinco.style.background = "#262f38";
  });
  cinco.addEventListener("click", () => {
    rating = `You selected 5 out of 5`;
    document.querySelector(".selected").innerHTML = rating;
    uno.style.background = "#262f38";
    dos.style.background = "#262f38";
    tres.style.background = "#262f38";
    cuatro.style.background = "#262f38";
    cinco.style.background  = "hsl(217, 12%, 63%)";
  });
};

gracias.style.display = "none";
submit.addEventListener("click", () => {
  punt.style.display = "none";
  gracias.style.display = "flex";
});

calificar();
