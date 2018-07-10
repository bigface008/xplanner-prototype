Page({
  data: {
    files: []
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
  showResult: function() {
    console.log("hand in result");
  }
})