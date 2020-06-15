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
              {file: "clickSearch.js"});
        });
    } else if (command === "fullscreen") {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.executeScript(
             tabs[0].id,
             {file: "toggleFullScreen.js"});
       });
    } else if (command === "opennote") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: "openNote.js"});
      });
    }
});
