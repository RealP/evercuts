chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.evernote.com', schemes: ['https']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === "search") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {file: "injectable_actions/clickSearch.js"});
        });
    } else if (command === "fullscreen") {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.executeScript(
             tabs[0].id,
             {file: "injectable_actions/toggleFullScreen.js"});
       });
    } else if (command === "opennote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/openNote.js"});
      });
    } else if (command === "deletenote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/deleteNote.js"});
      });
    } else if (command === "movenote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/moveNote.js"});
      });
    } else if (command === "copyinternallink") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/copyInternalLink.js"});
      });
    } else if (command === "nextNote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/nextNote.js"});
      });
    } else if (command === "previousNote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/previousNote.js"});
      });
    } else if (command === "newNote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/newNote.js"});
      });
    } else if (command === "insertMenu") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/insertMenu.js"});
      });
    } else if (command === "editTags") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "injectable_actions/editTags.js"});
      });
    }
});
