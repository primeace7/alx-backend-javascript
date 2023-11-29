export default function appendToEachArrayValue(array, appendString) {
  const copy = array;
  for (const idx of copy) {
    copy[copy.indexOf(idx)] = appendString + idx;
  }

  return array;
}
