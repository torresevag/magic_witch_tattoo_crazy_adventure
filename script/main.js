import { getTattoo, BUTTON } from "./sphere.js";
import { updateCarrusel } from "./slider.js";
import { showFormDisplay } from "./form_validation.js";

//risa bruja
const AUDIO = document.getElementById("witch-sound");
updateCarrusel();
setInterval(updateCarrusel, 4000);

BUTTON.addEventListener("click", () => {
  AUDIO.currentTime = 0;
  AUDIO.play();
  getTattoo();
  setTimeout(() => {
    showFormDisplay();
  }, 2500);
});