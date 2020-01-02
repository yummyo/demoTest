const fs = require('fs')
let fileList = {}
// 读取当前目录所有文件
function readDirFun(path, Obj, dirPath) {
  let menu = fs.readdirSync(path)
  if (!menu)
    return;
  munu = menu.filter(v => {
    return v.indexOf('.js') == -1
  })

  menu.forEach(function (ele) {
    if (fs.lstatSync(path + "/" + ele).isDirectory()) {
      var dirData = ''
      if (Obj['type'] == 'first') {
        Obj['second'][ele] = {
          "main_img": "./static/img/QIANYANDUOMEI/Design module/1.jpg",
          "text": [],
          "time": "2019年",
          "type": '',
          "children": []
        }
        dirData = Obj['second'][ele]
      } else {
        Obj[ele] = {
          "key": "前沿多媒体",
          "img": "./static/img/test.png",
          "type": 'first',
          "second": {}
        }
        dirData = Obj[ele]
      }
      readDirFun(path + "/" + ele, dirData, dirPath + '/' + ele);
    } else {
      if (Obj['children']) {
        Obj['main_img'] = dirPath + '/' + menu[0]
        Obj['children'].push(dirPath + '/' + ele)
      }
    }
  })

}
readDirFun('./', fileList, './static/img')
fs.writeFile('./log.json', JSON.stringify(fileList), {}, function () { })