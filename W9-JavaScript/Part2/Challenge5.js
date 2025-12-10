function countWords(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    console.log(count);
    return count;
}
let string1 = "Hello, World!";
countWords(string1);  
let string2 = "this is the best day ever";
countWords(string2);  
let string3 = "abc";
countWords(string3);