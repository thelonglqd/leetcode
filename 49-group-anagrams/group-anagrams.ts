// function generateKey(str) {
//     const tmp = new Array(26).fill(0)
    
//     for (let i = 0; i < str.length; i++) {
//       tmp[str.charCodeAt(i) - 97]++
//     }
  
//   return String.fromCharCode(...tmp)
// }

// function groupAnagrams(strs) {
//     const tmp = {};
    
//     for (let i = 0; i < strs.length; i++) {
//         const key = generateKey(strs[i])
//         if (tmp[key]) {
//           tmp[key].push(strs[i])
//         } else {
//             tmp[key] = [strs[i]]
//         }
//     }
  
//     return Object.values(tmp);
// };

function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = strs.reduce((acc, word) => {
        const sorted = word.split('').sort().join('');
        if (acc.has(sorted)) {
            let value = acc.get(sorted);
            value.push(word);
        } else {
            acc.set(sorted, [word]);
        }
        return acc;
    }, new Map() as Map<string, string[]>)

    return Array.from(anagramMap.values());
};