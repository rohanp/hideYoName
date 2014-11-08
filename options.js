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
}

function restoreOptions() {
	chrome.storage.sync.get(
	 function(items) {
		$('#hideReddit').prop('checked', items.hideReddit);
		$('#hideTumblr').prop('checked', items.hideTumblr);
		$('#hideTwitter').prop('checked', items.hideTwitter);
	});
}

$(document).ready(function(){
	restoreOptions();
	console.log("ready");
	$('#save').click(function(){
	saveOptions();
	});
});
