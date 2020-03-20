//index.js
//获取应用实例
Page({
  data: {
    background: ['green', 'yellow', 'blue'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    tabs: [{
        "time": "26日",
        "text": "往期精选"
      },
      {
        "time": "10:00",
        "text": "预热中"
      }, {
        "time": "12:00",
        "text": "预热中"
      }, {
        "time": "14:00",
        "text": "预热中"
      }, {
        "time": "16:00",
        "text": "预热中"
      }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    quiteBuy:["1","2"],
    isHave:false, // 无货
    goodsInfo: ["1", "2", "3", "4", "5"] //列表模板数据
  },

  onLoad: function() {
    var that = this;
   
  },
  // 点击添加到购物车
  handleAddCard:function(){
    console.log(1)
    wx.switchTab({
      url: '../pages/card/card.html',
    })
  },
  // 點擊切換
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }

})