export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  for (const idx of array) {
    array[count] = appendString + idx;
    count += 1;
  }

  return array;
}
