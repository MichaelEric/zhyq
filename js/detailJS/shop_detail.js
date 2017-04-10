myapp.controller("shopdetailCtrl",function($http,$scope){
    if(!usertoken){
        location.href = "login.html"
    }else{
        $http({
            method:"post",
            url:"http://192.168.1.30:8080/wisdompark/surroundShop/addSurroundShop",
            params:{
                token:usertoken,
                name:"dadasdasdad",
                type:"00201"
            }
        }).success(function(data){
            console.log(data);
        })
    }
})