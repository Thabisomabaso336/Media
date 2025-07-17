const toggleBtn = document.getElementById('toggleView');
const motherboard = document.getElementById('motherboardView');
const bios = document.getElementById('biosView');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.querySelector('.close');
const clockDisplay = document.getElementById('clock');

const descriptions = {
  cpu: "CPU (Central Processing Unit): Executes instructions and processes data for all operations.",
  ram1: "RAM (Random Access Memory) Slot 1: Temporary memory used for currently running programs.",
  ram2: "RAM (Random Access Memory) Slot 2: Temporary memory used for currently running programs.",
  rom: "ROM (Read-Only Memory): Stores permanent firmware instructions like BIOS.",
  cmos: "CMOS: Stores BIOS settings and system date/time with battery backup.",
  storage: "Storage Drive: Saves operating system, applications, and user data.",
  power: "Power Unit: Supplies and regulates electrical power to the motherboard and all components."
};

toggleBtn.addEventListener('click', () => {
  const showingBios = bios.style.display === 'block';
  bios.style.display = showingBios ? 'none' : 'block';
  motherboard.style.display = showingBios ? 'block' : 'none';
  toggleBtn.textContent = showingBios ? '🔁 Switch to BIOS View' : '🔁 Switch to Motherboard View';
});

document.querySelectorAll('.component').forEach(component => {
  component.addEventListener('click', () => {
    const id = component.id;
    modalTitle.textContent = component.textContent;
    modalDesc.textContent = descriptions[id] || "No description available.";
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bios.style.display === 'block') {
    toggleBtn.click();
  }
});

function updateClock() {
  const now = new Date();
  clockDisplay.textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

toggleBtn.addEventListener('click', () => {
    motherboard.classList.toggle('hidden');
    bios.classList.toggle('hidden');
    toggleBtn.textContent = motherboard.classList.contains('hidden') ? '🔁 Switch to Motherboard View' : '🔁 Switch to BIOS View';
});