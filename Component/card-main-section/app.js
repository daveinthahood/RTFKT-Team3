const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");

function calculateTime(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); // divido distance per il giorno in millisecondi ottenendo cosi il numero di giorni rimanenti per poi arrotondarlo
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ); // stessa cosa ma in ore
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // stessa cosa ma in minuti

  return { days, hours, minutes }; //ritorno le variabili per destrutturarle in countdown
}

function countdown() {
  const countdownDate = new Date("2023-06-30T15:00:00"); //giorno fine countdown (PRESENTAZIONE)
  const now = new Date().getTime(); // momento attuale
  const distance = countdownDate - now; // clalco per ottenere la differenza tra il giorno di oggi e il giorno della fine

  const { days, hours, minutes } = calculateTime(distance); //destrutturo il return della callback che prende come parametro distance

  // Aggiornamento degli elementi HTML con i valori del countdown
  $days.textContent = formatTime(days);
  $hours.textContent = formatTime(hours);
  $minutes.textContent = formatTime(minutes);
}

// Funzione per formattare il tempo a due cifre
function formatTime(time) {
  return time < 0 ? `${-time}` : time; //? se time è minore di 10 aggiunge uno zero
}

// Esegui il countdown ogni secondo
setInterval(countdown, 1000);
