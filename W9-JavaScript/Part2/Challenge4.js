function countcharacters(str) {
    let charCount = 0;  
    for (let i = 0; i < str.length; i++) {
        charCount++;    
    }   
    console.log(charCount);
    return charCount;
}
let string1 = "Hello, World!";
countcharacters(string1);  
let string2 = "aaa bbb a";
countcharacters(string2);  
let string3 = "abc";
countcharacters(string3);
