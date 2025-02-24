const API_KEY = "AIzaSyB2rez4pPXPRcRtw82jlDqoaYc52gN11PQ";

async function searchVideos() {
    try {
        const query = document.getElementById("search").value;
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${query}&type=video&maxResults=5`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.items.length) {
            alert("Видео не найдено!");
            return;
        }

        const mainVideoId = data.items[0].id.videoId;
        showPlayer(mainVideoId);

        const thumbnailsContainer = document.getElementById("thumbnails");
        thumbnailsContainer.innerHTML = "";

        data.items.forEach(video => {
            const thumb = document.createElement("img");
            thumb.src = video.snippet.thumbnails.medium.url;
            thumb.classList.add("m-2", "preview");
            thumb.width = 120;
            thumb.addEventListener("click", () => showPlayer(video.id.videoId));
            thumbnailsContainer.appendChild(thumb);
        });

    } catch (error) {
        console.error("Ошибка:", error);
    }
}

function showPlayer(videoId) {
    document.getElementById("player").innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
}

document.getElementById("search_button").addEventListener("click", searchVideos);

document.getElementById("search").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchVideos();
    }
});
