var app = getApp();
var sliderWidth = 120; // 需要设置slider的宽度，用于计算中间位置
var User_planner_setting = [0, 1, 2]; //从后端传来的已安装扩展数组
var extensions = app.globalData.extensions;
var mtabW;

/*
 * filterAndSetGlobalExtensions
 * 根据后端传来的数组settings过滤得到用户安装的扩展，并且设置globalData
 */
function filterAndSetGlobalExtensions(settings) {
  for (var i = 0; i < settings.length; i++) {
    app.globalData.extensions[settings[i]].visible = true;
  }
  return app.globalData.extensions;
}

Page({
  data: {
    tabs: ["推荐", "已安装"], //tob标题
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
    index: 0,
    topView: 'A',
    sliderOffset: 0,
    sliderLeft: 0,
    extensions: extensions,
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        })
      }
    });
    var tmp = filterAndSetGlobalExtensions(User_planner_setting);
    this.setData({
      extensions: tmp,
    });
    console.log(app.globalData.extensions);
  },
  onShow: function() {
    this.setData({
      extensions: app.globalData.extensions,
    })
  },

  tabClick: function(e) {
    console.log(e)
    var that = this;
    var index = 0;
    for (var i = 0; i < this.data.tabs.length; i++) {
      if (this.data.tabs[i] === e.currentTarget.dataset.item) {
        index = i
        break
      }
    }
    var offsetW = e.currentTarget.offsetLeft;
    this.setData({
      activeIndex: index,
      slideOffset: offsetW
    });
  },
  bindChange: function(e) {
    var current = e.detail.current;
    var offsetW = current * mtabW;
    this.setData({
      activeIndex: current,
      index: current,
      slideOffset: offsetW,
      topView: this.data.tabs[current]
    });
    console.log(this.data.topView + ' ' + offsetW)
  },
  gotoManagement: function(e) {
    wx.navigateTo({
      url: "/pages/planners/management/management"
    })
  }
})