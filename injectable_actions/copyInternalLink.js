function waitAndClickCopyLink () {
    const el = document.getElementById('qa-ACTION_COPY_INTERNAL_LINK');
    el.click();
}

function openMoreActionsMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

openMoreActionsMenu();
setTimeout(function() { waitAndClickCopyLink();}, 100); // Wait .1 sec and click copy link
