// 2567
function isPalindrome(x: number): boolean {
    if (x === 0) return true;
    if (x < 0 || x % 10 === 0) return false
    if (x < 10) return true;

    // return x === parseInt((""+x).split("").reverse().join(""))

    let tmp = 0;
    // let power = 0;
    let remain = x;
    // let remain = number;

    while (remain >= 10) {
        let lastDigit = remain % 10
        tmp = tmp * 10 + lastDigit;
        remain = (remain - lastDigit) / 10
    }

    return x === tmp * 10 + remain;
};