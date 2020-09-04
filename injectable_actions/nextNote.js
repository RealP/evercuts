// Get focused element hack (works as of 9/4/2020)
// The element in focus has the following css selector qC87s8opH1X3hjuzPoKrl
var ele = document.querySelector(".qC87s8opH1X3hjuzPoKrl");
// Hack to find the next note. This will break soon. Already broke once...
var next_ele = ele.parentElement.nextSibling.firstChild;
var id = next_ele.id.split("_")[0];
// We got the new note id lets navigate to it
window.location.href = `https://www.evernote.com/client/web?login=true#?fs=false&n=${ id }`;
