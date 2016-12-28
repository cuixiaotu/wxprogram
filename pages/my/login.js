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
    istrue:''
  },
  reg:function(){
    wx.navigateTo({
      url: '../my/reg'
    })
  },
  bindNumInput: function(e) {
    this.setData({
      username: e.detail.value
    })
    //console.log(this.data.username)
  },
  bindPsdInput: function(e) {
    this.setData({
      password: e.detail.value
    })
    //console.log(this.data.password)

  },
  loginSubmit: function(e) {
  var that =this
  wx.getStorage({
    key: 'userinfo',
    success: function(res) {
       console.log(res.data)
   } 
  })


    if(this.data.username != '' && this.data.password != '') {
      wx.request({
        url: 'http://localhost/api/index.php/home/reg/index',
        data: {username:this.data.username,
        password:this.data.password},
        method: 'POST', 
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }, // 设置post请求的 header
        success: function(res){
          // success
          console.log(res.data)   

          if(res.data==1){
            app.globalData={userinfo:{username:that.data.username,
            password:that.data.password}
            }
            //保存在缓存里 下次不用输入账号密码
            wx.setStorage({
              key: 'userinfo',
              data: {username:that.data.username,
                     password:that.data.password},
              success: function(res){
                // success
              wx.redirectTo({
              url: '../my/index'
            })
              }
            })
      }else{

      wx.showToast({
      title: '账号密码错误，请核实后再输入',
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
