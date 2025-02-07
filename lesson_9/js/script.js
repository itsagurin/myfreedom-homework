const images = document.querySelectorAll(".gallery img");
const savedImage = localStorage.getItem("selectedImage");

if (savedImage) {
    document.body.style.backgroundImage = `url(${savedImage})`;
    images.forEach(img => {
        if (img.src === savedImage) {
            img.classList.add("selected");
        }
    });
}

images.forEach(img => {
    img.addEventListener("click", () => {
        document.body.style.backgroundImage = `url(${img.src})`;
        localStorage.setItem("selectedImage", img.src);
        images.forEach(i => i.classList.remove("selected"));
        img.classList.add("selected");
    });
});