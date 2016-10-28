// Wait and click the next button
function waitForNext() {
    setTimeout(function(){
        var nextUpCard = document.getElementsByClassName("nextUpCard");
        if (nextUpCard.length == 1) {
            nextUpCard[0].click();
        }

        waitForNext();
    }, 800);
}


// Check if we are on an Amazon Instant Video page
var count = 0;
function onInstantVideo(){
    setTimeout(function(){
        count++;
        var pause_buttons = document.getElementsByClassName("buttons");

        if (pause_buttons.length === 1) {
            waitForNext();
        } else if (count != 10) {
            onInstantVideo();
        }
    }, 1000);
}


onInstantVideo();
