//全局公用函数库
	   var curWwwPath = window.document.location.href;
       var pathName = window.document.location.pathname;
       var pos = curWwwPath.indexOf(pathName);
       var localhostPaht = curWwwPath.substring(0, pos);
       var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	   var src = localhostPaht + projectName;
function getQueryString(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
}
function checkPhone(phone){ 
	if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){ 
	  return false; 
	} else{
		return true;
	}
}
function download(){
	url = "download.html";
	window.location.href = url;
}

var server="http://101.37.84.151"
function PostAjax(url, data) {
    var r = {};
    $.ajax({
        url: server + url,
        type: 'POST',
        async: false,
        data: data,
        success: function ($data) {
            r = $data;
        }

    })
    return r;
}