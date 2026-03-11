const isCloseBrackets = (char) => [")", "}", "]"].includes(char);
const isOpenBrackets = (char) => ["(", "{", "["].includes(char);

const isPair = (a, b) => {
  if (a === ')') return b === "("
  else if (a === '(') return b === ")"
  else if (a === '[') return b === ']'
  else if (a === ']') return b === '['
  else if (a === '{') return b === '}'
  else return b === '{'
}

function isValid(s: string): boolean {

const stack = [];

    if (s.length % 2 !== 0) return false;

    for (let i = 0; i < s.length; i++) {
      if (isOpenBrackets(s[i])) stack.push(s[i])
      else {
        if (isPair(s[i], stack[stack.length - 1])) {
          stack.pop()
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
};

// isValid("(([]){})")