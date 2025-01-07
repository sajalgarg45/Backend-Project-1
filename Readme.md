# My backend Project details

### Creating files and folders

- create a publiuc folder
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

> Important Note

- always use try catch or promises in database -> because a lot of errors come during the development
- always use async await in databases -> because it took time to get responses 