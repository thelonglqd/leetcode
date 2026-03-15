function strStr(haystack: string, needle: string): number {
    const needleLength = needle.length;

    let left = 0;
    let right = needleLength;
  
    while (right <= haystack.length && left < haystack.length) {
        if (haystack.substring(left, right) === needle) return left
        left++;
        right++;
    }

    return -1;
};