var app = getApp();
var userInfo = app.globalData.userInfo;

Page({
  data: {
    tcardzta: 'block', //初始卡片正面显示
    tcardztb: 'none', //初始卡片背面隐藏
    cardjd: '180deg',
    tcardsh: '1',
    userInfo: userInfo
  },
  onLoad: function() {
    console.log(this.data.userInfo.avatar);
  },

  /**
   * 点击翻转
   */
  cardfz: function(e) {
    var id = e.currentTarget.dataset.id;
    //console.log(id);
    var that = this;
    if (id == '1') {
      setTimeout(function() {
        that.setData({
          tcardzta: 'none'
        });
      }, 200);
      setTimeout(function() {
        that.setData({
          tcardztb: 'block',
          tcardsh: '2'
        });
      }, 250);
      that.setData({
        cardjd: '0deg'
      });
    } else {
      setTimeout(function() {
        that.setData({
          tcardztb: 'none'
        });
      }, 150);
      setTimeout(function() {
        that.setData({
          tcardzta: 'block',
          tcardsh: '1'
        });
      }, 250);
      that.setData({
        cardjd: '180deg',
      });
    }

  }
})