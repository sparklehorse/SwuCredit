$(document).ready(function(){
	$("#Submit").bind("click",function(){
		var binary=[];
		//tb=1
		if($("#tb").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		//tx=2
		if($("#tx").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		//xb=3
		if($("#xb").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		//zb=4
		if($("#zb").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		//zx=5
		if($("#zx").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		//sb=6
		if($("#sb").is(":checked"))
		{
			binary.push(1);
		}
		else
		{
			binary.push(0);
		} 
		
		var sum=0;
		for(var i=0;i<6;i++)
		{
			sum+=binary[i];
			
		}
		if(sum==0)
		{
			alert("请至少选择一项");
		}
		else
		{
			chrome.tabs.getSelected(null, function(tab)
			{
				chrome.tabs.sendMessage(tab.id,binary);
			});
		}		
	});		
});

	