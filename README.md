# GTS - Gmail Thread Search

## Overview
You might find GTS useful, if:
- you are using Google Chrome and Gmail (via web interface),
- you dislike Gmail's Conversation View and prefer seeing e-mails one by one,
- but you find it inconvenient to easily look for other e-mails in the same thread with Conversation View disabled.

GTS lets you find other e-mails in your Gmail account with the same subject, by using a keyboard shortcut.

Let's assume you're looking at an e-mail with the following subject: *Re: FWD: URGENT!! Why is 42 a magic number???*. Now, you would like to see other e-mails that you've sent/received in this thread. With GTS, you simply need to press Ctrl+Shift+L in order to put the e-mail subject into your system clipboard, in the Gmail search-friendly format, i.e.:

- without all "Re: ", "Fwd: ", etc.,
- prepended by *subject:*, with the subject itself put in quotation marks.  

So if you press Ctrl+Shift+L when looking at the e-mail in the example above, you'll end up having the following string put into your system clipboard:
```
 subject: "URGENT!! Why is 42 a magic number???"
``` 
 
 At this point you're a step away from getting the list of e-mails in this thread. What you need to do is:
 1. press / (focuses the Gmail search box, in case you have Gmail keyboard shortcuts enabled - which I highly recommend, they're super useful),
 2. paste the clipboard (Ctrl+V, obviously)
 3. Press Enter

Et voilà.
 
## Disclaimers
- Most importantly: I built the extension for my own needs, and in a timebox limited to a few hours. Feel free to use it as well if you find it useful, but I don't take the responsibility on the correct functioning of the extension - if it somehow ends up breaking anything, I'm sorry but I'm not liable. Please feel free to review the code, improve it via merge requests etc.
- I didn't focus on programming the extension in the best possible way - e.g. I didn't investigate Gmail API capabilities to tackle this issue, or e-mail headers like Message-ID or References etc. Therefore it will not find e-mails that have had e-mail subject changed, potentially it also might not find the e-mails using less typical reply and forward indicators (for now it supports most typical Polish, English and German indicators like "Re:", "FWD: " or "Odp:"). Feel free to add more via pull request.
- The extension is highly dependent on Gmail web interface structure - it might stop whenever Gmail will change the web interface structure. While I'm heavily using the extension myself and I'll try to keep it up-to-date, it might happen that:
-- it doesn't work for a few days after such a change, as I might not immediately have time to provide the new version
-- I might cease to use the extension in the future and therefore I won't care to provide updates (feel free to fork then obviously)
-- Gmail might somehow make it impossible / too complex to bring the extension back to work.  
- other extensions might conflict with this extension, in particular when they as well use the keyboard shortcut used by this extension.

## Installation
The extension is for now not available on Chrome Extension Store, so you need to install it manually inside your Extension panel. There's nothing non-typical about it, and there's plenty of examples out there, you're smart, I'm sure you'll figure it out! Also, feel free to improve this README to link to some Google Chrome pages that describe the process.   

## FAQ
Q: Will there be a Firefox / Safari / Edge / lynx / whatnot version of this extension?

A: Would be great, but I won't be implementing it. Feel free to add it :)

## Did you make it that far?
Congratulations! Looks like writing this man page took me not much less time than writing the v1.0.0 of the extension itself ;)
