function longestCommonPrefix(strs: string[]): string {
    const firstWords = strs[0];
    let longest = "";

    for (let i = 0; i < firstWords.length; i++) {
        let unmatched = false;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] === firstWords[i]) continue;
            else unmatched = true
        }
        if (!unmatched) longest += firstWords[i];
        else break
    }

    return longest;
};