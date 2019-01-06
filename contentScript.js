console.log('Gmail email-subject-to-clipboard extension loaded!');
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Keyboard shortcut caught, proceeding...")
        var subject = document.getElementsByClassName("ha")[0].getElementsByTagName("h2")[0].innerText;
        console.log("The recognized email subject is: " + subject);
        sendResponse({subjectText: subject});
    }
);
