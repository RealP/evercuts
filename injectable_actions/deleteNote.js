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
          clickableElement.click();
       }
    }, interval);
}

function openMoreActionsMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

openMoreActionsMenu();
clickElementAsap('qa-ACTION_DELETE');
