var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var mtabW;
Page({
  data: {
    tabs: ["DAY 1", "DAY 2"], //tob标题
    pageData: [{"data":"pageA"}, {"data":"pageB"}], //page数据
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
    index: 0,
    topView: 'A',
    sliderOffset: 0,
    sliderLeft: 0,
    scheduleItems: app.globalData.scheduleItems,
    height:""
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
    that.setData({
      height: 77 * that.data.scheduleItems.length + 204,
    })
  },

  tabClick: function(e) {
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
  },
  detail:function(event){
    wx.navigateTo({
      url: '/pages/schedular/scheduleDetails/scheduleDetails?id=' + 
      event.currentTarget.dataset.id
      +'&day='+
      this.data.tabs[this.data.activeIndex],
    })
  },
  addSchedule() {
    console.log("sbsb");
  }
})