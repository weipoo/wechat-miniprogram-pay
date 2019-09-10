### 微信小程序调用微信支付的解决方案demo
#### 需要解决的问题：
通过h5访问的形式访问目标支付网站后发起小程序微信支付。
#### 解决的方案与解决方法：
1. 解决方案：
在最终调用统一支付域名下的页面中添加**微信小程序调用微信支付业务代码**（自己写好后给到目标网页，下面会给出示例），代码将会判定当前访问环境是否为小程序，如果判定为小程序访问环境的话，将会把调用微信支付的参数传递到小程序具体支付页面来发起微信支付，该方案适用于所有小程序调用微信支付，也方便后期扩展更多小程序业务。

2. 解决办法：

* 将下面的微信小程序调用[微信支付业务代码]()放入支付发起页面中

![](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/demo-01.jpg)




**页面启动静态网站方式：**
`python -m SimpleHTTPServer`

访问h5页面配置：


```
let wechatPay = {
      used: true, // 使用微信支付页面
      payWebShowed: false, // 浏览支付页
      cecursWebShowed: false // 浏览支付校验页
    };
    globalData.wechatPay = wechatPay;
    
    let path='http://172.16.8.12:8000/';
    wx.navigateTo({
          url: sdk.urlJoinParams('/pages/gsd-ui/g-web-page/g-web-page', {
            h5Url: encodeURIComponent(path),
            title: '微信支付h5'
          })
    });
```

