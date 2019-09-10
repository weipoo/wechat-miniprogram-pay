//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点我体验微信支付吧！'
  },
  onLoad: function () {
    
  },
  openPayPage() {
    // h5支付页面地址
    let path = 'http://172.16.8.52:8000/'; // (这里是测试用本地启动h5页面路径)
    wx.navigateTo({
      url: this.urlJoinParams('/pages/web-page/web-page', {
        h5Url: encodeURIComponent(path),
        title: '微信支付h5'
      })
    });
  },
  // 处理url链接，加入params参数
  urlJoinParams(url, params) {
    if (!url || !params || typeof params !== 'object') {
      return url;
    }
    const separate = url.indexOf('?') === -1 ? '?' : '&';
    const tempStr = Object.keys(params).map(key => {
      if (typeof params[key] === 'object') {
        params[key] = JSON.stringify(params[key]);
      }
      if (params[key] !== undefined) {
        return `${key}=${params[key]}`;
      }
      return '';
    }).filter(value => value).join('&');
    return `${url}${separate}${tempStr}`;
  }
})
