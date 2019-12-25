// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'this is a title',
    name:'eaiso',
    age: 20,
    student: [
      { id: 100, name: 'james', age: 27 },
      { id: 101, name: 'kobe', age: 28 },
      { id: 102, name: 'harden', age: 25 },
      { id: 103, name: 'curry', age: 25 }
    ],
    counter: 0
  },

  /**
   * 按钮监听 点击时 counter + 1
   */
  handleBtnAdd(){
    console.log("点击+按钮"),
    
    // 1. 错误做法，界面不会刷新
    // this.data.counter += 1,
    
    // 2. this.setData()
    this.setData({
      counter: this.data.counter + 1
    }),

    console.log('counter : ' + this.data.counter)
  },

  /**
   * 按钮监听 点击时 counter - 1
   */
  handleBtnSub() {
    console.log("点击-按钮"),
    this.setData({
      counter: this.data.counter - 1
    }),
    console.log('counter : ' + this.data.counter)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('面初次渲染完成')
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
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户下拉动作')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉触底')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('点击右上角分享')
  }
})