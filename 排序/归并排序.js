var group = [1, 9, 3, 5, 0, 4, 2, 8]
function mergeSort(list) {
  var length = list.length
  if (length == 1) {
    //结束条件
    return list
  }
  var mid = Math.floor(length / 2)
  var leftArr = list.slice(0, mid)
  var rightArr = list.slice(mid, length)
  return merge(mergeSort(leftArr), mergeSort(rightArr)) //递归
}

function merge(left, right) {
  var result = []
  var nl = 0
  var nr = 0
  while (nl < left.length && nr < right.length) {
    //按从小到大的顺序排列新的组合数组
    result.push(left[nl] <= right[nr] ? left[nl++] : right[nr++])
  }
  while (nl < left.length) {
    //剩下的一股脑儿扔进去。
    result.push(left[nl++])
  }
  while (nr < right.length) {
    result.push(right[nr++])
  }

  return result
}
mergeSort(group)
