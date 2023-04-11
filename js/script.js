console.log("Witajcie rekrutatorzy zapraszam do sprawdzenia mojej strony 🙂");

let body = document.body;
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});



