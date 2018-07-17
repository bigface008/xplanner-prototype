var app = getApp();
// var userInfo = app.globalData.userInfo;
var userInfo = require("../../data/userInfo");

Page({
  data: {
    userInfo: userInfo,
    logined: false,
  },
  onLoad: function() {
    // console.log(this.data.userInfo.avatar);
  },

})