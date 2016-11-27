$(document).ready(function()
{
	
	$("#loginLbl").click(function(){
	
		alert('CLICK');
		
		//$("#myIframe").attr('src','https://www.facebook.com/dialog/oauth?client_id=643887285645160&redirect_uri=http://www.vittalk.com/successPage.html');
       // var iframe = document.getElementById('myIframe');
       // iframe.src ="https://www.facebook.com/dialog/oauth?client_id=643887285645160&redirect_uri=http://www.vittalk.com/successPage.html";
       
       var fbAPI = "https://www.facebook.com/dialog/oauth?client_id=643887285645160&redirect_uri=http://www.vittalk.com/successPage.html"//
        //var fbAPI = "http://www.vittalk.com/successPage.html"
       //$('div#loginPopUp').html(fbAPI);
       
       restore_movie_name(fbAPI);
       
       
	});
});

function restore_movie_name(vUrl){
    
    var vUrl = "getFileCont.php?urlName="+vUrl;
    http_services_SendData(vUrl, "", restore_movie_name_Handler);
}
//************************************************************************************************
function restore_movie_name_Handler(){
	
	   var xmlData = xmlhttp.responseText;
	   alert(xmlData);
       
       $('div#loginPopUp').html(xmlData);
}
