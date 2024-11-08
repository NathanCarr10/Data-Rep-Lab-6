const express = require('express'); //Express is a user-friendly framework that simplifies the development process of Node applications
const app = express();
const port = 4000;

//To allow communication between your React app and Node/Express server, you need to install and configure the cors middleware
const cors = require('cors');
app.use(cors()); //This middleware setup allows your frontend app (React) to make API requests to the backend (Express) without encountering CORS-related issues.

//added cors headers to enable cors cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

    //Installed body-parser: To handle POST requests
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //importing movie data from /api/movies.js file
app.get('/api/movies', (req, res) => {
    const movies = [
        
            {
              "Title": "Avengers: Infinity War (server)",
              "Year": "2018",
              "imdbID": "tt4154756",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
              "Title": "Captain America: Civil War (server)",
              "Year": "2016",
              "imdbID": "tt3498820",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
              "Title": "World War Z (server)",
              "Year": "2013",
              "imdbID": "tt0816711",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            }
    ]
    res.status(200).json({movies})
});

//Added a POST method to the Express server that logs the title, year, and poster URL of the movie object passed from the React app
app.post('/api/movies', (req,res) =>{
    console.log(req.body.title);
    res.send('Movie Added');

})

//app.listen() in Express is like telling your app to start listening for visitors on a specific address and port, much like how Node listens for connections
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});