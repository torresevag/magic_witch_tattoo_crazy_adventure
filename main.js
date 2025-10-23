//CARRUSELL DE FOTOS:
const carrusel = document.getElementById("carrusel");
const slides = carrusel.querySelectorAll("img");
let currentIndex = 0;
const visibleSlides = 3; // 👈 importante para que se calcule bien el desplazamiento
const totalSlides = slides.length;
carrusel.innerHTML += carrusel.innerHTML; // 👈 duplica el contenido
const allSlides = carrusel.querySelectorAll("img"); // ahora hay el doble

function updateCarrusel() {
  allSlides.forEach((slide) => {
    slide.classList.remove("opacity-100", "scale-100", "scale-75", "blur-0");
    slide.classList.add("opacity-70", "scale-75", "blur-sm");
  });

  const middleIndex = (currentIndex + 1) % totalSlides; // usa totalSlides, no allSlides
  allSlides[middleIndex].classList.remove("opacity-70", "scale-75", "blur-sm");
  allSlides[middleIndex].classList.add("opacity-100", "scale-100", "blur-0");

  const slideWidth =
    allSlides[0].offsetWidth +
    parseInt(getComputedStyle(allSlides[0]).marginRight);
  carrusel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  currentIndex++;

  // 👇 Si llega al final de la lista duplicada, vuelve al inicio sin transición
  if (currentIndex >= totalSlides) {
    carrusel.style.transition = "none"; // desactiva la animación
    currentIndex = 0;
    carrusel.style.transform = `translateX(0px)`;

    // ⚡ Reactiva la animación después de un tick
    setTimeout(() => {
      carrusel.style.transition = "transform 0.7s ease-in-out";
    }, 50);
  }
}
updateCarrusel();
setInterval(updateCarrusel, 4000);

//EFECTO PARTICULAS:

(function () {
  const layer = document.getElementById("particle-layer");
  if (!layer) return;
  const symbols = ["🌙", "★", "✨", "☾", "☽", "✦", "☄"];
  const PARTICLE_COUNT = 50;
  const particles = [];

  function updateSize() {
    return {
      width: layer.clientWidth || window.innerWidth,
      height: layer.clientHeight || window.innerHeight,
    };
  }

  const { width, height } = updateSize();

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const depth = Math.random();
    const minSize = 8,
      maxSize = 28;
    const size = minSize + (1 - depth) * (maxSize - minSize);
    p.style.fontSize = size + "px";

    // Posición inicial dentro del contenedor
    const safeWidth = width - size;
    const safeHeight = height - size;
    const left = Math.random() * safeWidth;
    const top = Math.random() * safeHeight;
    p.style.left = left + "px";
    p.style.top = top + "px";

    layer.appendChild(p);

    const startTime = performance.now() - Math.random() * 10000;

    particles.push({
      el: p,
      depth: depth,
      baseLeft: left,
      baseTop: top,
      amplitudeX: Math.min(20 * (1 - depth), safeWidth / 2),
      amplitudeY: Math.min(20 * (1 - depth), safeHeight / 2),
      period: Math.random() * 6 + 4,
      rotate: Math.random() * 360,
      size: size,
      start: startTime,
    });
  }

  function animate() {
    const { width, height } = updateSize();

    particles.forEach((p) => {
      const elapsed =
        (performance.now() - (p.start || performance.now())) / 1000;

      // Movimiento flotante relativo a la base
      const offsetX =
        Math.sin((elapsed / p.period) * 2 * Math.PI) * p.amplitudeX;
      const offsetY =
        Math.cos((elapsed / p.period) * 2 * Math.PI) * p.amplitudeY;

      // Transformación sin congelar la animación
      p.el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${
        p.rotate + elapsed * 20
      }deg)`;

      const opacity =
        0.4 +
        0.6 * (1 - p.depth) * (0.5 + 0.5 * Math.sin(elapsed * 2 + p.rotate));
      p.el.style.opacity = opacity;
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {});
})();

//esfera flotante

const BTN_GENERATOR = document.getElementById("generar");
const SPHERE = document.getElementById("tattoo");
const SEND_FORM_BTN = document.getElementById("send_form_btn");
const ANCORES = document.querySelectorAll(".my_ancore");
const CONTACT_BTN = document.querySelector('.contact_button_var');
const BUTTON = document.getElementById("generar");
const AUDIO = document.getElementById("witch-sound");

const BACKGROUND_LIST = [
  "🌿",
  "☁️",
  "🌊",
  "🌋",
  "🏔️",
  "🌃",
  "Without Background",
];
const ELEMENT_LIST = [
  "🐍",
  "🌺",
  "🐲",
  "🦁",
  "🦄",
  "🪱",
  "👽",
  "🧜🏻‍♀️",
  "🥇",
  "🎸",
  "👻",
  "🧙🏽",
  "🧩",
  "🫀",
  "👁️",
  "🦷",
];
const STYLE_LIST = ["OLD SCHOOL", "FINE-LINE", "JAPANESSE", "REALISM"];
const COLOR_LIST = ["Black/White", "Color", "Full Color"];
const BODY_PART_LIST = ["💪🏻", "🦵🏻", "🤚🏻", "👅", "🍑", "👂🏻", "👃🏻", "🦶🏻"];
const getRandomIndex = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function getTattoo() {
  const background = getRandomIndex(BACKGROUND_LIST);
  const element = getRandomIndex(ELEMENT_LIST);
  const style = getRandomIndex(STYLE_LIST);
  const color = getRandomIndex(COLOR_LIST);
  const bodyPart = getRandomIndex(BODY_PART_LIST);

  const tattoo = ` ${element} and ${background} With ${style} style ${color}  IN:${bodyPart}`;
  SPHERE.textContent = tattoo;
}

BTN_GENERATOR.addEventListener("click", getTattoo);

//risa bruja

BUTTON.addEventListener("click", () => {
  AUDIO.currentTime = 0;
  AUDIO.play();
  getTattoo();
  setTimeout(() => {
    showFormDisplay();
  }, 3500);
});

const showFormDisplay = () => {
  const FORM_VALIDATION = document.querySelector(".form_body");
  let isShow = false;

  if (!isShow) {
    FORM_VALIDATION.style.display = "flex";
    CONTACT_BTN.style.display = 'block'
  }
  FORM_VALIDATION.scrollIntoView({ behavior: "smooth" });
};

const dataValidation = () => {
  const name = document.getElementById("firtNameInput");
  const lastName = document.getElementById("lastNameInput");
  const phoneNumber = document.getElementById("phoneNumber");
  const email = document.getElementById("emailAddress");
  const optionalText = document.getElementById("optinal_text_input");

  let customerName = name.value;
  let customerLastName = lastName.value;
  let customerPhoneNumber = phoneNumber.value;
  let customerEmail = email.value;
  let customerText = optionalText.value;

  if (
    !customerName ||
    !customerLastName ||
    !customerPhoneNumber ||
    !customerEmail
  ) {
    alert("All data must be complete");
    return false;
  }
  return true;
};

ANCORES.forEach((ancore) => {
  ancore.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(ancore.href, "_blank");
  });
});

SEND_FORM_BTN.addEventListener("click", (e) => {
  if (!dataValidation()) {
    e.preventDefault();
  }
});
