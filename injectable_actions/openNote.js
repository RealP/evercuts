function openNote () {
  const urlParams = new URLSearchParams(window.location.toString())
  const newURL = `https://www.evernote.com/client/web?login=true#?fs=true&n=${urlParams.get('n')}`
  window.open(newURL, '_blank', 'left=0,top=0')
}
openNote()
