var user_food_eaten = require("../../../data/user_food_eaten");
var app = getApp();

function warpEatenFood(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].selected_number = 1;
  }
  return array;
}

Page({
  data: {
    files: [],
    location: "地址"
  },
  onLoad: function(options) {
    var self = this;
    wx.getLocation({
      success: function(res) {
        self.setData({
          location: "(" + res.latitude + "," + res.longitude + ")"
        })
      },
    })
  },
  previewPicture: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  choosePicture: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: function(res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths),
        });
        console.log("choose image succeed");
      },
    })
  },
  sendPictures: function() {
    console.log("send pictures");
    console.log(user_food_eaten);
    // 向百度api发送消息，获得相应数据。
    app.globalData.userFoodEaten = warpEatenFood(user_food_eaten);
    wx.navigateTo({
      url: "/extensions/keeper/output/output",
    });
  }
})