/**
        Program Akisi
0-Basla
1-Static html taslagini olustur
2-Html icin defaul stiller yaz
3-Dom`a ulasmak icin degiskenleri tanimla
4-Buttunlar icin click olayini dinle
5-Click olayinda calisacak fonksiyonlari yaz
6-Bitir
*/
/**
 * Degiskenler
 */
const secondPart = document.querySelector(".second-part");
const thirdPart = document.querySelector(".third-part");
const fourthPart = document.querySelector(".fourth-part");
const batteryText = document.querySelector(".battery-text");
const fill = document.querySelector(".fill");
const unload = document.querySelector(".unload");
const image = document.getElementById("image-bear");
let clickNumber = 0;
/**
 * Fill button click olunca calisacak fonksiyon
 */
const fillBattery = () => {
  clickNumber++;
  if (clickNumber === 1) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark red";
    batteryText.innerHTML = "33%";
    batteryText.className = "battery-text mt-2 red bg-light";
    imageBear("./images/1.png");
  } else if (clickNumber === 2) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark orange";
    thirdPart.className = "third-part battery-body border border-2 border-dark orange";
    batteryText.innerHTML = "66%";
    batteryText.className = "battery-text mt-2 orange bg-light";
    imageBear("./images/2.png");
  } else if (clickNumber === 3) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark green";
    thirdPart.className = "third-part battery-body border border-2 border-dark green";
    secondPart.className = "second-part battery-body border border-2 border-dark green";
    batteryText.innerHTML = "100%";
    batteryText.className = "battery-text mt-2 green bg-light";
    imageBear("./images/3.png");
  } else if (clickNumber > 3) {
    clickNumber = 3;
  }
};
/**
 * Unload button click olunca calisacak fonksiyon
 */
const unloadBattery = () => {
  clickNumber--;
  if (clickNumber === 2) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark orange";
    thirdPart.className = "third-part battery-body border border-2 border-dark orange";
    secondPart.className = "second-part battery-body border border-2 border-dark";
    batteryText.innerHTML = "66%";
    batteryText.className = "battery-text mt-2 orange bg-light";
    imageBear("./images/2.png");
  } else if (clickNumber === 1) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark red";
    thirdPart.className = "third-part battery-body border border-2 border-dark";
    secondPart.className = "second-part battery-body border border-2 border-dark";
    batteryText.innerHTML = "33%";
    batteryText.className = "battery-text mt-2 red bg-light";
    imageBear("./images/1.png");
  } else if (clickNumber === 0) {
    fourthPart.className = "fourth-part battery-body border border-2 border-dark ";
    thirdPart.className = "third-part battery-body border border-2 border-dark ";
    secondPart.className = "second-part battery-body border border-2 border-dark ";
    batteryText.innerHTML = "0%";
    batteryText.className = "battery-text mt-2";
    imageBear("");
  } else if (clickNumber < 0) {
    clickNumber = 0;
  }
};

const imageBear = (pImageLink) => {
  image.innerHTML = `<img src="${pImageLink}" alt="" class="bear" />`;
};

/**
 * Fill button click olayini dinleme
 */
fill.addEventListener("click", fillBattery);
/**
 * unload button click olayi dinleme
 */
unload.addEventListener("click", unloadBattery);
