// 两数相加
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// l1 = {
//   val:2,
//   next:{
//     val:4,
//     next:{
//       val:3,
//     }
//   }
// }
// l2 = {
//   val:5,
//   next:{
//     val:6,
//     next:{
//       val:4,
//     }
//   }
// }

var addTwoNumbers = function (l1, l2) {
  let total = 0, l3 = { val: 0 }
  while (l1 || l2) {
    total = (l1.val || 0) + (l2.val || 0)
    let tmp = l3.val + total % 10
    l3.val = tmp % 10
    l3.next = {
      val: tmp > 10 ? 1 : 0
    }
    l1 = l1.next
    l2 = l2.next
    l3 = l3.next

  }
  console.log(l3)
  return l3
};