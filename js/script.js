{
    const welcome = () => {
        console.log("Witajcie rekrutatorzy zapraszam do sprawdzenia mojej strony 🙂");
    }

    const toggleBackground = () => {
        const body = document.body;
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("body--dark");
        nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny"
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}