// // @ts-nocheck
// export function createAsciiPlayer({
//     container,
//     framesPath,
//   }) {
//     let frames = [];
//     let spans = [];
//     let rows = 0;
//     let cols = 0;
//     let frameIndex = 0;
//     let timer = null;

//     let fps = 0;
//     let frameCount = 0;
  
//     let frameTime = 0;
  
//     function hslCss(h255, s255, l255) {
//       const h = (h255 * 360) / 255;
//       const s = (s255 * 100) / 255;
//       const l = (l255 * 100) / 255;
//       return `hsl(${h}, ${s}%, ${l}%)`;
//     }
  
//     function buildGrid(frame) {
//       container.innerHTML = "";
//       spans = [];
  
//       for (let i = 0; i < frame.cells.length; i++) {
//         const span = document.createElement("span");
//         span.textContent = " ";
//         container.appendChild(span);
//         spans.push(span);
  
//         if ((i + 1) % cols === 0) {
//           container.appendChild(document.createTextNode("\n"));
//         }
//       }
//     }
  
//     function renderFrame(frame) {
//       const cells = frame.cells;
//       for (let i = 0; i < cells.length; i++) {
//         const c = cells[i];
//         const s = spans[i];
//         s.textContent = c.g === " " ? "\u00A0" : c.g;
//         s.style.color = hslCss(c.h, c.s, c.l);
//       }
//     }

//     async function loadManifest() {
//       const res = await fetch(`${framesPath}/manifest.json`);
//       const data = await res.json();
//       return data;
//     }
  
//     async function loadFrames() {
//       for (let i = 0; i < frameCount; i++) {
//         const res = await fetch(`${framesPath}/${i}.json`);
//         frames.push(await res.json());
//       }
//       buildGrid(frames[0]);
//     }
  
//     function play() {
//       renderFrame(frames[frameIndex]);
//       frameIndex = (frameIndex + 1) % frames.length;
//     }
  
//     async function start() {
//       const manifest_data = await loadManifest();
//       rows = manifest_data.rows;
//       cols = manifest_data.cols;
//       fps = manifest_data.fps;
//       frameCount = manifest_data.frame_count;
//       frameTime = 1000 / fps;
//       await loadFrames();
//       timer = setInterval(play, 100);
//     }
  
//     function stop() {
//       if (timer) clearInterval(timer);
//     }
  
//     return { start, stop };
//   }
  