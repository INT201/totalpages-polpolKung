const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  return Math.ceil(arrayItems.length/rowsPerPage)
}
module.exports = totalPages
