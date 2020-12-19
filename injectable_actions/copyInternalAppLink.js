function mouseOverAndClick(ele) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseover", true, true);
    ele.dispatchEvent(evt);
    ele.click();
}

function openCopyInternalLinkMenu() {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseover", true, true);
    var el = document.getElementById('qa-ACTION_COPY_INTERNAL_LINK');
    console.log(el);
    el.dispatchEvent(evt);
}

function openMoreActionsMenu() {
    const evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

function waitAndClickWebLink(link) {
    const MAX_WAIT = 2 * 1000; // 2 seconds seems like plenty
    const interval = 10; // 10ms between checks
    var cur_wait = 0;
    var checkExist = setInterval(function() {
       cur_wait += interval;
       if (cur_wait > MAX_WAIT) {
        clearInterval(checkExist);
        alert("Failed");
       }
       var ele = document.getElementById(link);
       if (ele) {
          console.log("Exists!");
          clearInterval(checkExist);
          mouseOverAndClick(ele);
       }
    }, interval); // check every 10ms
}
openMoreActionsMenu();
setTimeout(function() { openCopyInternalLinkMenu();}, 100); // Wait .1 sec and click copy link
waitAndClickWebLink('qa-ACTION_COPY_APP_LINK');
