/**
 * Evernote has this quirk in the url where the search params are split by a #
 * the only search param before the # is login which I always assume to be true
*/
function getSearchParams (url) {
  return url.split('#')[1].slice(1)
}
function isFullScreen () {
  const urlParams = new URLSearchParams(getSearchParams(window.location.toString()))
  return urlParams.get('fs')
}
function clickSearch () {
  if (isFullScreen()) {
    clickFullScreen()
  }
  const button = document.getElementById('qa-SEARCH_BAR_INITIAL')
  button.click()
}
clickSearch()
