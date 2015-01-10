function saveOptions() {
	console.log("saving!");
	var reddit = $('#hideReddit').is(":checked");
	var name = $("#name").val();
	var cKarma = $("#commentKarma").val();
	var lKarma = $("#linkKarma").val();
	var tumblr = $('#hideTumblr').is(":checked");
	var twitter = $('#hideTwitter').is(":checked");

	chrome.storage.sync.set({
		hideReddit: reddit,
		hideTumblr: tumblr,
		hideTwitter: twitter,
		altName: name,
		commentKarma: cKarma,
		linkKarma: lKarma
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
			$('#name').val(items.altName);
			$('#linkKarma').val(items.linkKarma);
			$('#commentKarma').val(items.commentKarma);
		});
}

$(document).ready(function() {
	$('#name').css("display", "none");
	$('#linkKarma').css("display", "none");
	$('#commentKarma').css("display", "none");

	restoreOptions();
	console.log("ready");
	$('#save').click(function() {
		saveOptions();
	});

	$('#adv').click(function() {
		$('body').css('min-width', '140px');
		$('#name').toggle();
		$('#linkKarma').toggle();
		$('#commentKarma').toggle();
	});
});
