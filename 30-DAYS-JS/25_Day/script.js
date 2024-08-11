document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('btn');
    const searchBox = document.getElementById('search_box');
    const titleElement = document.getElementById('title');
    const posterElement = document.getElementById('movie_poster');
    const releasedElement = document.getElementById('movie_released');
    const runtimeElement = document.getElementById('movie_runtime');
    const directorElement = document.getElementById('movie_director');
    const actorsElement = document.getElementById('movie_actors');
    const writerElement = document.getElementById('movie_writer');
    const genreElement = document.getElementById('movie_genre');
    const plotElement = document.getElementById('movie_plot');
    const moreDetailsSection = document.getElementById('more_details');
    const viewMoreButton = document.getElementById('view_more');

    async function fetchData(movieTitle) {
        const apiKey = "847aa0d1";
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;  
        }
    }

    searchButton.addEventListener('click', async () => {
        const movieTitle = searchBox.value;
        try {
            const data = await fetchData(movieTitle);
            if (data) {
                titleElement.textContent = `Title: ${data.Title}`;
                posterElement.src = data.Poster;
                releasedElement.textContent = `Released: ${data.Released}`;
                runtimeElement.textContent = `Runtime: ${data.Runtime}`;
                directorElement.textContent = `Director: ${data.Director}`;
                actorsElement.textContent = `Actors: ${data.Actors}`;
                writerElement.textContent = `Writers: ${data.Writer}`;
                genreElement.textContent = `Genre: ${data.Genre}`;
                plotElement.textContent = `Plot: ${data.Plot}`;
                moreDetailsSection.classList.remove('visible'); 
                viewMoreButton.style.display = 'inline-block'; 
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    });

    viewMoreButton.addEventListener('click', () => {
        if (!moreDetailsSection.classList.contains('visible')) {
            moreDetailsSection.classList.add('visible');
        } else {
            moreDetailsSection.classList.remove('visible');
        }
    });
});
