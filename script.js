'use script';
// Fonction pour calculer la moyenne
const btnMoy = document.querySelector('.btn-moy');
const resultMoy = document.querySelector('.moyenne');
const resultVar = document.querySelector('.variance');
const resultSigma = document.getElementById('sigma');
const inputValeurs = document.querySelector('.valeurs');
const selectVar = document.getElementById('select-variable');

const moyenne = function (effectif) {
  let s = 0;
  for (let i = 0; i < effectif.length; i++) {
    s = s + effectif[i];
  }

  const moy = s / effectif.length;

  return moy;
};

// Fonction pour calculer la variance
const variance = function (arr) {
  let s = 0;
  for (i = 0; i < arr.length; i++) {
    s = s + (arr[i] - moyenne(arr)) ** 2;
  }

  const v = s / (arr.length - 1);

  return v;
};

// Fonction pour calculer la variance dans le cas du ''Popupaltion''
const variancePopulation = function (arr) {
  let s = 0;
  for (i = 0; i < arr.length; i++) {
    s = s + (arr[i] - moyenne(arr)) ** 2;
  }

  const v = s / arr.length;

  return v;
};

// fonction pour calculer l'écart-Type
const ecarType = function (effectif) {
  const x = Math.sqrt(variance(effectif));
  console.log(`l'ecart-Type est :  σ = ${x}`);
  return x;
};
// Fonction pour calculer l'écart-Type dans le cas du ''Popupaltion''
const ecarTypePopulation = function (effectif) {
  const x = Math.sqrt(variancePopulation(effectif));
  console.log(`l'ecart-Type est :  σ = ${x}`);
  return x;
};

// calcule de la moyenne, la variance et l'écart-type en sélectionnant "Autre
selectVar.addEventListener('change', function () {
  if (selectVar.value === 'autre') {
    btnMoy.addEventListener('click', function () {
      /* const effectif = [
      9.934, 9.98, 9.98, 9.924, 9.928, 9.915, 9.92, 9.912, 9.93, 9.946,
    ];*/
      const inputText = inputValeurs.value;
      const effectif = inputText.split(',').map(Number).filter(Boolean); // Filter out non-numeric values

      if (effectif.length === 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
      }

      moyenne(effectif);
      resultMoy.textContent = moyenne(effectif);

      variance(effectif);
      resultVar.textContent = variance(effectif);
      ecarType(effectif);
      resultSigma.textContent = ecarType(effectif);
    });
  } else if (selectVar.value === 'population') {
    btnMoy.addEventListener('click', function () {
      /* const effectif = [
      9.934, 9.98, 9.98, 9.924, 9.928, 9.915, 9.92, 9.912, 9.93, 9.946,
    ];*/
      const inputText = inputValeurs.value;
      const effectif = inputText.split(',').map(Number).filter(Boolean); // Filter out non-numeric values

      if (effectif.length === 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
      }

      moyenne(effectif);
      resultMoy.textContent = moyenne(effectif);

      variancePopulation(effectif);
      resultVar.textContent = variancePopulation(effectif);
      ecarTypePopulation(effectif);
      resultSigma.textContent = ecarTypePopulation(effectif);
    });
  }
});

// calcule de la moyenne, la variancePopulation et l'écart-type-Population en sélectionnant "Population"
