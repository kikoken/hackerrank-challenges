const list = [2,1,5,4,3];

const minMaxSum = (arr) => {
    let min = 0, max = 0
    const orderList = arr.sort()
    min = orderList.slice(0, orderList.length - 1 ).reduce((a,b) => a + b)
    max = orderList.slice(1).reduce((a,b) => a + b)
    process.stdout.write(`${min} ${max}`)
}

console.log(minMaxSum(list))