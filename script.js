console.log("hiding your name!");
chrome.storage.sync.get("hideReddit", function(obj){
	console.log(obj);
});

chrome.storage.sync.get({
        "hideReddit": true,
        "hideTumblr": true,
        "hideTwitter": true,
        "altName": "",
        "linkKarma": "",
        "commentKarma": ""
    }, function(items) {
    	//Reddit
    	if(items.hideReddit){
			$('.commentingAs').html("Commenting as: " + items.altName);
			$('.user a').not('.login-required').html(items.altName);
			$(".userkarma a[title='link karma']").html(items.linkKarma);
			$(".userkarma a[title='comment karma']").html(items.commentKarma);
		}
		//Tumblr
		if(items.hideTumblr){
			$('div.open_blog').css("visibility", "hidden");
			$('.is_mine').not("#new_post").css("visibility","hidden");
		}

		//Twitter
		if(items.hideTwitter){
			$('.u-linkComplex-target').css('visibility', 'hidden');
			$('.my-tweet').css('visibility', 'hidden');
		}
	}
);