var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 6000,
        duration: 1200,
        goodsInfo:[]
    },

    onLoad: function(options) {

      var that = this  
      wx.request({
            url: 'http://localhost/shop/index.php/Home/Goodsinfo/index.html?goodsid=' + options.goodsid,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {     
            that.setData({
                    goodsInfo: res.data
                }) 
                }  
            })




        // 商品详情
      /*    wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data.data);
            that.data.shopppingDetails = res.data.data;
                var goodsPicsInfo = [];
                var goodsPicsObj = {};
                var goodspic = res.data.data.goodspics;
                var goodspics = goodspic.substring(0, goodspic.length - 1);
                var goodspicsArr = goodspics.split("#");
                for (var i = 0; i < goodspicsArr.length; i++) {
                    goodsPicsInfo.push({
                        "picurl": goodspicsArr[i]
                    });
                }
                that.setData({
                    goodsPicsInfo: goodsPicsInfo

                })
            }
        }) */  

    },
 addshopcar:function(){
   var that=this 
   //console.log(that.data.goodsInfo)
    wx.showToast({
     title: '加入购物车成功',
     icon: 'success',
    duration: 2000
    })
     ,
     wx.setStorage({
      key:"shopcarkey",
      data:that.data.goodsInfo,
     })





     }
})
