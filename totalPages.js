const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if (!rowsPerPage) {
    rowsPerPage = 1
  }
  return Math.ceil(arrayItems.length/rowsPerPage) 
}
module.exports = totalPages
