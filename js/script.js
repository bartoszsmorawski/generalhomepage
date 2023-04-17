const welcome = () =>  {
    console.log("Witajcie rekrutatorzy zapraszam do sprawdzenia mojej strony 🙂");
}

const onChangeBackgroundClick =() => {
    body.classList.toggle("body--dark");
    nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny"};

welcome();


let body = document.body;
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);



