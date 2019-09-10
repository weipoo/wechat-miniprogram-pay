// pages/web-page/web-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const webUrl = decodeURIComponent(options.webUrl || options.h5Url);
    console.log('h5 url: ', webUrl);
    if (webUrl) {
      this.setData({
        webUrl
      });
    }

    if (options.title) {
      wx.setNavigationBarTitle({
        title: decodeURIComponent(options.title)
      });
    }
  },

  
})