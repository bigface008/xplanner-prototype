var app = getApp();

Page({
  data: {
    user_food_eaten:[]
  },
  onLoad: function() {
    this.setData({
      user_food_eaten : app.globalData.userFoodEaten
    })
    console.log(this.data.user_food_eaten);
  },
  sendFoodInfo: function() {
    console.log("send food info to back end");
  },
  giveUpInfo: function() {
    wx.navigateBack({
      
    });
  }
})