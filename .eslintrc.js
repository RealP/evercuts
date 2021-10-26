module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
  },
  globals: {
    // Needs to kept in sync with helpers.js for now
    chrome: 'readonly',
    mouseOverAndClick: 'readonly',
    openMoreActionsMenu: 'readonly',
    waitAndClickWebLink: 'readonly',
    clickElementAsap: 'readonly',
    clickFullScreen: 'readonly',
    mouseup: 'readonly',
    mousedown: 'readonly',
    mouseover: 'readonly'
  }
}
