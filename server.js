const express = require('express');
const App = express();
const PORT = 9999;


// Articles
const articles = {
  'Intro': 'Welcome to app. Here is a document.',
  'Contact': 'To contact us, please reach out to email@company.com.',
};

App.use(express.urlencoded({ extended: true }));

// Browse    - Collection     GET /articles
App.get('/articles', (request, response) => {
  response.send(`
    <h1>Articles</h1>
    ${Object.entries(articles).map(([key, value]) =>
      `<p>
        <span><a href="/articles/${key}"><strong>${key}</strong></a> - ${value}</span>
        <form action='/articles/${key}/delete' method='POST'>
          <button>🚮</button>
        </form>
      </p>`
    ).join('')}
  `);
});

// Read      - Entry          GET /articles/:id
App.get('/articles/:id', (request, response) => {
  const articleTitle = request.params.id;
  const articleBody = articles[articleTitle];
  if (!articleBody) { return response.send('404 article not found :(') }
  response.send(`
    <h1>${articleTitle}</h1>
    <p>${articleBody}</p><a href="/articles">Back</a>
    <br/>
    <hr/>
    <form action='/articles/${articleTitle}' method='POST'>
      <textarea style="width: 480px" name='articleBody'>
        ${articleBody}
      </textarea>
      <input type='checkbox' name='hasRead'> Has Read
      <button>Submit Changes</button>
    </form>
  `);
});

// Edit      - Entry          POST /articles/:id
App.post('/articles/:id', (request, response) => {
  const articleTitle = request.params.id;
  console.log(request.body);
  articles[articleTitle] = request.body.articleBody;
  response.redirect(`/articles/${articleTitle}`);
});

App.post('/articles/:id/archive');

// Add       - Collection     POST /articles
App.post('/articles');

// Delete    - Entry          POST /articles/:id/delete
App.post('/articles/:id/delete', (request, response) => {
  const articleTitle = request.params.id;
  delete articles[articleTitle];
  response.redirect('/articles');
});

App.listen(PORT, () => { console.log('Listening on ' + PORT) });
