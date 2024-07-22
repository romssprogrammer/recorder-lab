// import webApp from "@twa-dev/sdk";

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const add_chapter = document.getElementsByClassName("add_chapter");
const add_note = document.getElementsByClassName("add_chapter");
const audioPlayback = document.getElementById("audioPlayback");
let mediaRecorder;
let audioChunks = [];

// function webAppLauch() {
//   webApp.ready();
// }
// webAppLauch();

startBtn.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    const audioUrl = URL.createObjectURL(audioBlob);
    audioPlayback.src = audioUrl;
    audioChunks = [];
  };

  mediaRecorder.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  mediaRecorder.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
