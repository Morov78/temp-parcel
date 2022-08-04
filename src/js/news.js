import axios from 'axios';
const KEY = '834e5c777b504c48a337b01b262c10d5';
let timer = null;
const params = new URLSearchParams({
  apiKey: KEY,
  category: 'general',
  country: 'ua',
  page: 1,
  pageSize: 10,
});

const refs = {
  outputNumberResults: document.querySelector('.js-output'),
  outputCurrentResults: document.querySelector('.js-output-item'),
  outputTotalResults: document.querySelector('.js-output-total'),
  outputArticles: document.querySelector('.js-articles'),
  form: document.querySelector('.form'),
  inputSelect: document.querySelector('.form select'),
  queryButton: document.querySelector('.form button'),
};
refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  refs.outputArticles.innerHTML = '';
  params.set('category', refs.inputSelect.value);
  params.set('page', 1);
  refs.outputNumberResults.classList.remove('is-hidden');
  findFetch(params);
  timer = setInterval(infiniteScroll, 300);
}
// функція безперервного скрола
function infiniteScroll() {
  const heightWindow = window.innerHeight;
  const positionY = window.scrollY;
  const maxY = refs.outputArticles.clientHeight;
  if ((maxY - positionY < 1.7 * heightWindow) & (positionY > heightWindow)) {
    params.set('page', Number(params.get('page')) + 1);
    // console.log(params.toString());

    findFetch(params);
  }
}

function findFetch(params) {
  axios
    .get(`https://newsapi.org/v2/top-headlines?${params}`)
    .then(response => fetchData(response.data));
}

function fetchData(items) {
  currentItems =
    items.articles.length + (params.get('page') - 1) * params.get('pageSize');
  outputTotalResults(currentItems, items.totalResults);

  renderArticles(items.articles);
  const isInterval = currentItems >= items.totalResults;

  // console.log(isInterval);
  if (isInterval) {
    clearInterval(timer);
  }
}
// виводить поточну кількість результатів і максимальну кількість результатів
function outputTotalResults(currentResults, numberResults) {
  refs.outputCurrentResults.textContent = currentResults;
  numberResults ? (refs.outputTotalResults.textContent = numberResults) : null;
}
// рендер новин на сторінку
function renderArticles(articles) {
  const makeArticles = articles.reduce(
    (acc, article) => acc + makeArticle(article),
    ''
  );
  refs.outputArticles.insertAdjacentHTML('beforeend', makeArticles);
}
// створює розмітку однієї новини
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
      ${
        urlToImage ? `<img src="${urlToImage}" alt="${description}"></img>` : ''
      }
      <h2>${title}</h2>
      <p><b>Author</b>: ${author}</p>
      <p><b>Published Date</b>: ${publishedAt}</p>

    </a>
  </li>`;
}
