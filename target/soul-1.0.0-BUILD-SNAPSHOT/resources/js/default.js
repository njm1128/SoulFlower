function comma(num){
    var len, point, str;  
    num = num + "";  
    point = num.length % 3 ;
    len = num.length;  
    str = num.substring(0, point);  
    while (point < len) {  
        if (str != "") str += ",";  
        str += num.substring(point, point + 3);  
        point += 3;  
    }  
    return str;
}

function checkExplorer() {
	var agent = navigator.userAgent.toLowerCase(); 
	if (agent.indexOf("msie") > -1 || agent.indexOf("trident") > -1) 
		return true;
	else
		return false;
}

$('.scrollbar-outer, .scrollbar-dynamic').scrollbar();