myapp.controller("shopCtrl",function($http,$scope,$stateParams,$state){
    var pageIndex=$stateParams.page;
    pager(pageIndex,pageSize,getList)
    function getList(pageIndex){
    if(!usertoken){
        location.href="login.html"
    }else {
        $http({
            method: "post",
            url: "http://rkw.ngrok.cc/wisdompark/surroundShop/getSurroundShopList",
            params: {
                token:usertoken,
                pageNumber:"2",
                currentPage:(pageIndex+1),
                pageSize:pageSize
            }
        }).success(function (data) {
            console.log(data.data);
            console.log(sessionStorage);
            if (data.returncode == 200) {
                $scope.shopdata = data.data;
                $scope.pagelist=parseInt(data.page.page)+1;
                total=data.page.total;
                console.log($scope.shopList);
            }
        })
    }
        $scope.detail=function(id,page){
            //console.log(page)
            $state.go("detail",{id:id,page:page});
        }
    }
})