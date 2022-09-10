const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (!rowsPerPage) {
    return 1
  }
  if (!arrayItems) {
    return undefined
  }
  return Math.ceil(arrayItems.length/rowsPerPage) 
}
module.exports = totalPages
