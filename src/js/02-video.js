const BASE_URL = 'http://localhost:3000';
// DELETE

// function deleteBookById(bookId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(res => res.json())
//     .then(console.log());
// }
// deleteBookById(15);
// deleteBookById(14);

// PATCH or PUT ************ PATCH змінює передані властивості,
// PUT повністю замінює елемент новим
// const book = {
//   title: 'Тестова книжка Мацюк Н.',
// };
// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   return fetch(`${BASE_URL}/books/${bookId}`, options)
//     .then(res => res.json())
//     .then(console.log());
// }

// updateBookById(book, 14);
// updateBookById({ rating: 10 }, 14);
// updateBookById({ rating: 7.7, title: 'Тестова книжка М.Н.' }, 15);
// читалка GET  ********************************

// function fetchBooks(arguments) {
//   return fetch(`${BASE_URL}/books`)
//     .then(res => res.json)
//     .then(console.log);
// }

// function fetchBookById(bookId) {
//   fetch(`${BASE_URL}/${bookId}`)
//     .then(res => res.json)
//     .then(console.log);
// }
// fetchBooks();
// fetchBookById(2);
// писалка POST  *******

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };
//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }
// addBook({
//   title: 'Тестова книжка Ніка',
//   author: 'Мацюк Ніка',
//   genres: ['казки'],
//   rating: 9.8,
// }).then(renderBook).catch(error => console.log(error))

// function renderBook(book) {
//   console.log(book);
//   console.log('tatata');
// }
