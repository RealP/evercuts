function clickAddHyperLink() {
    var button = document.getElementById("qa-NOTE_LINK_POPUP_BUTTON");
    if (! button) {
        button = document.getElementById("qa-OVERFLOW_BTN");
        button.click();
        // New element name ....
        button = document.getElementById("createlink");
        setTimeout(function() { button.click();}, 100); // Wait .1 sec
    }
    else {
        button.click();
    }
}
clickAddHyperLink();
