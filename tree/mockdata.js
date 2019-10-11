Mock.mock('http://getmainmenu.com', {
  data: [
    { id: 1, url: 'http://www.baidu.com', text: '一级菜单1' },
    { id: 2, url: 'http://www.sougou.com', text: '一级菜单2' },
    { id: 3, url: 'https://feeds.qq.com', text: '一级菜单3' }
  ]
})
Mock.mock('http://getsecondmenu.com', {
  data: [
    { id: 4, url: 'http://www.baidu.com', text: '二级菜单1' },
    { id: 5, url: 'http://www.sougou.com', text: '二级菜单2' },
    { id: 6, url: 'https://feeds.qq.com', text: '二级菜单3' }
  ]
})
Mock.mock('http://getthridmenu.com', function(options) {
  return {
    data: [
      { id: 4, url: 'http://www.baidu.com', text: '二级菜单1' },
      { id: 5, url: 'http://www.sougou.com', text: '二级菜单2' },
      { id: 6, url: 'https://feeds.qq.com', text: '二级菜单3' }
    ]
  }
})
