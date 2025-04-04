// Find the duplicate Methods

function duplicateArrays(arrays) {
  return arrays.filter((subArrays) => {
    const setValue = new Set(subArrays);
    return setValue.size < subArrays.length;
  });
}
const value = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 1, 6],
  [2, 2, 4],    // Added this array with duplicate 2
  [1, 3, 3, 5]  // Added this array with duplicate 3
];

const uniqueValue = duplicateArrays(value);
console.log(uniqueValue);
