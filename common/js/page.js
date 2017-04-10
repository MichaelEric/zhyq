//分页列表
    var pageIndex = 1;     //页面索引初始值  
    var pageSize = 10;     //每页显示条数初始化，修改显示条数，修改这里即可  
    var total;
function pager(pageIndex,pageSize,fn){
	pageIndex=pageIndex-1;
     	InitTable(pageIndex);
        	var opts={callback: PageCallback,  //PageCallback() 为翻页调用次函数。
                  prev_text:"<i></i>上一页",
			      next_text:"下一页 <i></i>",
                  items_per_page:pageSize,
                  num_edge_entries: 1,      //两侧首尾分页条目数
                  num_display_entries:4,    //连续分页主体部分分页条目数
                  current_page: pageIndex,  //当前页索引
                  ellipse_text:"...",
        	     
        	}
        	 function PageCallback(index, jq) { 
                    InitTable(index); 
                }  
                
         function InitTable(pageIndex) { 
            currentPage= pageIndex;
		    fn(currentPage);
         }  
         setTimeout(function(){
         	$("#Pagination").pagination(total,opts);
         },1000)
	     
	}