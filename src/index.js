Component({
  properties: {
    actionSheetStatus: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({
            actionSheetStatus: true,
            animationMask: 'fadeIn',
            animationSheet: 'fadeInBottom'
          })
        } else {
          this.setData({
            actionSheetStatus: false,
            animationMask: 'fadeOut',
            animationSheet: 'fadeOutBottom'
          })
        }
      }
    },
    closeText: {
      type: String,
      value: '取消'
    }
  },

  data: {
    animationMask: 'fadeIn',
    animationSheet: 'fadeInBottom'
  },

  methods: {
    closeActionSheet() {
      this.setData({
        animationMask: 'fadeOut',
        animationSheet: 'fadeOutBottom'
      })
      setTimeout(() => {
        this.setData({actionSheetStatus: false})
      }, 300)
    }
  }
})
