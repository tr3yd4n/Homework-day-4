//JS Arrays + Objs
//NOTE: movies array is defined at the end of this file!
//This movies array is used throughout the exercises. Please don't change it :)
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

//Ex.11
//Write a function called "deleteProp" which receives an object and a string as parameters, 
//and returns the given object after deleting its property named as the given string.

function deleteProp(obj, prop){
    delete obj[prop]
    return obj
}

//Ex.12 
//Write a function called "olderMovie" 
//which finds the oldest movie in the array provided at the end of this file.

function olderMovie(){
    let result = { Year: 2100 }
    for(let i = 0; i < movies.length; i++){
        let movie = movies[i]
        let currentYear = parseInt(movie.Year)
        if (currentYear < result.Year)
        result = movie
    }
    return result
}
console.log(olderMovie())

//Ex.13
//Write a function called "countMovies" 
//which returns the number of movies contained in the array provided at the end of this file.

function countMovies(){
    return movies.length
}
console.log(countMovies())

//Ex.14
//Write a function called "onlyTheTitles" 
//which creates an array with just the titles of the movies provided in the array at the end of the file.

function onlyTheTitles(){
    let result = []
    for (let i = 0; i < movies.length; i++){
    let movie = movies[i]
    result.push(movie.Title)
    }
    return result
}
console.log(onlyTheTitles())

//Ex.15
//Write a function called "onlyInThisMillennium" 
//which returns only the movies produced in this millennium.

function onlyInThisMillennium(){
    let result = []
    for(let i = 0; i < movies.length; i++){
        let movie = movies[i]
        if (parseInt(movie.Year) > 1999)
        result.push(movie)
    }
    return result
}
console.log(onlyInThisMillennium())

//Ex.16 
//Write a function called "getMovieById" which receives an id as a parameter 
//and returns the movie with the given id.

function getMovieById(id) {
    for(let i = 0; i < movies.length; i++){
        if (movies[i].imdbID === id)
            return movies[i]
    }
    return null
}
console.log(getMovieById("tt0120737"))
console.log(getMovieById("The Lord of the Rings: The Two Towers"))

//Ex.17
//Write a function called "sumAllTheYears" which returns the sum of all the years 
//in which the movies provided have been produced.

function sumAllTheYears(){
    let result = 0
    for(let i = 0; i < movies.length; i++){
    result += parseInt(movies[i].Year)
    }
    return result
}
console.log(sumAllTheYears())

// Ex.18
// Write a function called "searchByTitle" which receives a string as a parameter 
// and returns all the movies which contain that string in the title.

const searchByTitle = function(str){
    let matchedMovies = []
    for(let i=0; i < movies.length; i++){
        if(movies[i].Title.includes(str))
        matchedMovies.push(movies[i])
    }
    return matchedMovies
}
console.log(searchByTitle("Lord"))

//Ex.19
//Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
//this object should contain an array called "match", made by all the movies which contain the given string in the title,
//and another array "unmatch" with all the remaining ones

function searchAndDivide(str){
    result = {
    match: [],
    unmatch: []
    }
    for(let i = 0; i < movies.length; i++){
        if (movies[i].Title.includes(str))
        result.match.push(movies[i])
        else
        result.unmatch.push(movies[i])
    }
    return result
}
console.log(searchAndDivide("Lord"))

//Ex.20
//Write a function called "removeIndex" which receives a number as a parameter 
//and returns the movies array without the element in the given position.

function removeIndex(number){
  let result =[]
  for(let i = 0; i < movies.length; i++){
      if (number === i)
          continue 
          result.push(movies[i])
  }return result
}
console.log(removeIndex(2))