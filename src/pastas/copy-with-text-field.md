---
title: Copy to clipboard (with text field)
summary: Copy to clipboard using text field
framework: JavaScript
---

Small code snippet on how to copy some text to the clipboard without using a text field. Based on [W3School](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

```javascript
/* Get the text field */
var copyText = document.getElementById("myInput");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /*For mobile devices*/

/* Copy the text inside the text field */
document.execCommand("copy");
```
