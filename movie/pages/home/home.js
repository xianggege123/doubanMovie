var util = require('../../utils/util.js');
Page({
  data: {
    // text:"这是一个页面"
    imgUrls: [
      '/assets/img/zhang.jpg',
      '/assets/img/hotdog.jpg',
      '/assets/img/jing.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies: [],
    hidden: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  detail: function (e) {
    getApp().detail(e);
  },

  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      header: {
        'Content-Type': 'application/text'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        util.processSubjects(subjects);
        page.setData({ movies: subjects, hiddenLoading: true });
      }
    })
  }
})