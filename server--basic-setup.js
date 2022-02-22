const express = require('express');
const App = express();

const PORT = 9999;

App.get('/', (request, response) => {
  response.send(`
  <h1>Home</h1>
  `);
});

App.get('/about', (request, response) => {
  response.send(`
  <h1>This is my Express app</h1>
  `);
});
// App.post

App.get('show-me-some-documents')
App.post('show-me-some-documents')
App.get('allDocuments');
App.get('newerDocuments');
App.delete('get-rid-of-that-document/:which_document');

App.use('*', (request, response) => {
  // response.send("<h1>404</h1><p>Couldn't find that.</p>");
  response.redirect('/');
});

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
