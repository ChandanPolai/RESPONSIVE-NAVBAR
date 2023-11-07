const navdiv=document.querySelector(".div-2");
const icon=document.querySelector(".icon");


icon.addEventListener("click", function () {
    // Toggle the visibility of theicon
    if (navdiv.style.display === "none" || navdiv.style.display === "") {
        navdiv.style.display = "block";
        icon.className="fa-solid fa-xmark";
    } else {
        navdiv.style.display = "none";
        icon.className="fa-solid fa-bars";
    }
});
