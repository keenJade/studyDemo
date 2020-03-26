// pages/car/car.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carLists: [
      {
        car_id: 1,
        isSelected: true,
        name: "这是一个美丽的衣服需要你来用",
        image:
          "https://img.alicdn.com/imgextra/i1/121515222/O1CN014aQtAS1oRiqTCPads_!!0-saturn_solar.jpg_220x220.jpg_.webp",
        price: 45.0,
        describe: "的角度看是开发就是点击框架都是疯狂加卡死了就",
        inputValue: 2
      },
      {
        car_id: 2,
        isSelected: false,
        name: "这是一个美丽的衣服需要你来用",
        image:
          "https://img.alicdn.com/imgextra/i1/121515222/O1CN014aQtAS1oRiqTCPads_!!0-saturn_solar.jpg_220x220.jpg_.webp",
        price: 45.0,
        describe: "的角度看是开发就是点击框架都是疯狂加卡死了就",
        inputValue: 1
      },
      {
        car_id: 3,
        isSelected: true,
        name: "这是一个美丽的衣服需要你来用",
        image:
          "https://img.alicdn.com/imgextra/i1/121515222/O1CN014aQtAS1oRiqTCPads_!!0-saturn_solar.jpg_220x220.jpg_.webp",
        price: 45.0,
        describe: "的角度看是开发就是点击框架都是疯狂加卡死了就",
        inputValue: 12
      }
    ],
    noData: false, // 购物车有没有数据
    totalMoney: 0, //总金额
    selectAllStatus: false, // 是否全选
    uid: 0, // 用户id
    totalCount: 1, // 总的数量
    allNum: 0 // 当前购物车共有商品
  },
  // 结算
  handleAccount() {
    const _this = this;
    let carLists = _this.data.carLists,
      total = 0,
      num = 0;
    for (let i = 0; i < carLists.length; i++) {
      if (carLists[i].isSelected) {
        num += carLists[i].inputValue;
        total += parseInt(carLists[i].inputValue * carLists[i].price);

        console.log(num, total);
      }
    }
    _this.setData({
      carLists: carLists,
      totalCount: num,
      totalMoney: total.toFixed(2)
    });
  },
  // 减少数量
  handleDecrease(e) {
    const _this = this;
    const tarIndex = e.target.dataset.index;
    let carLists = _this.data.carLists;
    let inputValue = carLists[tarIndex].inputValue;
    if (inputValue < 1) return false;
    inputValue -= 1;
    carLists[tarIndex].inputValue = inputValue;
    _this.setData({
      carLists: carLists
    });
  },
  // 增加数量
  handleIncrease(e) {
    const _this = this;
    const tarIndex = e.target.dataset.index;
    let carLists = _this.data.carLists;
    let inputValue = carLists[tarIndex].inputValue;
    inputValue += 1;
    carLists[tarIndex].inputValue = inputValue;
    _this.setData({
      carLists: carLists
    });
  },
  // 全选
  handleAllSelected(e) {
    const _this = this;
    let selectAllStatus = _this.data.selectAllStatus;
    let carLists = _this.data.carLists;
    selectAllStatus = !selectAllStatus;
    for (let i = 0; i < carLists.length; i++) {
      carLists[i].isSelected = selectAllStatus;
    }
    _this.setData({
      carLists: carLists,
      selectAllStatus: selectAllStatus
    });
  },
  // 是否选择
  handleClickBtn: function(e) {
    const _this = this;
    const tarIndex = e.target.dataset.index;
    let carLists = _this.data.carLists;
    const isSelected = carLists[tarIndex].isSelected;
    carLists[tarIndex].isSelected = !isSelected;

    _this.setData({
      carLists: carLists,
      selectAllStatus: false
    });
  },

  // 去逛逛
  handleGoToLook: function() {
    wx.switchTab({
      url: "/pages/index/index"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
