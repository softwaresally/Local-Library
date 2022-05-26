function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  const results = accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
return results;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  let accountId = account.id;
  for (let i in books) {
    const borrowedBooks = books[i].borrows.filter((book) => book.id === accountId);
    result += borrowedBooks.length;
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let booksCheckedOutByAccount = books.filter((book) => book.borrows.some((book) => book.returned === false && book.id === accountId));
  booksCheckedOutByAccount.map(book => book['author'] = authors.find((author) => author.id === book.authorId));
  return booksCheckedOutByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
