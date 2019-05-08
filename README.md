# Articles
Standard CRUD app where the user can Create, Read, Update, and Delete articles using the MERN(MongoDB, Express, React, Node) development stack.

User has the choice to use the below link to interact with the API using my UI or use the API Endpoints themselves following the root URL (https://articles-api-crud.herokuapp.com/) to create their own app.

View it live [here](https://articles-api-crud.herokuapp.com/).
## API Endpoints
### Create Article
* **URL**

    /api/article/new
    
* **Method**

    `POST`
    
* **Params**

    `title=[string]`
    
    `content=[string]`
    
### Read Article
* **URL**

    /api/article/:id
    
* **Method**

    `GET`
    
* **Params**

    None
    
### Read All Articles
* **URL**

    /api/articles
    
* **Method**

    `GET`
    
* **Params**

    None
    
### Update Article
* **URL**

    /api/article/:id/update
    
* **Method**

    `POST`
    
* **Params**

    `title=[string]`
    
    `content=[string]`
    
### Delete Article
* **URL**

    /api/article/:id/remove
    
* **Method**

    `POST`
    
* **Params**

    `id=[string]`
    

