function sortString(str) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    const tmp = new Map();
  
    for (let i = 0; i < strs.length; i++) {
        const key = sortString(strs[i])
        console.log('key ::: ', key)
        if (tmp.get(key)) {
            const newArr = tmp.get(key)
            newArr.push(strs[i])
            tmp.set(key, newArr)
        } else {
            tmp.set(key, [strs[i]])
        }
    }
  
    const result = []
  
    for (let value of tmp.values()) {
      result.push(value)
    }
  
    return result;
};