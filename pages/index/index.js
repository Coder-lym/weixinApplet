Page({
  data: {
    indicatorDots: true,
    interval: 3000,
    duration: 500,
    imgs: [
      '../../images/l1.png',
      '../../images/l2.png',
      '../../images/l3.png',
      '../../images/l4.png'
    ],
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})		