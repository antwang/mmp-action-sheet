// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    actionSheetStatus: false
  },
  // 事件处理函数
  bindGetUserInfo(e) {
    console.log(e)
  },
  showActionSheet() {
    this.setData({actionSheetStatus: true})
  },
  onLoad() {}
})
