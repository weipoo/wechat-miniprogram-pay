// pages/wxpay/wxpay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    const { timestamp, nonceStr, prepayId, signType, paySign } = options;
    // 发起微信支付
    wx.requestPayment(
      {
      'timeStamp': timestamp,
      'nonceStr': nonceStr,
      'package': `prepay_id=${prepayId}`,
      'signType': signType,
      'paySign': paySign,
      'success':function(res){
       
      },
      'fail':function(res){
       
      },
      'complete':function(res){
   
      }
      })

  },
  onShow: function () {

  }
})