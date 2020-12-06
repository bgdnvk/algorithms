const maxSubArrSum = (arr, num) => {
    let maxSum, tempSum = 0;

    if(arr.length < num) return null;

    for (let i = 0; i < array.length; i++) {
        maxSum+= arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < numrray.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}