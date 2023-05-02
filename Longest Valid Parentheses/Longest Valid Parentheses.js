/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    let stack = [-1];
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else {
        stack.pop();
        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
        }
      }
    }
    
    return maxLen;
  }
  