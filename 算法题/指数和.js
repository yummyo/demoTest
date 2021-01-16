// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Please implement a function that returns the sum of all the multiples of 3 or 5 below 1000.

//如果我们列出所有10以下是3或5的倍数的自然数，我们得到3、5、6和9。这些倍数的和是23。
//请实现一个函数，返回1000以下3或5的所有倍数的和。

let num_3 = { num: 1, total: 0 }
let num_5 = { num: 1, total: 0 }

while (num_3['num'] * 3 < 1000 || num_5['num'] * 5 < 1000) {
  if (num_3['num'] * 3 < 1000) {
    // 总和
    num_3['total'] += num_3['num'] * 3
    // 倍数
    num_3['num']++
  }
  if (num_5['num'] * 5 < 1000) {
    num_5['total'] += num_5['num'] * 5
    num_5['num']++
  }
}
return num_3['total'] + num_5['total']