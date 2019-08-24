let count = 0


function binarySearch(arr, item) {
    count +=1
    let low = 0
    let mid = null
    let element = null
    let high = arr.length - 1
    while (low <= high){
        mid = Math.floor((low + high) / 2)
        element = arr[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}


let arr = [1]
for (let i = 1; i < 10000; i++) {
    let item = arr[i-1]+ 3
    arr.push(item)
    
}


console.log(binarySearch(arr,298))
console.log(count)
console.log(arr[99])