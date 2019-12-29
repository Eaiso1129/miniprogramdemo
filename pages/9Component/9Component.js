// pages/9Component/9Component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  // 处理组件事件
  handleIncrement(event){
    console.log(event.detail.name)
    this.setData({
      counter: this.data.counter + 1
    })
  },

  // 处理组件事件
  handleTabClick(event){
    console.log("点击了：",event.detail.title)
  },

  handleIncreCpn(event){
    const cpn = this.selectComponent('#my-cpn') // 可通过#id或.class获取组件对象
    cpn.handlePageControl() // 调用组件内自定义方法
    cpn.setData({ // 也可调用组件内置方法
      counter: cpn.data.counter + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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