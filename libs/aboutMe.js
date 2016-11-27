$(function(){
	
	alert("asdasd");
	/*$('.slideLbl').toggle(function(){
	       $(".slidingDiv").slideDown(
	         function(){
	           //$("#plus").text("-")
	         }
	       );
	   },function(){
	       $(".slidingDiv").slideUp(
	       function(){
	           //$("#plus").text("+")
	       }
	       );
	   });*/
	
	
});

function bodyOnload(){
	//alert('Loading...');
	$('.slideLbl').toggle(function(){
	    $(".slidingDiv").slideDown(
	      function(){
	        //$("#plus").text("-")
	      }
	    );
		},function(){
	    $(".slidingDiv").slideUp(
	    function(){
	        //$("#plus").text("+")
	    }
	    );
	});
	$(".slideLbl").click(function(){
		var CVcontent = readFileContent('myProfile.html');
		$("#profileDiv").html(CVcontent);
	});
}