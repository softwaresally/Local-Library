function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let bookGenres = {};
  books.forEach((book) => {
    if (bookGenres[book.genre]) {
      bookGenres[book.genre]++;
    } else {
      bookGenres[book.genre] = 1;
    }
  });
  console.log(bookGenres);
  return Object.entries(bookGenres).map(([name, count]) => {return {name, count};
}).sort((a, b) => (b.count - a.count)).slice(0, 5);
}

function getMostPopularBooks(books) {
  let commonBooks = books.reduce((popularBooks, book) => {
    let booksObject = {};
    booksObject.name = book.title;
    booksObject.count = book.borrows.length;
    popularBooks.push(booksObject);
    return popularBooks;
  }, []);
  return commonBooks.sort((a, b) => (b.count - a.count)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularAuthors = [];
  for (let i = 0; i < authors.length; i++) {
    const authorId = authors[i].id;
    let popularAuthor = {name: `${authors[i].name.first} ${authors[i].name.last}`, count: 0};
    for (let j = 0; j < books.length; j++) {
      if (authorId === books[j].authorId) {
        popularAuthor.count += books[j].borrows.length;
        mostPopularAuthors.push(popularAuthor);
      }
    }
  }
  return mostPopularAuthors.sort((a, b) => (b.count - a.count)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
