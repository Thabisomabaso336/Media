const descriptions = {
  "Cybersecurity": "Protecting systems from digital attacks.",
  "Cloud Computing": "Using remote servers for data storage and computing.",
  "Analytics and Data Management": "Handling and analyzing big data effectively.",
  "Workload": "Balancing responsibilities and capacity.",
  "Hiring": "Finding and keeping skilled professionals.",
  "Leadership Support": "Getting backing from top-level leaders.",
  "Budget": "Managing financial resources effectively.",
  "Career Growth": "Opportunities for professional development.",
  "Project Managers": "Coordinating and overseeing IT projects."
};

const form = document.getElementById('focus-form');
const infoBox = document.getElementById('info-box');

form.addEventListener('change', (e) => {
  const selected = e.target.value;
  infoBox.innerText = descriptions[selected] || "";
  infoBox.style.display = 'block';
});

document.getElementById("learn-more").addEventListener("click", () => {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

 
