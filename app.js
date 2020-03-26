const wxp = require('./utils/wxp')
const log = require('./utils/log')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    log.info(`App onLaunch`)

    // 登录
    wxp.login()
      .then(res => {
        return wxp.getSetting()
      })
      .then(res => {
        return res.authSetting['scope.userInfo'] ? wxp.getUserInfo() : Promise.resolve(undefined)
      })
      .then(res => {
        if (!res) return
        this.globalData.userInfo = res.userInfo
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
      })
  },
  globalData: {
    userInfo: null
  }
})