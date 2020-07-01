function waitAndClickCopyLink (attempts) {
    const el = document.getElementById('qa-ACTION_COPY_INTERNAL_LINK');
    el.click();
}

function openNoteActions() {
    // Open actions
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.click();
    setTimeout(function() { waitAndClickCopyLink(0);}, 100); // Wait .1 sec and click delete
}
openNoteActions();
