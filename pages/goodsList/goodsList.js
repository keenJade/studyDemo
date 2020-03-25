// pages/goodsList/goodsList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "护肤",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: "洁面皂",
            image:
              "https://img.alicdn.com/imgextra/i1/121515222/O1CN014aQtAS1oRiqTCPads_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 2,
            name: "卸妆",
            image:
              "https://img.alicdn.com/imgextra/i2/111006239/O1CN01jIWIk81vxVZ8NMw1J_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 3,
            name: "洁面乳",
            image:
              "https://img.alicdn.com/imgextra/i2/409850001/O1CN01aToG8P1BsUzEq6qb9_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 4,
            name: "面部祛角质",
            image:
              "https://img.alicdn.com/imgextra/i2/99288432/O1CN01wWZycn2C9uDTfz0cM_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "彩妆",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: "气垫bb",
            image:
              "https://img.alicdn.com/imgextra/i4/43132864/O1CN01dACYFr1X1kvG13mBB_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 2,
            name: "修容/高光",
            image:
              "https://img.alicdn.com/imgextra/i3/52553327/O1CN013LtSmO1aRoIlga57g_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 3,
            name: "遮瑕",
            image:
              "https://img.alicdn.com/imgextra/i4/277880161/O1CN01VGrhgv1D3mM506D4f_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 4,
            name: "腮红",
            image:
              "https://img.alicdn.com/imgextra/i3/874180081/O1CN01HIjDar1CT8fds6mcc_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 5,
            name: "粉饼",
            image:
              "https://img.alicdn.com/imgextra/i4/26336502/O1CN01ncJNjT1xtxoFeCO8c_!!0-saturn_solar.jpg_220x220.jpg_.webp"
          },
          {
            child_id: 6,
            name: "粉底",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
          },
          {
            child_id: 7,
            name: "蜜粉/散粉",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
          },
          {
            child_id: 8,
            name: "隔离霜",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "香水/香氛",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: "淡香水EDT",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
          },
          {
            child_id: 2,
            name: "浓香水EDP",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
          },
          {
            child_id: 3,
            name: "香体走珠",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
          },
          {
            child_id: 4,
            name: "古龙香水男士的最爱",
            image:
              "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1, //控制当前按钮点亮
    curIndex: 0 //获取对应的数据
  },
  // 点击左侧tab事件
  switchRightTab(e) {
    let tabId = e.target.dataset.id,
      tabIndex = parseInt(e.target.dataset.index);
    this.setData({
      curNav: tabId,
      curIndex: tabIndex
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
