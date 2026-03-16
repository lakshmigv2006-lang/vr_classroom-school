// Planet data with voice narration text
const planets = {
  sun: {
    title: "The Sun",
    text: "The Sun is a giant star at the center of our solar system. It is 1.4 million kilometers wide and provides heat and light to all planets.",
    voice: "The Sun is a giant star. It is one point four million kilometers wide and provides heat and light to all planets in our solar system."
  },
  earth: {
    title: "Earth",
    text: "Earth is our home planet. It is the only planet with liquid water and living creatures. It is 150 million kilometers from the Sun.",
    voice: "Earth is our home planet. It is the only planet with liquid water and living creatures."
  },
  mars: {
    title: "Mars",
    text: "Mars is called the Red Planet. It has the tallest volcano in the solar system called Olympus Mons. A day on Mars is 24 hours 37 minutes.",
    voice: "Mars is called the Red Planet. It has the tallest volcano in the solar system, called Olympus Mons."
  }
};

let currentPlanet = null;

// Orbit animation
function animate() {
  const t = Date.now();
  document.getElementById('earth-orbit')
    .setAttribute('rotation', `0 ${(t / 50) % 360} 0`);
  document.getElementById('mars-orbit')
    .setAttribute('rotation', `0 ${(t / 90) % 360} 0`);
  requestAnimationFrame(animate);
}
animate();

// Show info popup
function showInfo(id) {
  currentPlanet = id;
  const p = planets[id];
  document.getElementById('info-title').textContent = p.title;
  document.getElementById('info-text').textContent = p.text;
  document.getElementById('info-panel').style.display = 'block';
  speakInfo(); // auto-narrate on click
}

// Close popup
function closeInfo() {
  document.getElementById('info-panel').style.display = 'none';
  window.speechSynthesis.cancel();
}

// Voice narration using Web Speech API (FREE — built into browser)
function speakInfo() {
  if (!currentPlanet) return;
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(planets[currentPlanet].voice);
  msg.lang = 'en-US';
  msg.rate = 0.9;
  msg.pitch = 1;
  window.speechSynthesis.speak(msg);
}