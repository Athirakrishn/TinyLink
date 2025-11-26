                              TINY LINK 
---------------------------------------------------------------------------
Website we can make large link to small links
user can input their large url then get small url 
also they can see the created link time and the link Statistics
user can delete their links 
website created using "REACT JS + NODE JS + MONGO DB"
---------------------------------------------------------------------------
frontend
    ---------
    1 create project  using  npm vite@latest tinylink -- --template react
    2 install packages - react router dom , axios 
    3 create components 
    4 design   UI using css tailwind css
    5 create a folder named services for api calls and used to connect backend 
    6 create controller function for api call then make routes for corespondent controllers 
    7 after backend deployment using render. replace that server url to  render given url

Backend
    -------
    1. create backend folder then create package.json using- npm init -y
    2. install package express cors dotenv mongoose(for connect backend with mongoDb) and nanoid(for make short url)
    3.create files for .env .gitignore index.js . then create folder for controllers , routing,database, model(created different folders because-follow mvc architecture )
    4 create  server , create port number 
    create database and connect the database using "dbconnectionstring"
    create controllers for each task
    set router for each task
    
test the each task (get , post , delete )in the help of "postman"

connect the backend to the frontend

