function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: "fr"}, 'google_translate_element');
}

function translatePage(langCode) {
    let selectField = document.querySelector("#google_translate_element select");
    
    for (let idx = 0; idx < selectField.children.length; idx++) {
        let option = selectField.children[idx];

        if (String(option.value) == langCode) {
            selectField.selectedIndex = idx;
            selectField.dispatchEvent(new Event("change"));
            break;
        }
    }
}