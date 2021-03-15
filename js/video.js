const video = document.querySelector("video");
const promise = video.play();
if (promise !== undefined) {
  promise
    .then((_) => {})
    .catch((error) => {
      video.muted = true;
      video.play();
    });
}
