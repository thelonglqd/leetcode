function isPalindrome(x: number): boolean {
    if (x < 0) return false

    return x === parseInt((""+x).split("").reverse().join(""))
};