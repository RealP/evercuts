chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.evernote.com', schemes: ['https'] }
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})

const keyboardFileMappings = {
  search: 'injectable_actions/clickSearch.js',
  fullscreen: 'injectable_actions/toggleFullScreen.js',
  opennote: 'injectable_actions/openNote.js',
  deletenote: 'injectable_actions/deleteNote.js',
  movenote: 'injectable_actions/moveNote.js',
  copyinternallink: 'injectable_actions/copyInternalWebLink.js',
  copyinternalapplink: 'injectable_actions/clickSearch.js',
  newNote: 'injectable_actions/newNote.js',
  insertMenu: 'injectable_actions/insertMenu.js',
  editTags: 'injectable_actions/editTags.js',
  strikeThroughText: 'injectable_actions/strikethroughText.js',
  highlightText: 'injectable_actions/highlightText.js',
  openNoteInNewWindow: 'injectable_actions/highlightText.js'
}

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: keyboardFileMappings[command] })
  })
})
