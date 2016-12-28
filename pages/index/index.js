//index.js
//获取应用实例
var app = getApp()
Page({
data: {
    imgUrls: [
      'http://m.tuniucdn.com/fb2/t1/G2/M00/CC/43/Cii-TFgOvDmIf4d6AALPCQLI3zEAADs_AHnwpYAAs8h00.jpeg',
      'https://source.qunarzz.com/site/images/wap/home/recommend/small/161121_dzs_bcdc.png',
      'https://source.qunarzz.com/site/images/wap/home/recommend/small/20161118_CPM_640x200.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1500,
    iconSize:20,
    iconType:'search',
    iconColor:'green',
    navIcons:[{iconPath:"/images/first/free.png"},{iconPath:"/images/first/drive.png"},{iconPath:"/images/first/package.png"},{iconPath:"/images/first/invoice.png"}],
    listItems:[{
    title:"今年冬天",
    content:"今年冬天，咱们出国玩耍吧",
    imgpath:"http://m.tuniucdn.com/fb2/t1/G2/M00/CC/43/Cii-TFgOvDmIf4d6AALPCQLI3zEAADs_AHnwpYAAs8h00.jpeg",
    },{
    title:"内蒙古欢迎您",
    content:"策马奔腾在大草原上上，享受天空和草原",
    imgpath:"http://pic4.40017.cn/index/slide/2016/12/02/19/aE8sEu.jpg",
    },{
    title:"欢乐世界",
    content:"欢乐世界，过山车大摆锤蹦极 来挑战你的极限吧",
    imgpath:"http://pic3.40017.cn/gny/line/2015/11/04/10/hNvyrp_600x300_00.jpg",
    }],
    abc: [
      'https://source.qunarzz.com/site/images/wap/home/recommend/small/20161118_CPM_640x200.jpg',
      '/images/first/free.png',
      '/images/first/free.png'
    ]
  },
//搜索景点 酒店
testa:function(){
wx.requestPayment({
  timeStamp: +new Date(),
  nonceStr: 'String1',
  package: 'String2',
  signType: 'MD5',
  paySign: 'String3',
  success: function(res){
    // success
    console.log(res)
  }
})
},
wxpay:function(){
  var pay_timestamp= Date.parse(new Date());
  var str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var non
  var packahe 


 wx.requestPayment({
   'timeStamp': '',
   'nonceStr': '',
   'package': '',
   'signType': 'MD5',
   'paySign': '',
   'success':function(res){
     console.log("成功")
   },
   'fail':function(res){
     console.log("失败"+res)
   }
})
},
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })

    })
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '微游宝', // 分享标题
      desc: '一起来尝试微游宝吧', // 分享描述
      path: '/page/index?id=123' // 分享路径
    }
  }
})
