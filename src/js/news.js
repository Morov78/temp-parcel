const KEY = '834e5c777b504c48a337b01b262c10d5';
const params = new URLSearchParams({
  apiKey: KEY,
  country: 'ua',
  page: 1,
  pageSize: 10,
});
const refs = {
  outputTotalResults: document.querySelector('.js-output-total'),
  outputArticles: document.querySelector('.js-articles'),
};
fetch(`https://newsapi.org/v2/top-headlines?${params}`).then(response =>
  response.json().then(data => fetchData(data))
);

function fetchData(items) {
  outputTotalResults(items.totalResults);
  console.log(items.articles);
  renderArticles(items.articles);
}

function outputTotalResults(numberResults) {
  refs.outputTotalResults.textContent = numberResults;
}
function renderArticles(articles) {
  const makeArticles = articles.reduce(
    (acc, article) => acc + makeArticle(article),
    ''
  );
  refs.outputArticles.insertAdjacentHTML('beforeend', makeArticles);
}

function makeArticle({
  title,
  author,
  urlToImage,
  description,
  publishedAt,
  url,
}) {
  return `
  <li class="list__item">
    <a class="list__link" href="${url}" target="_blank" rel="noopener noreferrer">
      <img src="${urlToImage}" alt="${description}">
      <h2>${title}</h2>
      <p><b>Author</b>: ${author}</p>
      <p><b>Published Date</b>: ${publishedAt}</p>

    </a>
  </li>`;
}
//// author: "Українська правда"
//// content: ", .\r\n: \r\n: \" , . . , .\r\n , , . . , , – .\r\n , \".\r\n: , .\r\n\" ( – .), , . , \"HIMARS\", \", – .\r\n , , , .\r\n\" , , . , \", - .\r\n: 31 Politico Maxar, .\r\n InformNapalm ,   .\r\n , \" \".\r\n:\r\n<ul><li>29    , . , 53 .… [+86 chars]"
//// description: ""
//// publishedAt: "2022-08-01T18:04:27Z"
// source: {id: null, name: "Pravda.com.ua"}
//// title: "Полонених в Оленівці могли вбити за допомогою термобаричної зброї – генпрокурор - Українська правда"
// url: "https://www.pravda.com.ua/news/2022/08/1/7361416/"
//// urlToImage: "https://img.pravda.com/images/doc/9/0/9055996-olenivka-suputnyk.jpg"
// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3];

//   // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

// const YOUR_API_KEY = '8b0c7f7b-6f51-46e6-aecc-c1399eedc5c7';
// const BASE_URL = 'http://eventregistry.org/api/v1/article';
// const options = {action: "getArticles",
//     // "keyword": "Barack Obama",
//     // "articlesPage": 1,
//     // "articlesCount": 100,
//     // "articlesSortBy": "date",
//     // "articlesSortByAsc": false,
//     // "articlesArticleBodyLen": -1,
//     // "resultType": "articles",
//     // "dataType": [
//     //   "news",
//     //   "pr"
//     // ],
//     apiKey: "8b0c7f7b-6f51-46e6-aecc-c1399eedc5c7",
//     // "forceMaxDataTimeWindow": 31,
//   };
//   const po=JSON.stringify(options);
// console.log(po);

// fetch(`http://eventregistry.org/api/v1/article/getArticles?`,po).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     console.log(response.status);
//     return response.json();
// }).then(data => console.log(data))
//     .catch(error=>console.log(error))
// console.log();
// console.log('');
// console.log();
