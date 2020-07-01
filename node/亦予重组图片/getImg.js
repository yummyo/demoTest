const fs = require('fs')
let fileList = {},
  coverList = {},
  imgListPath = './案例 - 筛选后',
  coverPath = './封面'
let detailList = [
  { "a": "博枫上海总部办公室", "b": "Brookfield", "c": "LIGHTING/AV/IT", "d": "Shanghai", "e": "2250m²" },
  { "a": "波士顿科学成都办公室", "b": "Boston Scientific", "c": "LIGHTING/AV/IT", "d": "Chengdu", "e": "1100m²" },
  { "a": "波士顿科学移动培训中心", "b": "Boston Scientific", "c": "INTERIOR/LIGHTING/AV/IT", "d": "Shanghai", "e": "30m²" },
  { "a": "中国银行上海国际金融研修院数字化创新学习空间", "b": "Bank of China", "c": "INTERIOR", "d": "Shanghai", "e": "1000m²" },
  { "a": "波士顿科学上海创新中心", "b": "Boston Scientific", "c": "LIGHTING/AV/IT", "d": "Shanghai", "e": "1450m²" },
  { "a": "波士顿科学上海33楼办公室", "b": "Boston Scientific", "c": "LIGHTING/AV/IT", "d": "Shanghai", "e": "1200m²" },
  { "a": "沄柏资本上海办公室", "b": "Cedarlake Capital", "c": "LIGHTING", "d": "Shanghai", "e": "1600m²" },
  { "a": "微创医疗上海演播厅", "b": "Microport", "c": "INTERIOR/LIGHTING/AV/IT", "d": "Shanghai", "e": "100m²" },
  { "a": "上海科技大学创管学院学术报告厅", "b": "Shanghai Tech University SEM", "c": "INTERIOR/LIGHTING/AV/IT", "d": "Shanghai", "e": "600m²" },
  { "a": "国家电网电子设计有限公司多功能厅", "b": "State Grid", "c": "LIGHTING/AV/IT", "d": "Shanghai", "e": "200m²" },
  { "a": "盈德气体上海会议中心", "b": "Yingde Gases", "c": "LIGHTING/AV", "d": "Shanghai", "e": "800m²" },
  { "a": "上海航天研究院805所报告厅", "b": "Shangahi Aerospace Research", "c": "INTERIOR/LIGHTING/AV/IT", "d": "Shanghai", "e": "300m²" },
  { "a": "博枫上海办公室", "b": "Brookfield", "c": "LIGHTING/AV/IT", "d": "Shanghai", "e": "1100m²" },
  { "a": "波士顿科学北京T3创库", "b": "Boston Scientific", "c": "LIGHTING/AV/IT", "d": "Beijing", "e": "1300m²" },
  { "a": "上海航天研究院学术报告厅", "b": "Shangahi Aerospace Research", "c": "INTERIOR/LIGHTING/AV/IT", "d": "Shanghai", "e": "300m²" },
  { "a": "澳麟木业上海设计周展厅", "b": "Aolin", "c": "LIGHTING", "d": "Shanghai", "e": "50m²" },
  { "a": "英特格拉上海办公室", "b": "Integra", "c": "LIGHTING", "d": "Shanghai", "e": "600m²" },
  { "a": "通用电气上海园区数字创新坊", "b": "GE", "c": "AV/IT", "d": "Shanghai", "e": "2000m²" },
]
// 读取当前目录所有文件
let imgDirList = fs.readdirSync(imgListPath)
imgDirList.map(v => {
  let imgDir = fs.readdirSync(imgListPath + '/' + v)
  let [date, zhName, cnName, site, sort] = v.split('-')
  fileList[v] = {
    list: imgDir,
    date: date.split("年")[0],
    zhName, cnName, site, sort,
    name: v,
    cover: ''
  }
})
// 读取封面列表
let coverDirList = fs.readdirSync(coverPath)
coverDirList.map(v => {
  let coverDir = fs.readdirSync(coverPath + '/' + v)
  coverDir.map(val => {
    let key = val.split('.')[0].replace(/^\d+/, '')
    coverList[key] = `/${v}/${val}`
  })
})
// 遍历项目列表
for (let file in fileList) {
  // console.log('---------------' + file + '---------------')
  // 遍历封面列表
  for (let cover in coverList) {
    // console.log('+++++++++++' + cover + '+++++++++++++++')
    if (file.indexOf(cover) > -1) {
      fileList[file].cover = coverList[cover]
    }
  }
  // 遍历详情列表
  for (let detail of detailList) {
    // console.log('+++++++++++' + cover + '+++++++++++++++')
    if (file.indexOf(detail['a']) > -1) {
      fileList[file] = Object.assign(fileList[file], {
        project: detail['a'],
        client: detail['b'],
        scope: detail['c'],
        location: detail['d'],
        area: detail['e'],
      })
    }
  }
}
// console.log(fileList)

fs.writeFile('./imglist.json', JSON.stringify(fileList), {}, function (err) {
  if (err) throw err;
  console.log('写入成功')
})