'use strict';

chrome.commands.onCommand.addListener(function(command) {
    var subjectText = "";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            subjectText = response.subjectText;
            //TODO: these strings above should only be replaced if they're at the beginning of the subject string (but please note that they might be in a different order, so simply changing the below implementation to ltrim() won't be sufficient). Edge case so I don't care for MVP, feel free to add it, Fellow Contributor! 
            subjectText = subjectText.replace("RE: ","");
            subjectText = subjectText.replace("Re: ","");
            subjectText = subjectText.replace("Fwd: ","");
            subjectText = subjectText.replace("FW: ","");
            subjectText = subjectText.replace("AW: ","");
            subjectText = 'subject:"'+subjectText+'"';

            var el = document.createElement('textarea');
            el.value = subjectText;
            el.setAttribute('readonly', '');
            el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        });
    });
});

