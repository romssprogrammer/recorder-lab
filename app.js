// import webApp from "@twa-dev/sdk";
// import { createWavesurfer } from "./wavesurferwarpper.js";
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const add_chapter = document.getElementsByClassName("add_chapter");
const add_note = document.getElementsByClassName("add_chapter");
const audioPlayback = document.querySelector("#audioPlayback");
let mediaRecorder;
let audioChunks = [];

function webAppLauch() {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.themeParams.setHeaderColor("#27A7E7");
  window.Telegram.WebApp.themeParams.backgroundColor;
  window.Telegram.WebApp.themeParams.link_color;
  window.Telegram.WebApp.themeParams.bg_color;
  window.Telegram.WebApp.themeParams.text_color;
  window.Telegram.WebApp.themeParams.button_color;
  window.Telegram.WebApp.themeParams.accent_text_color;
}

function initializingMiniApp() {}
try {
  webAppLauch();
} catch (error) {
  console.log(error);
}
startBtn.addEventListener("click", async () => {
  startBtn.classList.add("startBtn_Active-Style");
  stopBtn.classList.add("stoptBtn_Active-Style");

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
  if (stream) console.log("please active your Mirophone");
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
    console.log(audioChunks);
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
  stopBtn.classList.remove("stoptBtn_Active-Style");
  startBtn.classList.remove("startBtn_Active-Style");
  mediaRecorder.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// startRecording();
// stopRecording();
function WavesurferInstance() {}
// WavesurferInstance();
// createWavesurfer();
