function fib(n) {
    let fibAns = new Array(n + 1);
    if (n > 1) {
        let temp = fib(n - 1)
        for (let i = 0; i < temp.length; i++)
            fibAns[i] = temp[i]
        fibAns[fibAns.length - 1] = fibAns[fibAns.length - 2] + fibAns[fibAns.length - 3]
    } else
        for (let i = 0; i <= n; i++)
            fibAns[i] = i;
    return fibAns;
}
