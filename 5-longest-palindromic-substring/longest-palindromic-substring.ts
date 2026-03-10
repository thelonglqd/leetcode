function expandAroundCenter(s, left, right) {
  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }
  
  return right - left - 1;
}

function longestPalindrome(s: string): string {
  let longest = 0;
  let start = 0;
  
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    
    let actualLen = Math.max(len1, len2)
    
    if (actualLen > longest) {
      longest = actualLen
      start = i - Math.floor((actualLen - 1) / 2)
    }
    
    // console.log('actualLen ::: ', actualLen)
    // console.log('start ::: ', start)
    // console.log('================')
  }
  
  let output = ""
  
  while(output.length < longest) {
    output += s.charAt(start)
    start++;
  }
  
  return output;
};

// longestPalindrome("babad");