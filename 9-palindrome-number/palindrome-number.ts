function isPalindrome(x: number): boolean {
    // x = 1, converted = 12
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    // remain vs converted
    let converted = 0;
    while(x > converted) {
        converted = converted * 10 + (x % 10)
        x = Math.floor(x / 10)
    }

    return x === converted || x === Math.floor(converted / 10)
};