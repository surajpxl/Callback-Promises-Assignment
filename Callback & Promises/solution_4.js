function arrangeBooks(books, callback) {
  const titles = books.map(book => book.title);
  callback(titles);
}

function logTitlesAlphabetically(titles) {
  console.log(titles.sort());
}

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 }
];

arrangeBooks(books, logTitlesAlphabetically);
// Output: [ '1984', 'The Catcher in the Rye', 'To Kill a Mockingbird' ]
