
module.exports = function towelSort (matrix = []) {
  let newArr = [];
  matrix.forEach(function(elem, index) {
    if(index%2!=0) {
      newArr = newArr.concat(elem.reverse());
    } else newArr = newArr.concat(elem);
  });
  return newArr;
}
