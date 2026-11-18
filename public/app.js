const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
const results = document.querySelector("#results");
const nowPlaying = document.querySelector("#now-playing");
const audio = document.querySelector("#audio");

form?.addEventListener("submit", async (event) => {
  event.preventEvent();
});
