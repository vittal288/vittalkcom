$(function(){
	
	//alert('loading...');
	$(window).load(function(){
		$("body").mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	});
	findScreenResolution();
	//alert('COMMON JS');
	//var hdrTemplate = readFileContent('header.html');
	//$('header').html(hdrTemplate);
	var ftrTemplate = readFileContent('footer.html');
	$('footer').html(ftrTemplate);
	dynamicTxtColor();
	
	
});

//****************************************************************************
function readFileContent(filePath){
	if (typeof XMLHttpRequest != 'undefined') 
	{
		var httpRequest = new XMLHttpRequest();
		httpRequest.open('GET', filePath, false);
		httpRequest.send(null);
		return httpRequest.responseText;
	}
}
//****************************************************************************
function findScreenResolution()
{
	userWindowHeight = $(window).height();
	userWindowWidth = $(window).width();
	
	
	$('.mainContainer').css('min-height',userWindowHeight+"px");
	//$('body').css('height',userWindowHeight+"px");
}
//*********************************************************************************************
function animateMyPic()
{
	/*$('#myPic').animate({
	//opacity: 0.25,
	marginLeft: -(userWindowWidth)/15,
	},1000, function() {
	// Animation complete.
		dynamicTxtColor();
	});*/
}
//*********************************************************************************************
function dynamicTxtColor()
{
	//alert('asdasd');
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	$('#welcome').animate( { backgroundColor: hue }, 1000);		
	dynamicTxtColor(); 
}
//*********************************************************************************************