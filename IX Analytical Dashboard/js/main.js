function toggleColumn() {
    var toggleStatus = document.getElementById("nav").style.display;
    if (toggleStatus === "none") {
        document.getElementById("nav").style.display = "block";
    } else {
        document.getElementById("nav").style.display = "none";
    }
}