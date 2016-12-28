var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: '',
    userListInfo: [  {
      icon: '../../images/iconfont-dingdan.png',
      text: '会员签到',
      id:'vipsign',
      clickEvent:'vipsign'
    },{
      icon: '../../images/iconfont-dingdan.png',
      text: '我的订单',
      id:'order',
      cilckEvent:'order',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../../images/footer-icon-03.png',
        text: '我的购物车',
        id:'shopcar',
        cilckEvent:'shopcar',
        isunread: true,
        unreadNum: 2
      }, {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '收货地址管理',
        id:'addr',
        cilckEvent:'shopcar'
      }, {
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服',
        id:'service',
        clickEvent:'contactService'
      }, {
        icon: '../../images/iconfont-help.png',
        text: '常见问题',
        id:'problem',
        clickEvent:'problem'
      }]
  },
  onLoad: function() {
   if(app.globalData.userinfo==null){
     wx.redirectTo({
       url: '../my/login'
     })
   }
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
vipsign:function(){
 wx.request({
  url: '', //仅为示例，并非真实的接口地址
  data: {
   
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
  }
})
  wx.showModal({
  title: '签到成功',
  content: '获得1点积分',
  success: function(res) {
     if (res.confirm) {
       console.log('用户点击确定')
     }
  }
})
},
 contactService:function(){
   wx.makePhoneCall({
  phoneNumber: '0770-1234567' //上线后修改电话号
})
 }


})
