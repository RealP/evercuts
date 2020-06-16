function waitAndClickDelete (attempts) {
    const el = document.getElementById('qa-ACTION_DELETE');
    el.click();
}

function openDeleteDialog() {
    // Open actions
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.click();
    setTimeout(function() { waitAndClickDelete(0);}, 100); // Wait .1 sec and click delete
}
openDeleteDialog();
