var app = getApp()
Page( {
  data: {
    cartImg: '../../images/cart-null.png',
    tipWords: '购物车空空如也'
  },
  onLoad:function(){
    var that=this
    wx.getStorage({
      key: 'shopcarkey',
      success: function(res){
        console.log(res)
       that.setData({shopcarinfo:res.data})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  paymuch:function(){

  console.log('aaaa')
  wx.requestPayment({
    timeStamp: +new Date(),
    nonceStr: 'String1',//随机串
    package: 'prepay_id=u802345jgfjsdfgsdg888',
    signType: 'MD5',
    paySign: '70EA570631E4BB79628FBCA90534C63FF7FADD89',//微信签名
    success: function(res){
    if(res.err_msg == "get_brand_wcpay_request：ok") {
      console.log('支付成功')
    }   
    // res.err_msg将在用户支付成功后
    // success
      console.log("支付成功"+res)
      //成功以后清除
      wx.clearStorage({
        key: 'shopcarkey',
        success: function(res){
          // success
          console.log(res)
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      }) 

    },
    fail: function() {
      // fail
      console.log("支付失败")
    },
    complete: function() {
      // complete
      console.log("支付完成 不知道成功还是失败")
    }
  })


  }

})
