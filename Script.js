function Hamburger() {
    var x = document.getElementById("iMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
