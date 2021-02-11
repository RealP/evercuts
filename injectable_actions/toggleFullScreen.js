function clickFullScreen() {
    let evt = document.createEvent("MouseEvents");
    evt.initEvent("mousedown", true, true);
    const button = document.getElementById("qa-NOTE_FULLSCREEN_BTN");
    button.dispatchEvent(evt);
}
clickFullScreen();
