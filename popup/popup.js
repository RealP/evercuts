document.getElementById('hotkey').onclick = () => chrome.tabs.create({
  url: 'chrome://extensions/configureCommands'
})
