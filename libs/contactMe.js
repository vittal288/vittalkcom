var vName=vEmail=vMob=vMsg="";
$(function(){
	validateFields();
	$("#btnCnctMe").click(function(){
		
		resetFormFeilds();
		sendContactInfo();
	});
	
	$("#btnReset").click(function(){
		resetFormFeilds();
		$("#lblError").html('');
	});
	
});
function animateCallback() {
  setTimeout(hideMsg,5000);
};
function hideMsg(){
	$( "#cstmMsg" ).effect( "blind","", 500);
}
function resetFormFeilds(){
	$('.form-control').val('');
}
function validateFields(){
	//keyUp Events for contact Name 
	$('#cnctname').keyup(function() 
	{
		//allowing for only Char
		var regExp =/[^(a-zA-Z)\s]+[0-9]{0}/g;
		if(!(regExp.test(this.value)))
		{
			$(this).removeClass('validateError').addClass('cnctTextBx');
			$('#lblError').html('');
			vName = $(this).val();
		}
		else
		{
			//alert('DIGIT');
			$(this).removeClass('cnctTextBx').addClass('validateError');
			$('#lblError').html('Please Enter Only Characters');
		}	
		
    });
	//keyUp Events for contact Email 
	$('#cnctEmail').keyup(function() 
	{
		if(validateEmail(this.value))
		{
			$(this).removeClass('validateError').addClass('cnctTextBx');
			$('#lblError').html('');
			vEmail = $(this).val();
		}
		else
		{
			$('#lblError').html('Enter Valid Email Id');
			$(this).removeClass('cnctTextBx').addClass('validateError');
		}
			
    });
	
	$('#cnctMob').keyup(function()
		{
			//allow only digits
			var regExp =/[^[0-9]/g;
			if(!regExp.test(this.value))
			{
				$(this).removeClass('validateError').addClass('cnctTextBx');
				$('#lblError').html('');
				
				//Enter Only 10 Digits
				if(this.value.length > 10 || this.value.length < 10)
				{
					//alert('Enter Only 10 Digits');
					$(this).removeClass('cnctTextBx').addClass('validateError');
					$('#lblError').html('Enter 10 Digits');
					vMob = $(this).val();
				}
				else
				{
					$(this).removeClass('validateError').addClass('cnctTextBx');
					$('#lblError').html('');
				}
			}
			else
			{
				//alert('Char');
				$(this).removeClass('cnctTextBx').addClass('validateError');
				$('#lblError').html('Please Enter Only Digits');
			}
	});
	
	
	$('#contactTextArea').keyup(function() {
			
		vMsg =$("#contactTextArea").val();			
	});
	
	
	
}
//********************************************************************
function validateEmail(email) 
{
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
}
//********************************************************************
function showSuccessMsg(){
	 $('#modalDialog').modal('hide');
	 $( "#cstmMsg" ).effect( "slide","", 500, animateCallback );
	 vName = "";
	 vEmail ="";
	 vMob ="";
	 vMsg ="";
	 
}
//********************************************************************
function sendContactInfo(){
	
	//alert("name---"+vName+" &email---"+vEmail+" subject---"+vMsg+"mob-----"+vMob);
	if(vName !="" && vEmail !="" && vMsg !="" && vMob !=""){
		var vUrl =  "sendMail.php?&name="+vName+"&email+"+vEmail+"&subject"+vMsg+"&mob"+vMob;
		http_services_SendData(vUrl, "", sendContactInfo_Handler);
		$('#modalDialog').modal('show');
		setTimeout(showSuccessMsg,1000);
	}
	else{
		
		$("#lblError").html('All Feilds Are Mandatory!!!');
		$( "#conctactFormCntnr" ).effect( "bounce","", 500);
		
	}
	
}
//*****************************************************************************************************
function sendContactInfo_Handler()
{
   var xmlData = xmlhttp.responseText;
   if(xmlData == "DONE")
   {
	   showSuccessMsg();
   }
}
//*****************************************************************************************************
function findElemntRenderedCordinates(objId)
{
	var JQid = "#"+objId;
	var top = $(JQid).offset().top;
	var left = $(JQid).offset().left;
	var str = top.toString()+"##"+left.toString();
	return str;
}
//*****************************************************************************************************