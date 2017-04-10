myapp.controller("orderCtrl",function($scope,$http,$state,$stateParams){
	var pageIndex=$stateParams.page;
	pager(pageIndex,pageSize,getList)
	
	function getList(pageIndex){
		
		if(!usertoken){
			location.href="login.html"
		}else{
			console.log(userRole+" "+usercode+" "+usertoken+" "+pageIndex+" "+pageSize)
			$http({
			method:"post",
			url:"http://189.ganinfo.com:9080/wisdomPark-web/serviceBook/searchServiceBook",
			params:{
				token:usertoken,
				app_id:"public",
				usercode:usercode,
				userRole:userRole,
				currentPage:(pageIndex+1),
				pageSize:pageSize
			}
		  }).success(function(data){
		  	 console.log(data)
		  	 if(data.code==200){
		  	 	$scope.orderlist=data.data;
		  	 	$scope.pagelist=parseInt(data.page.page)+1;
		  	 	
		  	 	total=data.page.total
		  	 }
		  })
		}
		
	}
	
	$scope.statusToName=function(status){
		if(status==0){
			return "";
		}
		else if(status==1){
			return "待指派"
		}
		else if(status==2){
			return "已指派"
		}
		else if(status==3){
			return "待用户确认价格"
		}
		else if(status==4){
			return "用户已确认"
		}
		else if(status==5){
			return "在线支付完成"
		}
		else if(status==6){
			return "线下支付"
		}
		else if(status==7){
			return "线下支付完成"
		}
		else if(status==8){
			return "用户取消"
		}else if(status==9){
			return "后台取消"
		}
		
	}
	$scope.milliToTime=function(milli) {
		var timeDate =  new Date(milli);
		var month = timeDate.getMonth() + 1;
		var time = "" + timeDate.getFullYear() + "/"
				+ ((month < 10) ? "0" + month : month) +"/"
				+ ((timeDate.getDate() < 10) ? "0" + timeDate.getDate() : timeDate.getDate()) + " "
				+ ((timeDate.getHours() < 10) ? "0" + timeDate.getHours() : timeDate.getHours()) + ":"
				+ ((timeDate.getMinutes() < 10) ? "0" + timeDate.getMinutes() : timeDate.getMinutes());
		return time;
	}
	$scope.detail=function(id,page){
		//console.log(page)
		$state.go("detail",{id:id,page:page});
	}
})