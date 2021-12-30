function openHighlightText () {
  const button = document.getElementById('qa-HIGHLIGHT_TEXT_BTN')
  // This svg element has 3 classes when highlighted and 2 when not
  const isHiglighted = button.children[0].classList.length > 2
  if (!isHiglighted) {
    button.dispatchEvent(mouseup)
    waitAndClickWebLink('qa-YELLOW_COLOR_LABEL')
  }
  // Unhighlighting is harder to do right now programatically
}
openHighlightText()
