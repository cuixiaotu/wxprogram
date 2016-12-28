var app = getApp()
Page({
    data: {
   list: []


        
    },
    onLoad: function(options) {
        var that = this
        
        wx.request({
            url: 'http://localhost/shop/index.php/Home/Goods/index.html?pid=' + options.cityid,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                console.log(res)
                that.setData({
                   list: res.data,
                   cityid:options.cityid
                 
                });
            }
        })
    }

})