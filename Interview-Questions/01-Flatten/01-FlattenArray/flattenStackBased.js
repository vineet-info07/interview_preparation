const flatten2 = (arr) => {
  const stack = [...arr],
    result = [];
  while (stack.length) {
    const next = stack.pop();
    Array.isArray(next) ? stack.push(...next) : result.push(next);
  }
  return result.reverse();
};
