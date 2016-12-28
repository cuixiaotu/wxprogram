//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    username:'',
    password: '',
    numShow: false,
    psdShow: false,
    userInfo: {},
    istrue:'',
    logininfo:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../my/index'
    })
  },
  bindNumInput: function(e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username)
  },
  bindPsdInput: function(e) {
    this.setData({
      password: e.detail.value
    })
    console.log(this.data.password)
    if(logininfo){
    this.setData({logininfo:""})
    }
  },
  numChange: function(e) {
    if(this.data.username == '') {
      this.data.numShow = true;
      console.log('手机号不能为空' + this.data.numShow);
    }
  },
  psdChange: function(e) {
    if(this.data.password == '') {
      this.data.psdShow = true;
      console.log('密码不能为空' + this.data.psdShow);
      
    }
  },
  loginSubmit: function(e) {
    var that =this
    if(this.data.username != '' && this.data.password != '') {
      wx.request({
        url: 'http://localhost/api/index.php/home/reg/index',
        data: {username:this.data.username,
        password:this.data.password},
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }, // 设置请求的 header
        success: function(res){
          // success
          console.log(res.data)   


          if(res.data==1){
            app.globalData={userinfo:1}
            wx.redirectTo({
              url: '../my/index'
            })
          }else{

      wx.showToast({
      title: '密码错误',
      icon: 'error',
      duration: 2000
      })
 


  
          }
        }

      })

    }else if(this.data.username == '') {
      this.data.numShow = true;
      wx.showToast({
      title: '账号输入有误',
      icon: 'error',
      duration: 2000
      })
     
    }else if(this.data.password == '') {
      this.data.psdShow = true;
      wx.showToast({
      title: '密码输入有误',
      icon: 'error',
      duration: 2000
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({userInfo: res.userInfo})
            that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  }
})
