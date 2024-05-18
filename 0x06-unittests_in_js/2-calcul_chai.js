function calculateNumber(type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    const newA = Math.round(a);
    const newB = Math.round(b);

    if (newA === 0) return 'Error';
    return newA / newB;
  }
  return null;
}

module.exports = calculateNumber;
