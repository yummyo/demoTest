var group = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85]
// 排序
function sort(arr, left, right) {
  console.log(left, right)
  if (left < right) {
    var i = left,
      j = right,
      x = arr[i]
    while (i < j) {
      while (arr[j] > x && i < j) {
        j--
      }
      if (i < j) {
        arr[i++] = arr[j]
      }
      while (arr[i] <= x && i < j) {
        i++
      }
      if (i < j) {
        arr[j--] = arr[i]
      }
    }
    arr[i] = x
    sort(arr, left, i - 1)
    sort(arr, i + 1, right)
  } else {
    return
  }
}
sort(group, 0, group.length - 1)
console.log(group)
