const Pagination = {
  page: 1,
  init(arr, pageSize) {
    let count = 0;
    const book = [];
    do {
      const pageContents = [];
      for (let i = count; i < count + pageSize; i++) {
        if (arr[i] === undefined) continue;
        pageContents.push(arr[i]);
      }
      book.push(pageContents);
      count += pageSize;
    } while (count <= arr.length);
    this.book = book;
    return book;
  },

  getPageItems() {
    return this.book[this.page - 1];
  },

  nextPage() {
    if (this.page < this.book.length) {
      this.page = this.page + 1;
    }
    return this;
  },
  prevPage() {
    if (this.page <= 2) {
      this.page = 1;
    } else {
      this.page = this.page - 1;
    }
    return this;
  },
  firstPage() {
    this.page = 1;
    return this;
  },
  lastPage() {
    this.page = this.book.length;
    return this;
  },
  goToPage(targetPage) {
    if (targetPage < 1 || targetPage > this.book.length) return this.page;
    this.page = targetPage;
    return this.page;
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4); // Do the pagination
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage().nextPage(); // the ability to call chainable
console.log(Pagination.getPageItems());
Pagination.goToPage(3); // current page must be set to 3
console.log(Pagination.getPageItems());
