
/*登陆信息*/
if(sessionStorage.usertoken){
var usertoken=sessionStorage.usertoken;
var userRole=sessionStorage.userRole;
var usercode=sessionStorage.usercode;
//var city=JSON.parse(sessionStorage.city);
//var loginUser=JSON.parse(sessionStorage.loginUser);
//var shop=JSON.parse(sessionStorage.shop);
//var list=JSON.parse(sessionStorage.list);
//var listShopCommunity=JSON.parse(sessionStorage.listShopCommunity);
//var listCommunity=JSON.parse(sessionStorage.listCommunity);
}
else{
	location.href="login.html";
}





function timeToMilli(time){
	
		return new Date(time).getTime();
	
	
}
function milliToTime1(milli) {
		var timeDate =  new Date(milli);
		var month = timeDate.getMonth() + 1;
		var time = "" + timeDate.getFullYear() + "/"
				+ ((month < 10) ? "0" + month : month) +"/"
				+ ((timeDate.getDate() < 10) ? "0" + timeDate.getDate() : timeDate.getDate()) ;
		return time;
	}
var milliToTime=function(milli) {
		var timeDate =  new Date(milli);
		var month = timeDate.getMonth() + 1;
		var time = "" + timeDate.getFullYear() + "/"
				+ ((month < 10) ? "0" + month : month) +"/"
				+ ((timeDate.getDate() < 10) ? "0" + timeDate.getDate() : timeDate.getDate()) + " "
				+ ((timeDate.getHours() < 10) ? "0" + timeDate.getHours() : timeDate.getHours()) + ":"
				+ ((timeDate.getMinutes() < 10) ? "0" + timeDate.getMinutes() : timeDate.getMinutes());
		return time;
	}