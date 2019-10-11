$(function() {
  // 渲染主菜单
  $.ajax({
    url: 'http://getmainmenu.com',
    dataType: 'json',
    success: function(res) {
      randerMenu(res.data, $('#organization-tree'))
    }
  })
})

// 渲染菜单
function randerMenu(menuData, menuElement) {
  var menuStr = ''
  menuData.forEach(item => {
    menuStr += `<li>
      <span class="tree-icon glyphicon glyphicon-plus" id="${item.id}"></span>
      <a href="${item.url}" target="_blank">${item.text}</a>
      <ul></ul>
    </li>`
  })
  menuElement.html(menuStr)
}
// 展开收起菜单操作
$('#organization-tree').on('click', '.tree-icon', function() {
  if ($(this).hasClass('glyphicon-minus')) {
    // 展开状态
    $(this)
      .siblings('ul')
      .hide()
  } else {
    // 收起状态
    var _this = this
    $.ajax({
      // url: 'http://getsecondmenu.com',
      url: 'http://getthridmenu.com',
      data: { id: 1 },
      dataType: 'json',
      success: function(res) {
        randerMenu(res.data, $(_this).siblings('ul'))
        $(_this)
          .siblings('ul')
          .show()
      }
    })
  }
  $(this)
    .toggleClass('glyphicon-minus')
    .toggleClass('glyphicon-plus')
})
