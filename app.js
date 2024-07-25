// import webApp from "@twa-dev/sdk";
// import { createWavesurfer } from "./wavesurferwarpper.js";
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const add_chapter = document.getElementsByClassName("add_chapter");
const add_note = document.getElementsByClassName("add_chapter");
const audioPlayback = document.getElementById("audioPlayback");
let mediaRecorder;
let audioChunks = [];

function webAppLauch() {
  window.Telegram.WebApp.themeParams.button_color = "#27A7E7";
  window.Telegram.WebApp.themeParams.headerColor = "#27A7E7";
  window.Telegram.WebApp.themeParams.button_text_color = "#ffff";
  console.log("window.Telegram.WebApp lauch:");
}

function initializingMiniApp() {}
webAppLauch();
function startRecording() {
  startBtn.addEventListener("click", async () => {
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
}

function stopRecording() {
  stopBtn.addEventListener("click", () => {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
  });
}
// startRecording();
// stopRecording();
function WavesurferInstance() {}
// WavesurferInstance();
// createWavesurfer();
