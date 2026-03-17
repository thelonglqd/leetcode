function generateKey(str) {
    const tmp = new Array(26).fill(0)
    
    for (let i = 0; i < str.length; i++) {
      tmp[str.charCodeAt(i) - 97]++
    }
  
  return String.fromCharCode(...tmp)
}

function groupAnagrams(strs) {
    const tmp = {};
  
    for (let i = 0; i < strs.length; i++) {
        const key = generateKey(strs[i])
        if (tmp[key]) {
          tmp[key].push(strs[i])
        } else {
            tmp[key] = [strs[i]]
        }
    }
  
    return Object.values(tmp);
};