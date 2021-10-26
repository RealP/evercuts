function copyInternalWebLink () {
  openMoreActionsMenu()
  const ele = document.getElementById('qa-ACTION_COPY_INTERNAL_LINK')
  ele.dispatchEvent(mouseover)
  clickElementAsap('qa-ACTION_COPY_WEB_LINK')
}
copyInternalWebLink()
