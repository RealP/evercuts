# Evercuts
Chrome Extension adding keyboard shortcuts to the new Evernote Web GUI.

## Configurable chrome commands
| Action       |   Shortcut  |
|----------    |-------------|
| Click Search |  ALT+Q      |
| Toggle Fullscreen |  ALT+P |
| Open delete note dialog | ALT+Delete |
| Move Note* | ALT+M |
| Open current note in a new tab* <br> _(in fullscreen)_|  Not set |
| Copy Note Web Link* | Not set |
| Copy Note App Link* | Not set |
| Open Insert Menu* | Not set |
| Edit current note tags* | Not set |

_We are only allowed to set 4 default shortcuts. So in order to use shorcuts that are not set by default you must visit chrome://extension/shortcuts_

## Non configurable actions
| Action       |   Shortcut  |
|----------    |-------------|
| Open note in new window | ALT+Click |


## Installation
Best to install [Evercuts](https://chrome.google.com/webstore/detail/evercuts/hojeljpilmhieiaecibmdmdjhfijecgd) from the chrome web store.

You can also install it manually with the following steps

1. Download the repo
2. Go to chrome://extensions
3. Enable developer mode
4. Click 'Load Unpacked'
5. Choose the the folder with the repo contents


## Configuration

The keyboard shortcuts to trigger actions can be modified by visiting chrome://extensions/shortcuts

Since chrome extensions can only set the default shortcut for 4 actions. You must visit chrome://extensions/shortcuts to configure the rest of the actions

# Release Notes
Release Notes:
Version 1.4 - Shortcut to create hyperlink
Version 1.5 - Fixes issue with creating hyperlink on small windows
Version 1.6 - Adds a new shortcut to create a new note
Version 1.7 - bug fixes for EN web version > 13.0 (Also removed hyperlink shortcut. As it works natively now)
Version 1.8 - New shortcuts: insert menu, edit tags. Popup now has accurate info and link to edit shortcuts
Version 1.9 - Fixes shortcut for copying web link. Adds shortcut for copying app link. General performance and reliability changes
Version 1.10 - fixes toggle fullscreen for evernote web version 10.8.4
Version 1.11 - adds shortcut to open popup
Version 1.12 - removes shortcuts for next/prev note
Version 1.13 - fixes toggle fullscreen for evernote web version 10.58.8 and removes shortcut for new note
