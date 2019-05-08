module.exports = (app) => {
  const articles = require('../controllers/controller.js');

  // Create a new Article
  app.post('/api/article/new', articles.create);

  // Retrieve all Articles
  app.get('/api/articles', articles.findAll);

  // Retrieve a single Article with articleId
  app.get('/api/article/:articleId', articles.findOne);

  // Update an Article with articleId
  app.put('/api/article/:articleId/update', articles.update);

  // Delete an Article with articleId
  app.delete('/api/article/:articleId/remove', articles.delete);
};