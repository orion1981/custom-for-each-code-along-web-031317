function forEach(interable, callback) {
  if (Array.isArray(interable)) {
    for (let i = 0, l = interable.length; i < l; i++) {
      const element = interable[i];
      callback(element, i, interable);
    }
} else if (typeof interable === 'object') {
  for (const key in interable) {
    const value = interable[key];
    callback(value, key, interable);
    }
  }
}
