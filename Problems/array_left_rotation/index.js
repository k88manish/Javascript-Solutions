function leftRotate(a, d) {
  const rotateBy = d % a.length;

  const itemsToPushBack = a.splice(0, rotateBy);
  const rotatedArray = [...a, ...itemsToPushBack];

  return rotatedArray.join(" ");
}

module.exports = {
  leftRotate
};
