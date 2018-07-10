var extensions = require("/data/extensions");

function handleDatafromBackEnd(extensions_raw) {
  var result = [];
  for (var i = 0; i < extensions_raw.length; i++) {
    var tmp = new Object();
    tmp.id = extensions_raw[i].planner_id;
    tmp.name = extensions_raw[i].planner_name;
    tmp.description = extensions_raw[i].description;
    tmp.content = "尚无内容。";
    tmp.visible = false;
    tmp.messages = extensions_raw[i].planner_name == "Spider" ? 8 : -1;
    tmp.icon = extensions_raw[i].picture_path_name;
    var name = tmp.name.toLowerCase();
    tmp.extension_path = "/extensions/" + name + "/" + name;
    result.push(tmp);
  }
  console.log(result);
  return result;
}


//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    extensions: handleDatafromBackEnd(extensions),
    scheduleItems: [{
        "title": "Have lunch",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 1,
        "user_id": 1
      },
      {
        "title": "Go to school",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 2,
        "user_id": 1
      },
      {
        "title": "Do sports",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 3,
        "user_id": 1
      },
      {
        "title": "Take a shower",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 4,
        "user_id": 1
      },
      {
        "title": "Study English",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 5,
        "user_id": 1
      },
      {
        "title": "Water the flowers",
        "start_time": "2016.6.21",
        "end_time": "2016.6.22",
        "description": "Eat more and more and more Eat more and more and more Eat more and more and more",
        "address": "The second eatery",
        "scheduleItem_id": 5,
        "user_id": 1
      },
    ]
  }
})