// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    telInput: "", //手机号
    pwdInput: "", //密码
    noTelInput: false,
    noPwdInput: false
  },

  //  // 实时获取input值
  bindPhoneInput: function(e) {
    console.log("tel" + e)
    this.setData({
      telInput: e.detail.value
    })
    this.setData({
      noTelInput: true
    })
    if (this.data.noTelInput == true && this.data.noPwdInput) {
      this.setData({
        disabled: false
      })
    }
  },
  bindPwdInput: function(e) {
    console.log("pwd" + e)
    this.setData({
      pwdInput: e.detail.value
    })
    this.setData({
      noPwdInput: true
    })
    if (this.data.noTelInput == true && this.data.noPwdInput) {
      this.setData({
        disabled: false
      })
    }
  },
  // 获取表单信息
  formSubmit: function(e) {
    wx.showLoading({
      title: '登录中···',
    })
    console.log(e.detail.value)
    this.setData({
      disabled: true
    })
    wx.request({
      url: "",
      data: {
        telInput: "121",
        pwdInput: "000000",
      },
      header: {
        "content-type": "application/json"
      },
      success: function(res) {
        console.log(res);
        if (res.statusCode == 200) {
          if (res.data.error == true) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.setStorageSync('student', res.data.data);
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 2000
            })
            setTimeout(function() {
              wx.switchTab({
                url: '../teacher/teacher',
              })
            }, 2000)
          }
        } else {
          wx.showToast({
            title: '服务器出现错误',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },

  // 点击确定登录
  gotobtn: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })
    // wx.login({
    //   success(res){
    //     console.log(res)
    //     if(res.code){
    //       //发起网络请求
    //       wx.request({
    //         url: '',
    //         data:{
    //           code:res.code
    //         }
    //       })
    //     }else{
    //       console.log("faile"+res.errMsg)
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      disabled: false
    })
    let tel = wx.getStorageSync("tel")
    if (typeof(tel) == "object" && tel.telInput != '' && tel.pwdInput != "") {
      wx.switchTab({
        url: "/pages/index/index.wxml"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    if (this.data.telInput == "" || this.data.pwdInput == "") {
      this.setData({
        disabled: true
      })
    } else {
      this.setData({
        disabled: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})