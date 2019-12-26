// pages/8Event/8Event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names: ['kobe','harden','curry']
  },

  handleTouchStart(event) {
    console.log(event)
  },
  handleTouchMove(event) {
    console.log(event)
  },
  handleTouchEnd(event) {
    console.log(event)
  },
  handleTouchPress(event) {
    console.log(event)
  },

  // 事件传参
  handleItemClick(event){
    console.log(event.currentTarget.dataset.name)
  },

  // 事件捕获 与 事件冒泡
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
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