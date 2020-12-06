function openInsertMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-INSERT_DROPDOWN");
    button.dispatchEvent(evt);
}

openInsertMenu();
