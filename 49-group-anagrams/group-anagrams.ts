function groupAnagrams(strs) {
    const res = {};
    const count = new Uint8Array(26); // TypedArray nhanh và tiết kiệm hơn mảng thường

    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        
        // Đếm trực tiếp (Inline)
        for (let j = 0; j < s.length; j++) {
            count[s.charCodeAt(j) - 97]++;
        }

        // Tạo key thủ công hoặc dùng String.fromCharCode cực nhanh
        let key = "";
        for (let k = 0; k < 26; k++) {
            if (count[k] !== 0) {
                key += String.fromCharCode(k + 97) + count[k];
            }
            count[k] = 0; // Reset mảng ngay tại đây để dùng cho từ sau
        }

        if (!res[key]) res[key] = [];
        res[key].push(s);
    }

    return Object.values(res);
}