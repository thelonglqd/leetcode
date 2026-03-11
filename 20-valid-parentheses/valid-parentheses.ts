const parentheses = new Map();
parentheses.set("(", ")")
parentheses.set("[", "]")
parentheses.set("{", "}")

function isValid(s: string): boolean {

    const stack = [];
    
    if (s.length % 2 !== 0) return false;

    for (let i = 0; i < s.length; i++) {
      if (parentheses.has(s[i])) stack.push(parentheses.get(s[i]))
      else {
        let last = stack.pop();
        if (last !== s[i]) return false;
      }
    }

    return stack.length === 0;
};