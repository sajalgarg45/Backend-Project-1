# My backend Project details

### Creating files and folders

- create a public folder
- inside it create a temp folder and inside it create a file .gitkeep
- create another file gitignore -> visit the gitignore generator website and than copy the code and paste in it 
- create a .env file
- create public folder 
- inside it create 3 new files [index,app,constants].js

### package.json

- "type": "module", -> for importing packages
- npm install -D nodemon -> for avoiding server start and close after updation
- "dev": "nodemon src/index.js" -> inside scripts in package.json -> to call nodemon when it requires
- npm install -D prettier -> uses for formatting and avoid any unnecessary git errors
- create two new files - .prettierignore and .prittierrc -> to see uses read the files
- install mongoose express dotenv -> important packages

### Connecting Database

- login to mongodb atlas , create a free cloud database
- get the shell url and paste it in .env file 
- paste the password in the url and the username is already linkedin in the url
- "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js" -> change it in package.json
- do some code updation in index.js , constants.js, ./db/index.js files
- now our backend is connected 

> Important Note

- always use try catch or promises in database -> because a lot of errors come during the development
- always use async await in databases -> because it took time to get responses 


### Some more packages to install

- npm i cookie-parser cors ->
- cookie parser for ->
- cors for ->
- call these packages in app.js

### Utils
- for middlewares setup we create some files in utils folder
- [ApiError, ApiResponse, asynchandler].js -> three files
- ApiError -> 
- ApiResponse -> 
- asynchandler -> 

### Models
- user.model.js and video.model.js -> creates model 
- installed a package -> npm i mongoose-aggregate-paginate-v2 
- another package jwt[json web token] and bcrypt 
- add their functions in the model files
- tokenisation in .env file