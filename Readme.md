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
- tokenisation in .env file -> importing jwt functions via tokens in models

### File uploading 
- install two packages -> multer and cloudinary
- created a file in ./utils named cloudinary.js 
- import packages and also the fs module which comes built in by node
- add the cloudinary details in .env file and its functions in cloudinary.js 

### Middlewares
- use of multer here -> create a multer file and then add functions for upload files via middleware

### Controllers
- created a user file for asyncHandler for login purpose

### Routes
- created a user route file for routing 
- import registerUser from controller.js and export it to app.js 
- all setup is done
- run the server , mongoDB connected -> use the url in postman to get the output

### Register Controller
- import other files to user.controller.js and write their function according to our need