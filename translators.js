function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: "fr"}, 'google_translate_element');
    let translateToolbar = document.getElementsByClassName("skiptranslate");
    translateToolbar.classList.add("noload");
}

function translatePageEng() {
    let language = "en";
    let selectField = document.querySelector("#google_translate_element select");

    let popup = document.getElementById("popUpMain");

    for (let idx = 0; idx < selectField.children.length; ++idx) {
        let option = selectField.children[idx];

        if (option.value == language) {
            selectField.selectedIndex = idx;

            // Trigger change event to make google-lib translate the site
            selectField.dispatchEvent(new Event("change"));
            break;
        }
    }

    setTimeout(() => {
        popup.classList.remove("loadElement");
        popup.classList.add("noload");
    }, 500);

    let translateToolbar = document.getElementsByClassName("skiptranslate");
    translateToolbar.classList.remove("noload");
    translateToolbar.classList.add("loadElement");
}