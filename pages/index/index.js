const wxp = require('../../utils/wxp')

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    showDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
  },
  //事件处理函数
  bindViewTap: function () {
    this.setData({ showDialog: true })
  },
  onLoad: function () {

  },
  tapDialogButton: function (e) {
    this.setData({ showDialog: false })
  }
})
