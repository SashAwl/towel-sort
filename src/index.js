
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return (matrix)
    ? matrix.reduce((accom, itemList, index) =>
      (index % 2)
        ? [...accom, ...itemList.reverse()]
        : [...accom, ...itemList]
      , [])
    : []
}
