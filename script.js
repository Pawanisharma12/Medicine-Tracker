const form = document.getElementById('medicineForm');
const list = document.getElementById('medicineList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('medicineName').value;
  const time = document.getElementById('medicineTime').value;

  if (name && time) {
    const li = document.createElement('li');
    li.textContent = `${name} at ${time}`;
    list.appendChild(li);
    saveToLocalStorage(name, time);
    form.reset();
  }
});

function saveToLocalStorage(name, time) {
  let meds = JSON.parse(localStorage.getItem('meds')) || [];
  meds.push({ name, time });
  localStorage.setItem('meds', JSON.stringify(meds));
}

function loadFromLocalStorage() {
  let meds = JSON.parse(localStorage.getItem('meds')) || [];
  meds.forEach((med) => {
    const li = document.createElement('li');
    li.textContent = `${med.name} at ${med.time}`;
    list.appendChild(li);
  });
}

window.onload = loadFromLocalStorage;
