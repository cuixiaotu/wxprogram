Page({
  data: {
    array: ['武汉', '南宁', '深圳', '台湾', '南京', '北京', '上海'],
    index: 1,
    airdata: "",
  },
  onLoad: function(){
   var myData=new Date
   var nowdata=myData.getFullYear()+"-"+(myData.getMonth()+1)+"-"+myData.getDate();
   var startdata=myData.getFullYear()+"-"+(myData.getMonth()+1)+"-"+myData.getDate();
   var enddata=(myData.getFullYear()+1)+"-"+(myData.getMonth()+1)+"-"+myData.getDate();
   this.setData({
       airdata:nowdata,
       startdata:startdata,
       enddata:enddata
      })

  },
  bindPickerChange: function(e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
    bindPickerChanged: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexd: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      airdate: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
})