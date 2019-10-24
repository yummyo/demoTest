const fs = require('fs')
const cheerio = require('cheerio')
const pathName = './'
const fileOption = {
  encoding: 'utf-8'
}
let fileList = {}
// 读取当前目录所有文件
fs.readdir(pathName, function(err, files) {
  if (err) return
  for (let file of files) {
    let fileClass = file.split('.')
    let fileType = fileClass[fileClass.length - 1]
    if (fileType == 'html') {
      // 日志
      fileList[fileClass[0]] = []
      // 读取文件
      fs.readFile(pathName + file, fileOption, (error, data) => {
        if (error) return
        setHtml(data, file)
      })
    }
  }
})
// 设置html
function setHtml(html, fileName) {
  let $ = cheerio.load(html, { decodeEntities: false })

  $('a').each(function name(i, v) {
    let _href = $(v).attr('href')
    let _replaceHref = replaceHref(_href)
    if (_href && _replaceHref) {
      // 日志记录
      fileList[fileName.split('.')[0]].push(
        _href + '  替换为=====>>>>>>   ' + _replaceHref
      )
      // 替换href
      $(v).attr('href', _replaceHref)
    }
  })
  fs.writeFile(pathName + fileName, $.html(), 'utf-8', function(error) {
    if (error) {
      console.log('写入失败')
    } else {
      console.log(fileName, '替换链接成功')
    }
  })
  // 存储写入日志
  fs.writeFile('./log.js', JSON.stringify(fileList), fileOption, function(
    params
  ) {})
}
// 替换链接
function replaceHref(href) {
  if (/(^\.\/|^\/)/.test(href) || href == '#' || href == 'javascript:;') {
    // 如果是./ 或 /开头的页面 或者是 # 或者 javascript:; 不操作
    return false
  } else if (/saas/.test(href)) {
    return false
  }
  return 'https://www2.smartwork.link/manager/#/myMeet'
}
