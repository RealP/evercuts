// Get focused element hack
var ele = document.querySelector(".qC87s8opH1X3hjuzPoKrl");
var next_ele = ele.nextSibling;
var id = next_ele.id.split("_")[0];
window.location.href = `https://www.evernote.com/client/web?login=true#?fs=false&n=${ id }`;
