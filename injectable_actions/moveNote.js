function waitAndClickMove (attempts) {
    const el = document.getElementById('qa-ACTION_MOVE');
    el.click();
}

function openMoveNoteDialog() {
    // Open actions
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.click();
    setTimeout(function() { waitAndClickMove(0);}, 100); // Wait .1 sec
}
openMoveNoteDialog();
