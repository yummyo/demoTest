var findBottomLeftValue = function(root) {
  const test = function getValue(root) {
    if (root == null) {
      return {
        max: 0,
        num: 0
      }
    } else {
      var left = getValue(root.left)
      var right = getValue(root.right)
      var max = left['max'] >= right['max'] ? left : right
      var num = max['num']
      if (!left['max'] && !right['max']) {
        num = root['val']
      }
      console.log(left, right, max, num)
      return {
        max: max['max'] + 1,
        num
      }
    }
  }
  return test(root)['num']
}
let a = findBottomLeftValue([3, 9, 20, null, null, 15, 7])
console.log('a', a)
