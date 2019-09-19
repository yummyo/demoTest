const fs = require('fs')
const pageData = require('./base')
// 文本路径
let basePath = './html/',
  // 文件基础配置
  option = {
    encoding: 'utf-8'
  }
for (let item of pageData) {
  let fileName = item['path'].replace(/.+\/([^\/]+\.html)/, '$1')
  fs.readFile(basePath + fileName, option, (err, data) => {
    if (err) {
      console.log('读文件操作失败')
      return
    }
    let _html = setHtml(data, item)
    fs.writeFile(basePath + fileName, _html, function(err) {
      if (err) {
        console.log(fileName + '   写文件操作失败')
      } else {
        console.log(fileName + '   写文件操作成功')
      }
    })
  })
}

function setHtml(_html, data) {
  for (let item in data) {
    switch (item) {
      case 'T':
        _html = _html.replace(
          /(<title>).+(<\/title>)/,
          '$1' + data[item] + '$2'
        )
        break
      case 'D':
        _html = _html.replace(
          /(<meta[^>]+name="description"[^>]+content=")[^"]+(">)/,
          '$1' + data[item] + '$2'
        )
        break
      case 'K':
        _html = _html.replace(
          /(<meta[^>]+name="keywords"[^>]+content=")[^"]+(">)/,
          '$1' + data[item] + '$2'
        )
        break
    }
  }
  return _html
}
