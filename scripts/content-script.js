var urlOrigin=window.location.origin;
var fullUrl = window.location.href;
function windowOnLoad() {
  jQuery("body").keyup(function(event){
		if(event.keyCode ==35){
			var div =jQuery(this);
			var lastSpan = div.find('span[data-text="true"]').last();
			var lastBr = div.find('br[data-text="true"]').last();
			if(lastBr.length){
				jQuery(lastBr).parent().html('<span data-text="true">Hello @Xin chao</span>');
			}else if(lastSpan.length){
				var parent = jQuery(lastSpan).parent();
				var html = parent.html();
				html = html.replace('</span>', 'Hello @Xin chao</span>');
				parent.html(html);
			}
		}
	});
}
window.onload=windowOnLoad;