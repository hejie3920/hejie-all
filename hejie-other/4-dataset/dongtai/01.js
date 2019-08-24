// 递归斐波那契
console.time('fib')
// function fib(n){
//     if(n==1 || n==2) return 1
//     return  fib(n-1) + fib(n-2)
// }

// 备忘录递归
// function fib(n){
//     let memo = []
//     return helper(memo, n)
// }
// function helper(memo, n){
//     if(n==1 || n==2){
//         // 前两个
//         return 1
//     }
//     // 如果有缓存，直接返回
//     if (memo[n]) return memo[n];
//     // 没缓存
//     memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
//     return memo[n]
// }


// 斐波那契
function fib(n){
    let dp = []
    dp[1] = dp[2] = 1
    for (let i = 3; i <=n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
}

console.log(fib(50))


console.timeEnd('fib')
