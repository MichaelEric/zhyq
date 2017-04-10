
jQuery(document).ready(function() {

    

    $('.page-container  .username, .page-container  .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });
   $("#login").click(function(){
   	    login()
   })
   	//键盘按下触发登陆
			$(document).keydown(function (event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				if(e && e.keyCode==13){ 
	               login()
	            }
			});
 function login(){
 	var username="";
 	var password="";
       username = $('.username').val();
       password = $('.password').val();
        if(username == '') {
            $(".page-container").find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(".page-container").find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(password == '') {
            $(".page-container").find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(".page-container").find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
	        else {
	        	console.log(username)
	        	$.ajax({
	        	  type:"post",
	        	  url:"http://189.ganinfo.com:9080/wisdomPark-web/user/login",
	        	  data:{
	        	  	"username":username,
	        	  	"password":password,
	        	  	"app_id":"public"
	        	  },
	        	  async:false,
	        	  success:function(data){
	        	  	if(data.code==200){
	        	  		console.log(data)
	        	  		sessionStorage.usertoken = data.data.loginFlag;
	        	  		sessionStorage.usercode  = data.data.userId;
	        	  		sessionStorage.userRole  = data.data.userRole;
	        	  		
	        	  	 window.location.href="index.html";
	        	  	}else if(data.code==201){
	        	  		alert("用户名或者密码错误");
	        	  	}else if(data.code==10001){
	        	  		alert("格式不正确")
	        	  	}else if(data.code==10002){
	        	  		alert("重新登录")
	        	  	}else if(data.code==49999){
	        	  		alert("数据异常")
	        	  	}
	        	  }
	        	})
	        		
	        	
	        	
	        	
	        }
   	    }
});
