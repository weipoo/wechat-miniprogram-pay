### 微信小程序调用微信支付的解决方案demo
#### 需要解决的问题：
通过h5访问的形式访问目标支付网站后发起小程序微信支付。
#### 解决的方案与解决方法：
1. 解决方案：
在最终调用统一支付域名下的页面中添加**微信小程序调用微信支付业务代码**（自己写好后给到目标网页，下面会给出示例），代码将会判定当前访问环境是否为小程序，如果判定为小程序访问环境的话，将会把调用微信支付的参数传递到小程序具体支付页面来发起微信支付，该方案适用于所有小程序调用微信支付，也方便后期扩展更多小程序业务。

2. 解决办法：
    
1）**微信小程序端：**    
```
目录结构
project-name
├── pages
│   ├── index               // demo演示首页
│   ├── web-page            // h5访问通用页
│   ├── wxpay               // 发起微信支付页
├── app.js                  
├── app.json
├── app.wxss   
└── project.config.json     // 小程序配置文件 
```   
[微信支付小程序源码Demo](https://github.com/weipoo/wechat-miniprogram-pay/tree/master/miniprogram-demo)

2）**h5端：**


* 将下面的微信小程序调用[微信支付业务代码](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/pay-h5-demo/index.html)放入支付发起页面中;
![](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/code-01.jpg)

* 修改微信支付业务代码参数（时间戳、随机串、prepay_id、签名方式、支付签名等）；
![](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/code-02.jpg)

* 页面校验一下params参数数据拼接正常就行，后面的小程序这边会做校验；
![](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/code-03.jpg)

* 启动index.html页面作为网站；（也可以直接放到你自己的网站上，这里采用python指令本地化启动模拟网站）
```
python -m SimpleHTTPServer
```
![](https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/code-04.jpg)


#### 测试最终结果
1. 在微信小程序中点击访问目标微信支付页面；
<img src="https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/demo-01.jpg" width="375" height="667" />

2. 进入微信支付h5页面，校验访问环境是否为微信小程序访问，若是则处理微信支付参数传递跳转微信支付页面；
<img src="https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/demo-02.jpg" width="375" height="667" />

3. 来到微信支付页面，执行微信支付。
<img src="https://github.com/weipoo/wechat-miniprogram-pay/blob/master/images/demo-03.jpg" width="375" height="667" />





