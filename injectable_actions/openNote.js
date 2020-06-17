function openNote() {
    const urlParams = new URLSearchParams(window.location.toString());
    var newURL = `https://www.evernote.com/client/web?login=true#?fs=true&n=${ urlParams.get("n") }`
    window.open(newURL, '_blank', '');
}
openNote();
