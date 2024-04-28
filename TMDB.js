const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM3NTYxOWRkMjQ4MmRlYmEzYWQ3ODM2OTM0NjJmNSIsInN1YiI6IjY2MmI0MTdiOWFjNTM1MDExYjhmMWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1EKSwKqu2zDrXF8KNluLjyFHsVHo_4Tzpqz0s0B3WnE",
  },
};

const searchBtnDOM = document.getElementById("searchBtn");
const topList = document.getElementById("topList");

function topMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then(listMovies)
    .catch((err) => console.error(err));
}

function listMovies(data) {
  data.results.forEach((element) => {
    topList.innerHTML += `
    <div class = "mvPoster">
    <img src = https://image.tmdb.org/t/p/w300/${element.poster_path}.jpg>
    <div class = "mvTItle">
    <p>${element.title}</p>
    <div class = "mvOverview">
    <p>${element.overview}</p>
    <div class = "mvAverage">
    <p>Rate: ${element.vote_average}</p>
    </div>
    </div>
    </div>
    </div>   
    `;
  });
}

topMovies();
