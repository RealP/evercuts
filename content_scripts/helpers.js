const mouseup = document.createEvent('MouseEvents')
mouseup.initEvent('mouseup', true, true)
const mousedown = document.createEvent('MouseEvents')
mousedown.initEvent('mousedown', true, true)
const mouseover = document.createEvent('MouseEvents')
mouseover.initEvent('mouseover', true, true)

function mouseOverAndClick (ele) {
  ele.dispatchEvent(mouseover)
  ele.click()
}

export function waitAndClickWebLink (link) {
  const MAX_WAIT = 1 * 1000 // 1 seconds seems like plenty
  const interval = 5 // 5ms between checks
  let curWait = 0
  const checkExist = setInterval(function () {
    curWait += interval
    if (curWait > MAX_WAIT) {
      clearInterval(checkExist)
      alert('Failed')
    }
    const ele = document.getElementById(link)
    if (ele) {
      clearInterval(checkExist)
      mouseOverAndClick(ele)
    }
  }, interval)
}

export function openMoreActionsMenu () {
  const button = document.getElementById('qa-NOTE_ACTIONS').parentElement
  button.dispatchEvent(mouseup)
}

export function clickElementAsap (ele, timeout = 2000, interval = 10) {
  let curWait = 0
  const checkExist = setInterval(function () {
    curWait += interval
    if (curWait >= timeout) {
      clearInterval(checkExist)
      console.log('Failed to click ' + ele)
    }
    const clickableElement = document.getElementById(ele)
    if (clickableElement) {
      clearInterval(checkExist)
      mouseOverAndClick(clickableElement)
    }
  }, interval)
}

export function clickFullScreen () {
  const button = document.getElementById('qa-NOTE_FULLSCREEN_BTN')
  button.dispatchEvent(mousedown)
}
