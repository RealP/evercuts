function mouseOverAndClick(ele) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseover", true, true);
    ele.dispatchEvent(evt);
    ele.click();
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
          clearInterval(checkExist);
          mouseOverAndClick(ele);
       }
    }, interval);
}

function openMoreActionsMenu() {
    const evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseup", true, true);
    const button = document.getElementById("qa-NOTE_ACTIONS").parentElement;
    button.dispatchEvent(evt);
}

function copyInternalWebLink() {
    const MAX_WAIT = 2 * 1000;
    const interval = 10;
    const INTERNAL_LINK_ID = 'qa-ACTION_COPY_INTERNAL_LINK';
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("mouseover", true, true);
    var cur_wait = 0;

    var checkExist = setInterval(function() {
       cur_wait += interval;
       if (cur_wait > MAX_WAIT) {
        clearInterval(checkExist);
        alert("Failed");
       }
       var ele = document.getElementById(INTERNAL_LINK_ID);
       if (ele) {
          clearInterval(checkExist);
          ele.dispatchEvent(evt);
          waitAndClickWebLink('qa-ACTION_COPY_WEB_LINK');
       }
    }, interval);
}

openMoreActionsMenu();
copyInternalWebLink();
