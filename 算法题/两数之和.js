// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力循环
// var twoSum = function(nums, target) {
//   const result = {}
//   for (let bigNum = 0; bigNum < nums.length - 1; bigNum++) {
//     // 去重
//     if (!result[bigNum]) {
//       for (let smallNum = bigNum + 1; smallNum < nums.length; smallNum++) {
//         // 去重
//         if (!result[smallNum]) {
//           // 相加
//           if (nums[smallNum] + nums[bigNum] == target) {
//             result[smallNum] = smallNum
//             result[bigNum] = bigNum
//             break
//           }
//         }
//       }
//     }
//   }
//   return Object.values(result)
// }

// 哈希
var twoSum = function(nums, target) {
  const result = {}
  const temp = {}
  nums.map((v, i) => (temp[v] = i))
  for (let item in temp) {
    if (result[item] == undefined) {
      if (temp[target - item * 1]) {
        result[item] = temp[item]
        result[target - item * 1] = temp[target - item * 1]
      }
    }
  }
  return Object.values(result)
}
console.log(twoSum([2, 4], 6))
