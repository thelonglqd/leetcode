function generateKey(str) {
    const tmp = new Array(26).fill(0)
    
    for (let i = 0; i < str.length; i++) {
      tmp[str.charCodeAt(i) - 97]++
    }
  
  return String.fromCharCode(...tmp)
}

function groupAnagrams(strs) {
    const tmp = new Map();
  
    for (let i = 0; i < strs.length; i++) {
        const key = generateKey(strs[i])
        if (tmp.get(key)) {
          tmp.get(key).push(strs[i])
        } else {
            tmp.set(key, [strs[i]])
        }
    }
  
    return [...tmp.values()];
};