# Articles
Standard CRUD app where the user can Create, Read, Update, and Delete articles using the MERN(MongoDB, Express, React, Node) development stack.

## API Endpoints
### Create Article
* **URL**

    /api/article/new
    
* **Method**

    `POST`
    
* **URL Params**

    `title=[string]`
    
    `content=[string]`
    
### Read Article
* **URL**

    /api/article/:id
    
* **Method**

    `GET`
    
* **URL Params**

    None
    
### Read All Articles
* **URL**

    /api/articles
    
* **Method**

    `GET`
    
* **URL Params**

    None
    
### Update Article
* **URL**

    /api/article/:id/update
    
* **Method**

    `POST`
    
* **URL Params**

    `title=[string]`
    
    `content=[string]`
    
### Delete Article
* **URL**

    /api/article/:id/remove
    
* **Method**

    `POST`
    
* **URL Params**

    `id=[string]`
    

