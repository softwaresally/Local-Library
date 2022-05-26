function findAuthorById(authors, id) {
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (author.id === id) {
        return author;
      }
    }
  }
  
  function findBookById(books, id) {
    for (let i = 0; i < books.length; i ++) {
      const book = books[i];
      if (book.id === id) {
        return book;
      }
    }
  }
  
  function partitionBooksByBorrowedStatus(books) {
    let notReturned = books.filter((book) => book.borrows.some((transaction) => !transaction.returned));
    let returnedBooks = books.filter((book) => book.borrows.every((transaction) => transaction.returned));
    let result = [];
    result.push(notReturned);
    result.push(returnedBooks);
    return result;
  }
  
  function getBorrowersForBook(book, accounts) { 
    let transaction = book.borrows; 
    const result = transaction.map((transaction) => { 
        let accountInfo = accounts.find((account) => account.id === transaction.id);
        const newTransaction = { ...transaction, ...accountInfo,}; 
        return newTransaction; 
        }); result.splice(10); 
    return result; 
  }
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };
  