function challenge2(array) {
    let reversarray = [];

    for (let i = 0; i < array.length; i++) {
        reversarray[i] = array[array.length - 1 - i];
    }
    console.log(reversarray);
    return reversarray;    

}
let array1 = [14,15,16,20];
challenge2(array1);  
let array2 = [5,4,3,2,1];
challenge2(array2);  
let array3 = [];
challenge2(array3);

