myapp.controller("repairdetailCtrl",function($scope,$state){
	$scope.repair=function(){
		$state.go("property_repair")
	}
})
