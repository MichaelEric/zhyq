myapp.controller("property_repairCtrl",function($scope,$state){
	$scope.repair_detail=function(){
		$state.go("property_repairdetail")
	}
})