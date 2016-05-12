function y_endless_scroll(selector,url,scroll_val,preload_selector,max)
{
	window.max_scrol = 0;
	
	$(preload_selector).hide();
	$(window).scroll(function(){
		//if scroled til mark 
		if ($(window).scrollTop() >= scroll_val)
		{
			yget_result(url,selector,preload_selector,max);
		}
	});
}//end y_endless_scroll


function yget_result(url,selector,preload_selector,max) 
{

	if(window.max_scrol>max){return;}
	window.max_scrol++;
	$.ajax({
	url: url,
	//type: "GET",
//	context: document.body,
	
	//preload
	beforeSend: function(){
	$(preload_selector).show();
	},
	complete: function(){
	$(preload_selector).hide();
	},
	//append data
	success: function(data){
		$(selector).append(data);
	},
	error: function(){} 	        
	});
}//end yget_result