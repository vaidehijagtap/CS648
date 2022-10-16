//STEP 01
var movies = ["Hocus Pocus 2", "Bullet Train", "Thirteen Lives", "Boss Baby", "Nobody"];
window.console.log(movies[1]);

//STEP 02

var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
window.console.log(movies[0]);


//STEP 03

var movies = ["Hocus Pocus 2", "Bullet Train", "Thirteen Lives", "Boss Baby", "Nobody"];
movies[movies.length] = "Venom";
window.console.log(movies.length);

//STEP 04

var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
delete movies[0];
window.console.log(movies);


//STEP 05
var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 06

var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 07
var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

//STEP 08
var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "No Time To Die";
leastFavMovies[1] = "Dune";
leastFavMovies[2] = "Palm Springs";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

//STEP 09

var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";

var leastFavMovies = [];
leastFavMovies[0] = "No Time To Die";
leastFavMovies[1] = "Dune";
leastFavMovies[2] = "Palm Springs";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


//STEP 10

var movies = [];
movies[0] = "Hocus Pocus 2";
movies[1] = "Bullet Train";
movies[2] = "Thirteen Lives";
movies[3] = "Boss Baby";
movies[4] = "Nobody";
movies[5] = "Venom";
movies[6] = "Apex";

var leastFavMovies = [];
leastFavMovies[0] = "No Time To Die";
leastFavMovies[1] = "Dune";
leastFavMovies[2] = "Palm Springs";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
