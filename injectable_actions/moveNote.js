function clickMove () {
    const el = document.getElementById('qa-ACTION_MOVE');
    el.click();
}

function openMoreActionsMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

openMoreActionsMenu();
setTimeout(function() { clickMove();}, 100); // Wait .1 sec
