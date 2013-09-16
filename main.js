function getGpa(i)
{
	//parseInt 转换为整数
	//parseFloat 才是正确的
	var tempMax=0;
	var gpa=0;
	var cj=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html());
	var bk=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html());
	var cx=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html());
	var credit=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
	if(isNaN(cj))
	{
		cj=0;
	} 
	if(isNaN(bk))
	{
		bk=0;
	} 
	if(isNaN(cx))
	{
		cx=0;
	} 
	tempMax=Math.max(cj,bk,cx);
	//由于JS的浮点数计算误差 所以先放大10倍求和
					if(tempMax>=99)
					{
						gpa+=50;
					}
					else if(tempMax>=96)
					{
						gpa+=48;
					}
					else if(tempMax>=93)
					{
						gpa+=46;
					}
					else if(tempMax>=90)
					{
						gpa+=43;
					}
					else if(tempMax>=87)
					{
						gpa+=40;
					}
					else if(tempMax>=84)
					{
						gpa+=36;
					}
					else if(tempMax>=81)
					{
						gpa+=33;
					}
					else if(tempMax>=78)
					{
						gpa+=30;
					}
					else if(tempMax>=75)
					{
						gpa+=26;
					}
					else if(tempMax>=72)
					{
						gpa+=23;
					}
					else if(tempMax>=69)
					{
						gpa+=20;
					}
					else if(tempMax>=67)
					{
						gpa+=18;
					}
					else if(tempMax>=65)
					{
						gpa+=16;
					}
					else if(tempMax>=63)
					{
						gpa+=14;
					}
					else if(tempMax>=61)
					{
						gpa+=12;
					}
					else if(tempMax==60)
					{
						gpa+=10;
					}
					return (gpa*credit);
}
(function()
{	
//alert($("#DataGrid1 tr:eq(1) td:eq(2)").html());//kind
//alert($("#DataGrid1 tr:eq(1) td:eq(8)").html());//credit
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
	{
			if($("#iframeautoheight").length>0)
			{
				var a=0;//通必
				var b=0;//通选
				var c=0;//学必
				var d=0;//专必
				var e=0;//专选
				var f=0;//实践
				var aMax=0;//通必
				var bMax=0;//通选
				var cMax=0;//学必
				var dMax=0;//专必
				var eMax=0;//专选
				var fMax=0;//实践
				var gpa_a=0;//GPA
				var gpa_b=0;
				var gpa_c=0;
				var gpa_d=0;
				var gpa_e=0;
				var gpa_f=0;
				for(i=1;i<=100;i++)
				{
					if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="通识必修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							a+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							a+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							a+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						aMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_a+=getGpa(i);
					}
					else if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="通识选修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							b+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							b+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							b+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						bMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_b+=getGpa(i);
					}
					else if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="学科必修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							c+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							c+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							c+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						cMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_c+=getGpa(i);
					}
					else if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="专业必修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							d+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							d+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							d+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						dMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_d+=getGpa(i);
					}
					else if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="专业选修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							e+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							e+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							e+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						eMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_e+=getGpa(i); 
					}
					else if($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(2)").html()=="实践必修课")
					{
						if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(4)").html())>=60)//guo
						{
							f+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(6)").html())>=60)//bu kao
						{
							f+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						else if(parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(7)").html())>=60)//restudy
						{
							f+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						}
						fMax+=parseFloat($("#iframeautoheight").contents().find("#DataGrid1 tr:eq("+i+") td:eq(8)").html());
						gpa_f+=getGpa(i);
					}	
				}
				
				//choice
				var CreditSum=0;
				var GpaSum=0;

				if(request[0]==1)
				{
					CreditSum+=aMax;
					GpaSum+=gpa_a;
				}
				if(request[1]==1)
				{
					CreditSum+=bMax;
					GpaSum+=gpa_b;
				}
				if(request[2]==1)
				{
					CreditSum+=cMax;
					GpaSum+=gpa_c;
				}
				if(request[3]==1)
				{
					CreditSum+=dMax;
					GpaSum+=gpa_d;
				}
				if(request[4]==1)
				{
					CreditSum+=eMax;
					GpaSum+=gpa_e;
				}
				if(request[5]==1)
				{
					CreditSum+=fMax;
					GpaSum+=gpa_f;
				}
				//alert("xuefen"+CreditSum+"jidian"+(GpaSum/10));
				//各个课程种类总学分
				//alert("a"+aMax+"\nb"+bMax+"\nc"+cMax+"\nd"+dMax+"\ne"+eMax+"\nf"+fMax);
				//各个课程种类总学分绩点
				//alert("Gpa_a:"+gpa_a/10+"\nGpa_b:"+gpa_b/10+"\nGpa_c:"+gpa_c/10+"\nGpa_d:"+gpa_d/10+"\nGpa_e:"+gpa_e/10+"\nGpa_f:"+gpa_f/10);
				
				alert("通识必修课:"+a+"\n通识选修课:"+b+"\n学科必修课:"+c+"\n专业必修课:"+d+"\n专业选修课:"+e+"\n实践必修课:"+f+"\n总学分:"+(a+b+c+d+e+f)+"\nGPA:"+((GpaSum/10)/CreditSum));
				
			}
			else
			{
				alert("请进入教务管理系统 在校成绩查询页面");
			}		
	});
})();