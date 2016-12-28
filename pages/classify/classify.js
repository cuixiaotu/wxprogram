var app = getApp()
Page({
    data: {
        curNav: 1,
		curIndex: 0
  
       

    },
    onLoad: function() {

        var that = this
        
        wx.request({
            url: 'http://localhost/shop/index.php/Home/List/index.html',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {

                console.log(res)
                that.setData({
                    //navLeftItems: res.data,
                    //navRightItems: res.data,
                    listsinfo:res.data   
                })
            }
        })
    },
    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
            console.log(e)
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})