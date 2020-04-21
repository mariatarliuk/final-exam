
function showMenu() {
    var x = document.getElementById("top_menu");
    if (x.className === "top_menu") {
        x.className += " responsive";
    } else {
        x.className = "top_menu";
    }
}
