window.addEventListener("load", () => {
   windowWidth = window.innerWidth;

   console.log("resized ", windowWidth);

   if (windowWidth <= 767) {
      cardContainer.classList.toggle("rounded-5");
      letterContainer.classList.toggle("mt-5");
      cardImage.src = "assets/images/illustration-sign-up-mobile.svg";
   } else {
      cardImage.src = "assets/images/illustration-sign-up-desktop.svg";
   }
});

function validarEmail(email) {
   // Expresión regular para validar el formato del correo electrónico
   var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

// variables

var colorInvalid = "hsl(4, 100%, 67%)";
var bgColorInvalid = "hsl(4, 40%, 67%)";

var windowWidth = window.innerWidth;

var emailInput = document.getElementById("exampleInputEmail1");
var invalidEmailLabel = document.getElementById("invalidEmailLabel");
var btnSubmit = document.getElementById("btnSubmit");
var cardImage = document.getElementById("cardImage");
var cardContainer = document.getElementById("cardContainer");
var cardLetterContainer = document.getElementById("cardLetterContainer");
var cardContainerDimiss = document.getElementById("cardContainerDimiss");
var body = document.getElementById("body");
var nuevoDiv = document.createElement("div");
var letterContainer = document.getElementById("letterContainer");

btnSubmit.addEventListener("click", () => {
   if (validarEmail(emailInput.value)) {
      createCardDimiss();
      cardLetterContainer.classList.toggle("hide");
      emailInput.value = "";
   } else {
      invalidEmailLabel.classList.toggle("hide");
      emailInput.classList.toggle("invalidEmail");
   }
});

window.addEventListener("resize", () => {
   elementsForSize();
});

function hideItems() {
   cardLetterContainer.classList.toggle("hide");
   cardContainerDimiss.classList.toggle("hide");
}

function elementsForSize() {
   windowWidth = window.innerWidth;

   console.log("resized ", windowWidth);

   if (windowWidth <= 767) {
      cardContainer.classList.toggle("rounded-5");
      cardImage.src = "assets/images/illustration-sign-up-mobile.svg";
      cardImage.style.width = "80%";
      letterContainer.classList.toggle("mt-5");
   } else {
      cardImage.src = "assets/images/illustration-sign-up-desktop.svg";
      cardContainer.classList.toggle("rounded-5");
      cardImage.style.width = "100%";
   }
}

function deleteCardDimiss() {
   body.removeChild(nuevoDiv);
}

function createCardDimiss() {
   // nuevoDiv.classList.add("hide");
   // nuevoDiv.id = "cardContainerDimiss";
   nuevoDiv.innerHTML = `
   <div id='cardContainerDimiss'>
    <div class='card py-3 px-4 rounded-5 d-md-flex flex-column' id='containerDimiss'>
      <div class='row'>
        <div class='col order-2 order-md-1 d-flex flex-column justify-content-between'>
          <div class='card-body'><img src='./assets/images/icon-list.svg' class='img-fluid m-2' width='65px'>
            <h1 class='card-title'>Stay updated!</h1>
            <p class='card-text'>A email has been sent to <strong>${emailInput.value}</strong>. Please open itand
              click
              the button inside to confirm your subscription.</p>
          </div>
          <div class='d-grid gap-2'>
            <button type='button' class='btn text-white p-3 mt-3' id='btnDimiss'>Dimiss
              message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
   btnDimiss = document.getElementById("btnDimiss");
   body.appendChild(nuevoDiv);
   var btnDimiss = document.getElementById("btnDimiss");

   btnDimiss.addEventListener("click", () => {
      deleteCardDimiss();
      cardLetterContainer.classList.toggle("hide");
   });
}
