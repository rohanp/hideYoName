function saveOptions() {
    console.log("saving!");
    var reddit = $('#hideReddit').is(":checked");
    var tumblr = $('#hideTumblr').is(":checked");
    var twitter = $('#hideTwitter').is(":checked");

    chrome.storage.sync.set({
        hideReddit: reddit,
        hideTumblr: tumblr,
        hideTwitter: twitter
    })

    window.close();

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(arrayOfTabs) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(arrayOfTabs[0].id, {
            code: code
        });
    });
}

function restoreOptions() {
    chrome.storage.sync.get(
        function(items) {
            $('#hideReddit').prop('checked', items.hideReddit);
            $('#hideTumblr').prop('checked', items.hideTumblr);
            $('#hideTwitter').prop('checked', items.hideTwitter);
        });
}

$(document).ready(function() {
    restoreOptions();
    console.log("ready");
    $('#save').click(function() {
        saveOptions();
    });
});
