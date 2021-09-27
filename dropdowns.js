function handleDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

window.onclick = (event) => {
    if (!event.target.matches(".dropdownBtn")) {
        let dropdowns = document.getElementsByClassName("dropdownContent");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}