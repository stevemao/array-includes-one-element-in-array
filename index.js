module.exports = (haystack, arr) => (
  arr.some(v => !!haystack.find(e => e.id === v.id))
);
