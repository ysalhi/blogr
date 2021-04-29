function showMenu(id) {
    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        if (document.getElementById("product").classList.contains("show")) {
            document.getElementById("product").classList.remove("show");
        }
        if (document.getElementById("company").classList.contains("show")) {
            document.getElementById("company").classList.remove("show");
        }
        if (document.getElementById("connect").classList.contains("show")) {
            document.getElementById("connect").classList.remove("show");
        }
    }
  } 