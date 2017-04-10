myapp.controller("orderdetailCtrl",function($scope,$http,$state,$stateParams){
	var id=$stateParams.id;
	$scope.page=($stateParams.page-1);
	
	$scope.order=function(page){
		$state.go("order",{page:page});
	}
	function getorderdetail(){
		$scope.statusss=false;
		$scope.statusss2=false;
		$scope.statusss3=false;
		if(!usertoken){
			location.href="login.html"
		}else{
			$http({
				method:'post',
				url:"http://189.ganinfo.com:9080/wisdomPark-web/serviceBook/searchDetailServiceBook",
				params:{
					token:usertoken,
					id:id,
					usercode:userRole
				}
			}).success(function(data){
				console.log(data.data)
				if(data.code==200){
					$scope.orderdetail=data.data;
					console.log($scope.orderdetail);
					$scope.m_id=data.data.id;
					$scope.m_appId=data.data.appId;
					$scope.staffphone=data.data.staffphone;
					var status=data.data.status;
					var statuslist=[];
					var statusdetail=[{
							"status":"1",
							"liclassname":"Ydcolor",
							"text":"服务单号",
							"childclassname":"",
							"value":data.data.sernum
						},{
							"status":"1",
							"liclassname":"",
							"text":"预约人姓名",
							"childclassname":"",
							"value":data.data.username
						},{
							"liclassname":"",
							"text":"联系电话",
							"childclassname":"",
							"value":data.data.phone
						},{
						    "liclassname":"",
							"text":"下单时间",
							"childclassname":"xdtime",
							"value":milliToTime(data.data.createDate)	
						},{
							"liclassname":"",
							"text":"预约时间",
							"childclassname":"",
							"value":data.data.resertime	
						},{
							"liclassname":"",
							"text":"预约内容",
							"childclassname":"",
							"value":data.data.sername	
						}];
					if(status=="1"){
						$scope.statusss=true;
						$scope.statusss2=true;
						statuslist=[{
							"status_name":"待指派"
						}];
						
						
					}else if(status=="2"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						}];
						var obj={
							"liclassname":"",
							"text":"接单负责人",
							"childclassname":"xdtime",
							"value":data.data.staffname+" "+data.data.staffphone	
						}
						statusdetail.push(obj);
						
						$scope.statusss2=true;
					}else if(status=="3"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						},{
							"status_name":"待用户确认价格"
						}];
						var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						statusdetail.push(obj,obj2);
					}else if(status=="4"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						},{
							"status_name":"待用户确认价格"
						},{
							"status_name":"用户已确认价格"
						}];
						var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						statusdetail.push(obj,obj2);
					}else if(status=="5"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						},{
							"status_name":"待用户确认价格"
						},{
							"status_name":"用户已确认价格"
						},{
							"status_name":"在线支付完成"
						}];
						var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						var obj3={
							"liclassname":"",
							"text":"付款方式",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						var obj4={
							"liclassname":"",
							"text":"在线支付",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						statusdetail.push(obj,obj2,obj3,obj4);
						
						
					}else if(status=="6"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						},{
							"status_name":"待用户确认价格"
						},{
							"status_name":"用户已确认价格"
						},{
							"status_name":"用户线下支付"
						}];
						var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						var obj3={
							"liclassname":"",
							"text":"付款方式",
							"childclassname":"",
							"value":data.data.paytype==1?"线上支付":"线下支付"	
						}
						
						statusdetail.push(obj,obj2,obj3);
						$scope.statusss3=true;
					}else if(status=="7"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"已指派"
						},{
							"status_name":"待用户确认价格"
						},{
							"status_name":"用户已确认价格"
						},{
							"status_name":"用户线下支付"
						},{
							"status_name":"已线下收款"
						}];
						var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						var obj3={
							"liclassname":"",
							"text":"付款方式",
							"childclassname":"",
							"value":data.data.paytype==1?"线上支付":"线下支付"	
						}
						var obj4={
							"liclassname":"",
							"text":"实付费用",
							"childclassname":"fepay",
							"value":data.data.realprice	
						}
						var obj5={
							"liclassname":"",
							"text":"收费备注",
							"childclassname":"",
							"value":data.data.wfeeremark	
						}
						statusdetail.push(obj,obj2,obj3,obj4,obj5);
						
					}else if(status=="8"){
						if(data.data.realprice){
							statuslist=[{
								"status_name":"待指派"
							},{
								"status_name":"已指派"
							},{
								"status_name":"待用户确认价格"
							},{
								"status_name":"用户取消"
							}];
							var obj={
							"liclassname":"",
							"text":"应付费用",
							"childclassname":"fepay",
							"value":data.data.fee	
						}
						var obj2={
							"liclassname":"",
							"text":"费用备注",
							"childclassname":"",
							"value":data.data.feeremark	
						}
						statusdetail.push(obj,obj2);
						}else{
							statuslist=[{
							"status_name":"待指派"
							},{
								"status_name":"用户取消"
							}];
						}
						
					}else if(status=="9"){
						statuslist=[{
							"status_name":"待指派"
						},{
							"status_name":"后台取消"
						}];
					}
					$scope.status_list=statuslist;
					$scope.status_detail=statusdetail;
					
					
				}
			})
		}
	}
	getorderdetail()
	$scope.cancle=function(id,app_id,staffphone){
		if(!usertoken){
			location.href="login.html"
		}else{
			
			$http({
				method:"post",
				url:"http://189.ganinfo.com:9080/wisdomPark-web/serviceBook/deleteBook",
				params:{
					token:usertoken,
					id:id,
					app_id:"web"
				}
			}).success(function(data){
				if(data.code==200){
					console.log(data);
					swal({
					  title:"取消成功",
					  text:"",
					  type:"success",
					  animation:"slide-from-top"
					 });
					getorderdetail()
				}
			})
		}
	}
	 function assign(){
	 	$http({
	 		method:"post",
	 		url:"http://189.ganinfo.com:9080/wisdomPark-web/user/searchStaff",
	 		params:{
	 			token:usertoken
	 		}
	 	}).success(function(data){
	 		if(data.code==200){
	 			$scope.assignlist=data.data
	 		}
	 	})
	 }
	 assign()
	 $scope.ZP=function(){
	 	console.log($scope.chosename.mobile);
	 	var iid=angular.element("#assign").attr("iid");
	 	var empid=$scope.chosename.userId;
	 	var empName=$scope.chosename.name;
	 	var mobile=$scope.chosename.mobile;
	 	if(!usertoken){
			location.href="login.html"
		}else{
			console.log(usertoken+" "+iid+" "+empid+" "+mobile+" "+empName)
	 	$http({
	 		method:'post',
	 		url:"http://189.ganinfo.com:9080/wisdomPark-web/serviceBook/updateFWZP",
	 		params:{
	 			token:usertoken,
	 			id:iid,
	 			empId:empid,
	 			app_id:"public",
	 			empName:empName,
	 			staffphone:mobile
	 		}
	 	  }).success(function(data){
	 	  	  if(data.code==200){
	 	  	  	  getorderdetail()
	 	  	  }
	 	  })
	 	}
	 }
	 $scope.pay=function(id){
	 	  var fee=$scope.paymoney;
	 	  if(!usertoken){
			location.href="login.html"
		}else{
			$http({
				method:"post",
				url:"http://189.ganinfo.com:9080/wisdomPark-web/serviceBook/updatePay",
				params:{
					token:usertoken,
					id:id,
					app_id:"web",
					paytype:"2",
					fee:fee
				}
			}).success(function(data){
				if(data.code==200){
					swal({
					  title:"线下支付成功",
					  text:"",
					  type:"success",
					  animation:"slide-from-top"
					 });
					 getorderdetail()
				}
				console.log(data)
			})
		}
	 }
})
  