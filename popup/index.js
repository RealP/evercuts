window.onload = (event) => {
  const table = document.getElementById('shortcutTable')
  let rowIdx = 0
  chrome.commands.getAll(function (commands) {
    for (let i = 0; i <= commands.length; i++) {
      if (commands[i].description === '') {
        commands[i].description = 'Show this popup'
      }
      const row = table.insertRow(rowIdx + 1)
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)
      cell1.innerHTML = commands[i].description
      if (commands[i].shortcut) {
        cell2.innerHTML = commands[i].shortcut
      } else {
        cell2.innerHTML = 'Click button below to configure'
      }
      rowIdx += 1
    }
  })
  const row = table.insertRow(rowIdx + 1)
  const cell1 = row.insertCell(0)
  const cell2 = row.insertCell(1)
  cell1.innerHTML = 'Open note in a new window'
  cell2.innerHTML = 'Alt + Click on note to open'
}
