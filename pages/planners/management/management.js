var app = getApp();
var extensions = app.globalData.extensions;

Page({
  data: {
    extensions: extensions,
  },
  onLoad: function(options) {
    console.log(this.data.extensions);
  },
  onShow: function() {
    this.setData({
      extensions: app.globalData.extensions
    })
  },

  showDelete: function(e) {
    var that = this;
    wx.showActionSheet({
      itemList: ["删除" + e.currentTarget.dataset.name],
      success: function(res) {
        console.log(res.tapIndex);
        // 删除对应扩展
        app.globalData.extensions[e.currentTarget.dataset.id].visible = false;
        console.log(app.globalData.extensions[e.currentTarget.dataset.id].visible);
        that.setData({
          extensions: app.globalData.extensions
        });
        // 向后端发送消息
      }
    })
  },
  showDetails: function(e) {
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "/pages/planners/extensionDetails/extensionDetails?id=" + e.currentTarget.dataset.id,
    })
  }
});