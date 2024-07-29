// Confetti

// Array de imágenes
const images = [
  './assets/images/png/1.jpg',
  './assets/images/png/2.jpg',
  './assets/images/png/3.jpg',
  './assets/images/png/4.jpg',
  './assets/images/png/5.jpg',
  './assets/images/png/6.jpg',
  './assets/images/png/7.jpg',
  './assets/images/png/8.jpg',
  './assets/images/png/9.jpg',
  './assets/images/png/10.jpg',
  './assets/images/png/11.jpg',
  './assets/images/png/12.jpg',
  './assets/images/png/13.jpg',
  './assets/images/png/14.jpg',
  './assets/images/png/15.jpg',
  './assets/images/png/16.jpg',
  './assets/images/png/17.jpg',
  './assets/images/png/18.jpg',
  './assets/images/png/19.jpg',
  './assets/images/png/20.jpg',
  './assets/images/png/21.jpg',
  './assets/images/png/22.jpg',
  './assets/images/png/23.jpg',
  './assets/images/png/24.jpg',
  './assets/images/png/25.jpg',
  './assets/images/png/26.jpg',
  './assets/images/png/27.jpg',
  './assets/images/png/28.jpg',
  './assets/images/png/29.jpg',
  './assets/images/png/30.jpg',
  './assets/images/png/31.jpg',
  './assets/images/png/32.jpg',
  './assets/images/png/33.jpg',
  './assets/images/png/34.jpg',
  './assets/images/png/35.jpg',
  './assets/images/png/36.jpg',
  './assets/images/png/37.jpg',
  './assets/images/png/38.jpg',
  './assets/images/png/39.jpg',
  './assets/images/png/40.jpg',
  './assets/images/png/41.jpg',
  './assets/images/png/42.jpg',
  './assets/images/png/43.jpg',
  './assets/images/png/44.jpg',
  './assets/images/png/45.jpg',
  './assets/images/png/46.jpg',
  './assets/images/png/47.jpg',
  './assets/images/png/48.jpg',
  './assets/images/png/49.jpg',
  './assets/images/png/50.jpg',
  './assets/images/png/51.jpg',
  './assets/images/png/52.jpg',
  './assets/images/png/53.jpg',
  './assets/images/png/54.jpg',
  './assets/images/png/55.jpg',
  './assets/images/png/56.jpg',
  './assets/images/png/57.jpg',
  './assets/images/png/58.jpg',
  './assets/images/png/59.jpg'
  // Agrega más rutas de imágenes según sea necesario
];
let currentBackgroundImage = '';

// Función para seleccionar una imagen al azar
function getRandomImage(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Función para cambiar la imagen de fondo
function changeBackgroundImage() {
  currentBackgroundImage = getRandomImage(images);
  document.body.style.backgroundImage = `url(${currentBackgroundImage})`;
}

// Función para descargar la imagen de fondo
function downloadBackgroundImage() {
  fetch(currentBackgroundImage)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = currentBackgroundImage.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error al descargar la imagen:', error));
}

// Seleccionar una imagen al azar al cargar la página
changeBackgroundImage();

// Añadir eventos a los botones
document.getElementById('change-background-button').addEventListener('click', changeBackgroundImage);
document.getElementById('download-background-button').addEventListener('click', downloadBackgroundImage);


const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;
  
    this.confettiFrequency = 3;
    this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
    this.confettiAnimations = ["slow", "medium", "fast"];
  
    this._setupElements();
    this._renderConfetti();
  };
  
  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;
  
    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }
  
    containerEl.classList.add("confetti-container");
  
    this.el.appendChild(containerEl);
  
    this.containerEl = containerEl;
  };
  
  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground = this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
      ];
      const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation = this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
      ];
  
      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;
  
      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);
  
      this.containerEl.appendChild(confettiEl);
    }, 25);
  };
  


  // Modals

// Get the modal
var modal = document.getElementById("myModal");
var modalError = document.getElementById("modalError");
// Get the button that opens the modal
var btn = document.getElementById("appStoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the input field in the modal
var modalInput = document.getElementById("modalInput");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

var loader = document.getElementById("loader");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modalInput.value = ""; // Clear the input field
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
        modalInput.value = ""; // Clear the input field
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.querySelector('.confetti-container')) {
        document.querySelector('.modal.open').classList.remove('open');
        document.querySelector('.confetti-container').style.display= "none";
        document.body.classList.remove('modal-open');
        modalInput.value = ""; // Clear the input field
    }
}


function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('modal-open');
    window.confettiful = new Confettiful(document.querySelector(".confetti"));
}

function openModalError(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.querySelector('.confetti-container').style.display= "none";
    document.body.classList.remove('modal-open');
    modalInput.value = ""; // Clear the input field
    //modal.style.display= "none";
}

