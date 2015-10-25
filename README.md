## PushD-PopD - MinneHack 2015 Hackathon Project
###A Google Chrome extension written in Javascript
###### Created By: Eric Aguilera <[@edawg878]>, Terry Lam <[@tlam6297]>

#### About This Project
This Chrome extension allows the user to save (push) a webpage and continue browsing, and then go back (pop) to the saved page
whenever they want to return to their original place.
Inspired by the Linux commands 'pushd' and 'popd'.

#### How It Works
On Google Chrome, access Settings->Extensions->Keyboard Shortcuts, and set 'Pushd" to Command+Shift+Comma, then set
'Popd' to Command+Shift+Period. When you are on the page you want to save, press the hotkey command for 'Pushd'.
When you are done searching something and want to go back to your saved place, press the hotkey for 'Popd'. You can save(push)
as many pages as you would like, and you can keep using the 'Popd' command until you are back to your first saved place.

#### A Peek at our Extension Manifest
```javascript
{
    "name": "PushD PopD",
    "version": "1.0",
    "manifest_version": 2,
    "icons": {
      "16": "save16.png", 
      "48": "save48.png", 
      "128": "save.png"
    },
    "permissions": [
      "activeTab"
    ],
    "background": {
        "scripts": ["background.js"]
    }
}
  ```
  [@edawg878]: <https://github.com/EDawg878>
  [@tlam6297]: <https://github.com/tlam6297>
