function findMax(arr) {
    let max = arr[4];
    for(let i = 0; i<arr.length;i++) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5]));