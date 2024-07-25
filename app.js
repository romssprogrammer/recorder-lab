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
  window.Telegram.WebApp.themeParams.button_color = var(--tg-theme-bg-color);
  window.Telegram.WebApp.themeParams.headerColor = "#27a7e7";
  window.Telegram.WebApp.themeParams.button_text_color = "#FFFFE0";
}

function initializingMiniApp() {}
webAppLauch();
try {
  startBtn.addEventListener("click", async () => {
    startBtn.classList.add("startBtn_Active-Style");
    stopBtn.classList.add("stoptBtn_Active-Style");

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
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
} catch (error) {
  console.log(error);
}

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
