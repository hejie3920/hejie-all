function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }


    let pivot = arr[0]

    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quick_sort(left).concat([pivot], quick_sort(right));
}

var arr = [5,4,6,7,1,2,8,9,3];
console.log(quick_sort(arr));



function quick_sort1(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0]

    let i = 1
    let j = arr.length-1
    while(i<j){
        let pivot = arr[0]
        while(arr[j]>=pivot && i<j){
            j --
        }
        while(arr[i]<=pivot  && i<j){
            i ++
        }
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        

    }
    let left = arr.slice(1,i+1)
    let right = arr.slice(j+1)
    return [...quick_sort1(left), pivot, ...quick_sort1(right)]

}

console.log(quick_sort1(arr));

