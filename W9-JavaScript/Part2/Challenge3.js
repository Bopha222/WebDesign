function calculateaverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    console.log(average);
    return average;
}   
let arr1 = [85, 90, 78, 92];
calculateaverage(arr1);  
let arr2 = [10,20,30];
calculateaverage(arr2);  
let arr3 = [0];
calculateaverage(arr3);