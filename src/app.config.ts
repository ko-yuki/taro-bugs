export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    { root: 'subPages/demo', pages: ['index'] }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
