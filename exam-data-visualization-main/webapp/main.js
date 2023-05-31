// Récupérer les éléments HTML
var counterElement = document.getElementById("counter");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");
var resetBtn = document.getElementById("resetBtn");

// Variable pour stocker la valeur du compteur
var counterValue = 0;

// Fonction pour mettre à jour l'affichage du compteur
function updateCounter() {
  counterElement.textContent = counterValue;
}

// Incrémenter le compteur
increaseBtn.addEventListener("click", function() {
  counterValue++;
  updateCounter();
});

// Décrémenter le compteur
decreaseBtn.addEventListener("click", function() {
  counterValue--;
  updateCounter();
});

// Réinitialiser le compteur
resetBtn.addEventListener("click", function() {
  counterValue = 0;
  updateCounter();
});

// Initialiser l'affichage du compteur
updateCounter();
