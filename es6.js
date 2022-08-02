// let movies = ["Kabaddi", "Kabaddi 2", "Kabaddi 3", "Kabaddi 4"]

// let movie1 = movies[0]
// let movie2 = movies[1]
// let movie3 = movies[2]

// let [movie1, movie2, ...remainingMovies] = movies
// console.log(movie1, movie2, remainingMovies)

// const person = {
//   name: "Ram",
//   phone: ["9812345678", "98132832323", "98123472343"],
//   address: "Kapan"
// };

// const {  phone, address, ...remaining } = person;
// console.log(remaining, phone, address)


// let movies = ["Kabaddi", "Kabaddi 2", "Kabaddi 3", "Kabaddi 4"]
// let music = ["Kesari", "Balidan"]
// // let [...newMovies] =  movies;

// let newMovies = [ ...movies, ...music, "Hello" ];
// // let newMovies = movies;
// // newMovies.pop()
// console.log(newMovies)

function sum(...numbers){
    return numbers.reduce((prev, curr) => prev + curr)
}
console.log(sum(10,20,30,40))
