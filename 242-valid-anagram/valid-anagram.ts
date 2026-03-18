function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const sLetters = {}
    for (let i = 0; i < s.length; i++) {
        sLetters[s[i]] = sLetters[s[i]] ? (sLetters[s[i]] || 0) + 1 : 1;
    }

    for (let j = 0; j < t.length; j++) {
        if (!sLetters[t[j]]) return false
        sLetters[t[j]]--
    }

    return true;
};