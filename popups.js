function loadLanguagePopup() { 
    let popup = document.getElementById("popUpMain");
    setTimeout(function() {
        popup.classList.remove("noload");
        popup.classList.add("loadElement");
    }, 3000);
}

function closeLanguagePopup() {
    let popup = document.getElementById("popUpMain");
    popup.classList.remove("loadElement");
    popup.classList.add("noload");
}