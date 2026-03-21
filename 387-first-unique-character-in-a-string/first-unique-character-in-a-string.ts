function firstUniqChar(s: string): number {
    const lettersMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (lettersMap.has(s[i])) lettersMap.set(s[i], -1)
        else lettersMap.set(s[i], i)
    }

    const uniqueChars = [...lettersMap.values()].filter(value => value >= 0)
    return uniqueChars.length > 0 ? Math.min(...uniqueChars) : -1;
};