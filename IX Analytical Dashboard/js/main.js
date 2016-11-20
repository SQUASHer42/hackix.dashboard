function toggleColumn() {
    var toggleStatus = document.getElementById("nav").style.display;
    if (toggleStatus === "none") {
        document.getElementById("nav").style.display = "block";
    } else {
        document.getElementById("nav").style.display = "none";
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = document.getElementById(ev.dataTransfer.getData("text"));
    var dataparent = data.parentNode;
    var eventparent = ev.target.parentNode;

    dataparent.appendChild(ev.target);
    eventparent.appendChild(data);
    
}