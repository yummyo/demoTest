// 以下以[ 3,5,8,2,5,4 ]这组数字来演示。
let _data = [1, 22, 102, 11, 3, 5, 8, 2, 5, 4]
function sortData(arr) {
  // 最大值
  let maxNum = arr[0]
  // 存放结果数组
  let resultArr = []
  arr.map(v => {
    if (v > maxNum) maxNum = v
  })
  // 辅助数组
  let containerArr = new Array(maxNum + 1)
  for (let num = 0; num < arr.length; num++) {
    if (!containerArr[arr[num]]) {
      containerArr[arr[num]] = []
    }
    containerArr[arr[num]].push(arr[num])
  }
  // 填充值
  containerArr.map((v, i) => {
    if (v) {
      resultArr = resultArr.concat(v)
    }
  })
  return resultArr
}
sortData(_data)
