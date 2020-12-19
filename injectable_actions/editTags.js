function clickEditTags () {
    const el = document.getElementById('qa-ACTION_EDIT_TAGS');
    el.click();
}
function mouseOverAndClick(ele) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseover", true, true);
    ele.dispatchEvent(evt);
    ele.click();
}

function openMoreActionsMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

function clickElementAsap(ele, timeout=2000, interval=10) {
    var cur_wait = 0;
    var checkExist = setInterval(function() {
       cur_wait += interval;
       if (cur_wait >= timeout) {
        clearInterval(checkExist);
        console.log("Failed to click " + ele);
       }
       var clickableElement = document.getElementById(ele);
       if (clickableElement) {
          clearInterval(checkExist);
          mouseOverAndClick(clickableElement);
          document.getElementById('qa-TAG_FILTER_INPUT').focus();
       }
    }, interval);
}

openMoreActionsMenu();
clickElementAsap('qa-ACTION_EDIT_TAGS');
mouseOverAndClick(document.getElementById('qa-TAG_FILTER_INPUT'));
