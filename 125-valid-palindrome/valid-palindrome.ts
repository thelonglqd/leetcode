function isPalindrome(s: string): boolean {

    let result = "";

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (
            (code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)   // lower alpha (a-z)
        ) {
            result += s[i].toLowerCase();
        }
    }

    if (result.length === 1) return true;

    return result.split("").reverse().join("") === result
    
    // let left, right;

    // let mid = Math.floor(result.length / 2);

    // if (result.length % 2 === 0) {
    //     left = mid - 1;
    //     right = mid
    // } else {
    //     left = mid;
    //     right = mid;
    // }

    // while(left >= 0 && right < result.length) {
    //     if (result[left] === result[right]) {
    //         left--;
    //         right++
    //     } else return false
    // }

    // return true;

};