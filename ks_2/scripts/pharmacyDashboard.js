function addMedicine(event) {
    event.preventDefault();
    const name = document.getElementById('medicineName').value;
    const amount = document.getElementById('medicineAmount').value;
    const list = document.getElementById('medicineList');
    const item = document.createElement('li');
    item.textContent = `${name} - ${amount}`;
    list.appendChild(item);
}