var xmlhttp;
//**************************************************************************
function http_services_SendData(vurl,params,callbackFunction)
{
    alert("vurl----->" + vurl);
	if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
		    callbackFunction();
        }
    };
    xmlhttp.open("POST",vurl,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(params);  
}
//**************************************************************************



