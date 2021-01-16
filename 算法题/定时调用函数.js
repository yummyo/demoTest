// Please implement a function `simplePoller` that does the following:

// - `simplePoller` function accepts two arguments: `queryFn` and`callback`
//   - `queryFn` is a function that returns`true` or`false`
//     - `callback` is a function that should be invoked when`queryFn` returns`true`
//       - `simplePoller` should invoke`queryFn` periodically
//         - when`queryFn` returns false, it waits for some time and invokes`queryFn` again until`queryFn` returns`true`
//           - The waiting interval between`queryFn` calls increases by 1.5 times each time, starting from 1 second
//             - when`queryFn` returns true, invokes`callback` and exit the function

//   For example:

// - 1st time: wait for 1 second
//   - 2nd time: invoke`queryFn` and it returns`false`, wait for 1.5 second
//     - 3rd time: invoke`queryFn` and it returns`false`, wait for 2.25 second
//       - 4th time: invoke`queryFn` and it returns`true`, execute`callback` and exit

// Make sure`simplePoller` passes the following test cases:

// - `simplePoller` should wait for 1 second before it invokes`queryFn` the first time
//   - The waiting interval is 1.5 times of the previous one, except for the first(1 second)
//     - `simplePoller` should be allowed to be invoked concurrently and invocations of the function won't interfere with each other

// Note: You don't have to implement `queryFn` and `callback` in your solution. You can assume they are given. However your implementation of `simplePoller` should be able to take different implementation of `queryFn` and `callback` without problem and to achieve that you are encouraged to implement a few versions of `queryFn` and `callback` for testing purposes.

// 请实现一个函数' simplePoller '做以下工作:
// ' simplePoller '函数接受两个参数: ' queryFn '和' callback '
// ' queryFn '是一个返回'真'或'假'的函数
// ' callback '是一个函数，当' queryFn '返回' true '时应该被调用
//   - ' simplePoller '应该定期调用' queryFn '
// 当' queryFn '返回false时，它等待一段时间并再次调用' queryFn '，直到' queryFn '返回' true '
//   - ' queryFn '调用之间的等待间隔每次增加1.5倍，从1秒开始
//     - 当' queryFn '返回true，调用' callback '并退出函数
// 例如:
// -第一次: 等待1秒
//   - 第二次: 调用' queryFn '，它返回' false '，等待1.5秒
//     - 第三次: 调用' queryFn '，它返回' false '，等待2.25秒
//       - 第四次: 调用' queryFn '，它返回'真'，执行'回调'和退出
// 确保“simplePoller”通过以下测试用例:
// -“simplePoller”应该在第一次调用“queryFn”之前等待1秒
//   - 等待间隔为前一段的1.5倍，但第一段(1秒)除外
//     - simplePoller应该被允许并发调用，并且函数的调用不会相互干扰
// 注意: 你不必在你的解决方案中实现' queryFn '和' callback '。你可以假设它们是已知的。然而，你的' simplePoller '的实现应该能够采取不同的实现' queryFn '和' callback '没有问题，为了实现这一点，你被鼓励实现' queryFn '和' callback '的几个版本的测试目的。


function simplePoller(queryFn, callback, text) {
  // Implement your solution here
  // 次数
  let num = 0
  const toDo = () => {
    setTimeout(() => {
      if (queryFn()) {
        callback()
      } else {
        num++
        toDo()
      }
    }, 1000 * Math.pow(1.5, num));
  }
  toDo()

}


function queryFn() {
  return Math.random() * 100 > 80
}
function callback() {
  console.log("执行回调啦")
}
simplePoller(queryFn, callback, '函数2')
simplePoller(queryFn, callback, '函数1')

function name() {
  return new Promise((rel, rej) => {
    rel(true)
  })
}