/* Write Pagination object that will get an array and pageSize, then will return the following.
    prevPage
    nextPage
    firstPage
    lastPage
    goToPage
    getPageItems
*/
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
function init(arr, pageLength) {
  return book;
}
Pagination.init(alphabetArray, 4); // Do the pagination
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
