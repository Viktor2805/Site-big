// === runVideo === // 
const runVideo = () => {
    const video = document.getElementById("video");
    document.querySelector(".video-button-play").addEventListener("click", () => {
        video.style.zIndex = "1000", video.play();
    });
}
runVideo();
// === runVideo === //
