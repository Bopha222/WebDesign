function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangleString += '*';
        }   
        rectangleString += '\n';
    }
    console.log(rectangleString);
    return rectangleString;
}
challenge1(3, 4);
challenge1(5, 2);
challenge1(5, -2);
