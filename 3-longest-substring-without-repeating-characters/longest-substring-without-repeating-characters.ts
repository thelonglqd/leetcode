function lengthOfLongestSubstring(s: string): number {
    if (!s) return 0;

    let left = 0;
    let right = 0;
    let longest = 0;

    let tmp = new Map()

    for(let i = 0; i < s.length; i++) {
        if (tmp.has(s.charAt(i))) {
            left = left > tmp.get(s.charAt(i)) + 1 ? left : tmp.get(s.charAt(i)) + 1;
        }

        tmp.set(s.charAt(i), i);
        longest = Math.max(longest, i - left + 1)
    }
    return longest;
};