class Book {
  #author;
  #title;
  totalPages;
  readenPages = 0;
  price;
  read = false;
  review;

  constructor(author, title, pages, price, review) {
    this.#author = author;
    this.#title = title;
    this.totalPages = pages;
    this.price = price;
    this.review = review;
 
  }

  toRead(readenPages) {
    this.readenPages = readenPages;
    if(readenPages === 1300) {
      this.read = true;
      this.changePrice("chipper")
      this.addReview("never again")
    }
  }

  changePrice(price) {
    this.price = price;
  }

  addReview(review) {
    this.review = review;
  }

  
}

const book = new Book("Tolstoi", "War and peace", 1300, 600, "any")
book.toRead(1300)
console.log(book) 