function getNoteId (element) {
  const MAX_PARENTS_TO_CHECK = 4
  let currentId = element.id
  for (let i = 0; i < MAX_PARENTS_TO_CHECK; i++) {
    if (currentId.includes('qa-NOTES_SIDEBAR_NOTE')) {
      return currentId.split('_')[0]
    }
    element = element.parentElement
    currentId = element.id
  }
  return null
}

document.addEventListener('click', function () {
  if (event.altKey === true) {
    const id = getNoteId(event.target)
    if (id !== null) {
      window.open(
        `https://www.evernote.com/client/web?login=true#?fs=true&n=${id}`,
        '_blank',
        'left=0,top=0'
      )
    }
  }
})
