
window.onload=function(){
	
	ajaxJson()
	

}
function ajaxJson(){
		var xmlhttp;
		if(window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		}else{
			xmlhttp=new ActiveXObject()
		}
		xmlhttp.onreadystatechange=function(){
			if(xmlhttp.readyState==4&&xmlhttp.status==200){
			//console.log(xmlhttp.responseText)
		cjli(xmlhttp)
			}else{
				
			}
		}
		xmlhttp.open("GET",'js/GD.json',true);
		xmlhttp.send()
	}
function cjli(xmlhttp){
	var data=JSON.parse(xmlhttp.responseText)
	var cslb=document.getElementById('cslb');
	var zmlb=document.getElementById('zmlb');
	var cslength=data.c.length;
	var zmlength=data.zm.length
	for(i=0;i<cslength;i++){
		var new_li=document.createElement('li');
		new_li.innerHTML="<a href='#'>"+data.c[i]+"</a>";
		cslb.appendChild(new_li)
	}
	

	

}

		$(function(){
			$('.form-control').click(function(){
				var index2=$(this).index('.form-control');
				$('.hs_div').eq(index2).show().siblings('.hs_div').hide()
			})
			$('body').on('click',function(e){
				//判断出发的子元素是不是INPUT
				if($(e.target).is($('.form-control'))){
					
				}else if($(e.target).parents('.hs_div').is($('.hs_div'))){
					//祖先元素PARENTS
					
				}
				else if($(e.target).is($('.hs_div'))){
					//祖先元素PARENTS
					
				}
				else{
					$('.hs_div').each(function(i){
						$('.hs_div').eq(i).hide()
					})
				}
			})
			
			
			
			$('.clearfix li>a').click(function(){
				var index=$(this).parents('.hs_div').index('.hs_div');
				var neirong=$(this).html();
				$('.form-control').eq(index).val(neirong);
				$('.hs_div').eq(index).hide();
			})
			$('.train_change').eq(0).click(function(){
				
				
				var zj=$('.form-control').eq(0).val();
				$('.form-control').eq(0).val($('.form-control').eq(1).val())
				$('.form-control').eq(1).val(zj);
				
			})
			$('.form_datetime').datetimepicker({
				locale: 'zh-cn'
			})
		})
	
