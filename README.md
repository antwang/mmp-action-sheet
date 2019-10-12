# 介绍

微信小程序中虽然有原生的 `wx.showActionSheet()` API 对 actionsheet 提供了原生支持，但遗憾的是 `wx.showActionSheet()` 中只能指定纯字符，不能嵌入 `button`、`navigator` 等组件。在某些场景下非常的不方便，因此开发了该组件。

# 特点

- 支持在 sheet 中使用 `button`、`navigator`。
- 与原生 `actionsheet` 体验几无差异。
- 使用简单

# 使用方法

## 安装

在小程序项目目录中执行

```
npm i mmp-action-sheet
```

## 构建

在微信开发者工具中点击 `工具->构建npm`，构建完成后，项目目录下会自动新增 `miniprogram_npm` 目录。

## 使用示例

假定我们有一个 index 页面，在页面中通过点击按钮，可以调起 actionsheet。以下是个示例代码：

### index.wxml

```
<view class="container">
  <button type="primary" bindtap="showActionSheet">调用组件</button>
  <action-sheet actionSheetStatus="{{actionSheetStatus}}">
    <button open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">使用微信头像</button>
    <button>使用本地相册</button>
    <button>拍照</button>
  </action-sheet>
</view>

```

### index.js:

```
Page({
  data: {
    actionSheetStatus: false
  },
  showActionSheet(){
    this.setData({ actionSheetStatus: true})
  }
})

```

### index.json:

```
{
  "usingComponents": {
    "action-sheet": "mmp-action-sheet"
  }
}
```

# 线上演示

您可以使用微信扫码以下二维码查看组件效果：

![线上演示二维码](./github.png)
