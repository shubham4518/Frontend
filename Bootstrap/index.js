async function x() {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=30f11aef768c5ad4fba081ceae85bd23",
  );
  const finalData = await data.json();
  let body = document.getElementById("main-card");
  let section = document.getElementById("card-container");
  finalData.results.map((item, index) => {
    section.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="https://image.tmdb.org/t/p/original${item.backdrop_path}" class="card-img" alt="...">
    <h5 class="mt-2 mb-0">${item.original_title}</h5>
    <p class="card-text fg-2">${item.overview}</p>
    <small class="fg-3">${item.vote_average}</small>
    <button class="btn-solid theme-danger">Watch Movies</button>
  </div>`;
  });

  body.appendChild(section);
}
x();
