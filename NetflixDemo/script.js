// Local Movie Mock Data Arrays
const trendingMovies = [
    { title: "The Midnight Chase", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400" },
    { title: "Neon Horizons", img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400" },
    { title: "Shadow Valley", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400" },
    { title: "Deep Sea Echoes", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400" }
];
const actionMovies = [
    { title: "Velocity Zero", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400" },
    { title: "Cyber City 2050", img: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=400" }, 
    { title: "Crimson Sky", img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400" },
    { title: "The Last Frontier", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400" }
];
// Target UI Elements
const trendingRow = document.getElementById('trendingRow');
const actionRow = document.getElementById('actionRow');
const videoModal = document.getElementById('videoModal');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const closeModal = document.getElementById('closeModal');
const billboardPlayBtn = document.getElementById('billboardPlayBtn');
const billboardInfoBtn = document.getElementById('billboardInfoBtn');
// Function to open the simulated video player
function openMoviePlayer(title) {
    modalMovieTitle.textContent = `Now Streaming: ${title}`;
    videoModal.style.display = 'flex';
}
//Billboard Button Actions
billboardPlayBtn.addEventListener('click', () => openMoviePlayer("Stranger Things (Season 4)"));
billboardInfoBtn.addEventListener('click', () => openMoviePlayer("Stranger Things (Behind the Scenes)"));
//Reusable function to render rows with a pop-up title interface
function renderRow(movieArray, containerElement) {
    movieArray.forEach(movie => {
        //1. Create the main wrapper block
        const wrapper = document.createElement('div');
        wrapper.classList.add('movie-wrapper');
        //2. Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = movie.img;
        imgElement.alt = movie.title;
        imgElement.classList.add('movie-card');
       //3. Create the pop-up text block layout (Now ONLY showing the title)
        const infoPop = document.createElement('div');
        infoPop.classList.add('movie-info-pop');
        infoPop.innerHTML = `
            <h4>${movie.title}</h4>
        `;
        // 4. Assemble the pieces
        wrapper.appendChild(imgElement);
        wrapper.appendChild(infoPop);
        // Clicking anywhere on the card wrapper launches the player popup
        wrapper.addEventListener('click', () => {
            openMoviePlayer(movie.title);
        });

        // Push the fully built wrapper to the row shelf container
        containerElement.appendChild(wrapper);
    });
}
// Close Modal Logic
closeModal.addEventListener('click', () => videoModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === videoModal) videoModal.style.display = 'none';
});
// Run
renderRow(trendingMovies, trendingRow);
renderRow(actionMovies, actionRow);