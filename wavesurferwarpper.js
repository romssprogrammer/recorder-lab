// import WaveSurfer from "./node_modules/wavesurfer.js/dist/wavesurfer.js";
// import RecordPlugin from "./node_modules/wavesurfer/dist/plugins/record.esm.js";

// import WaveSurfer from "wavesurfer.js";
// import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";

const audio = [
  "in-slow-motion-inspiring-ambient-lounge-219592.mp3",
  "in-slow-motion-inspiring-ambient-lounge-219592.mp3",
];
function createAudioList() {
  audio.map((audio) => {
    createWavesurfer(audio);
  });
}

// export function createWavesurfer(audios) {
//   const wavesurfer = WaveSurfer.create({
//     container: "#waveform",
//     waveColor: "#4F4A85",
//     progressColor: "#383351",
//     url: `/${audios}`,
//   });

//   wavesurfer.on("interaction", () => {
//     wavesurfer.play();
//   });
// }
// createAudioList();

let wavesurfer, record;
let scrollingWaveform = false;

const createWaveSurfer = () => {
  // Create an instance of WaveSurfer
  if (wavesurfer) {
    wavesurfer.destroy();
  }
  wavesurfer = WaveSurfer.create({
    container: "#mic",
    waveColor: "rgb(200, 0, 200)",
    progressColor: "rgb(100, 0, 100)",
  });

  // Initialize the Record plugin
  record = wavesurfer.registerPlugin(
    RecordPlugin.create({ scrollingWaveform, renderRecordedAudio: false })
  );
  // Render recorded audio
  record.on("record-end", (blob) => {
    const container = document.querySelector("#recordings");
    const recordedUrl = URL.createObjectURL(blob);
    console.log(recordedUrl);
    function CreateWaveSurferFromRecordedAudio() {
      const wavesurfer = WaveSurfer.create({
        container,
        waveColor: "rgb(200, 100, 0)",
        progressColor: "rgb(100, 50, 0)",
        url: recordedUrl,
      });
    }
    CreateWaveSurferFromRecordedAudio();
    function playButton() {
      const button = container.appendChild(document.createElement("button"));
      button.textContent = "Play";
      button.onclick = () => wavesurfer.playPause();
      wavesurfer.on("pause", () => (button.textContent = "Play"));
      wavesurfer.on("play", () => (button.textContent = "Pause"));
    }
    playButton();
    // Download link
    const link = container.appendChild(document.createElement("a"));
    Object.assign(link, {
      href: recordedUrl,
      download: "recording." + blob.type.split(";")[0].split("/")[1] || "webm",
      textContent: "Download recording",
    });
  });
  pauseButton.style.display = "none";
  recButton.textContent = "Record";
};

createWaveSurfer();
