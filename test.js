const checkOperation = (str) => {
    let count = 0;
    let seen1 = false;
    // 0001110
    //00000
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element === '0' && seen1) {
            count += 1;
        } else if (element === '1') {
            seen1 = true;
            count += 2;
        }
    }
    return count > 0 ? count - 1 : 0; // operation num
};

'1'.repeat(400000); // 799999
('011100'); // 7
('1011'); // 6
('1111010101111'); // 22
//test

console.log(checkOperation('1'.repeat(400000)));
console.log(checkOperation('011100'));
console.log(checkOperation('1011'));
console.log(checkOperation('1111010101111'));
