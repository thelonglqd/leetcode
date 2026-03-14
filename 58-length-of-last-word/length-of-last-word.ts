function lengthOfLastWord(s: string): number {
    const stringArr = s.trim().split(" ")
    return stringArr[stringArr.length - 1].length
};