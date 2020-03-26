# weapp-starter
starter for wechat mini program

# 特性
1. 支持npm,通过npm可下载相应组件
2. 支持微信api promise化
3. 支持实时log功能

# 例子
## api promise
```
const wxp = require('./utils/wxp')

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
```


## 实时日志
```
const log = require('./utils/log')

log.info(`App onLaunch`)
```