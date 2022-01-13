// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = [...str].reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
  const values = Object.values(chars);
  const max = Math.max(...values);
  const index = values.indexOf(max);
  return Object.keys(chars)[index];
}

module.exports = maxChar;
