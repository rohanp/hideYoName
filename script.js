console.log("hiding your name!");
chrome.storage.sync.get("hideReddit", function(obj){
	console.log(obj);
});
//Reddit
chrome.storage.sync.get({
        "hideReddit": true,
        "hideTumblr": true,
        "hideTwitter": true
    }, function(items) {
    	//Reddit
    	if(items.hideReddit){
			$('.user').css("visibility", "hidden");
			$('.user a').attr('href','nice try!');
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