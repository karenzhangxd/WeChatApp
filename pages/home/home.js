// pages/home/home.js
// getApp()可以获取App()产生的小程序对象
const app = getApp();
console.log(app.globalData.name);
// 注册页面
// 注册页面是可以做的事情
// 1 监听页面生命周期函数 
// 请求页面数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    msg: "hello",
    students: [{
      name: "cai",
      age: 10
    }, {
      name: "zhang",
      age: 30
    }]
  },
  add() {
    console.log('点击了');
    this.setData({
      count: this.data.count + 1
    })

  },
  sub() {
    console.log('点击了');
    this.setData({
      count: this.data.count - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面Home加载了");
    
    wx.request({
      url: 'http://127.0.0.1:3000/pipeline/getNums',
      
      success: (res) => {
        console.log(res);

      }


    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})