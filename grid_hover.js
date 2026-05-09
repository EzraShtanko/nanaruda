


for (const element of document.getElementsByClassName("hoverable")) {
    element.addEventListener("mouseenter", (e) => {
        element.firstElementChild.classList.add("revealed");
    });
    element.addEventListener("mouseleave", (e) => {
        element.firstElementChild.classList.remove("revealed");
    });
}