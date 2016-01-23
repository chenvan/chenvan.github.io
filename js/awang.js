$(".post img").wrap(function(){
	return "<a href='"+$(this).attr("src")+"' title='"+$(this).attr("alt")+"'></a>";
});