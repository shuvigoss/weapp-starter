# weapp-starter
starter for wechat mini program

# 特性
1. 支持npm,通过npm可下载相应组件
2. 支持微信api promise化
3. 支持实时log功能
4. 增加[weui](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html)组件 

# 安装依赖
![image](https://user-images.githubusercontent.com/3062921/77725652-f470dd80-7030-11ea-8850-77fef1cebb77.png)

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