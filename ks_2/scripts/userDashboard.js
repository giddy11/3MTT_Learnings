function searchMedicine() {
    const input = document.getElementById('medicineInput').value.toLowerCase();
    const list = document.getElementById('pharmacyList');
    list.innerHTML = '';

    const pharmacies = [
        {
            name: "Green Cross Pharmacy",
            address: "123 Main Street",
            contact: "(123) 456-7890",
            medicines: ["Paracetamol", "Aspirin", "Ibuprofen"]
        },
        {
            name: "Health Plus Pharmacy",
            address: "456 Elm Street",
            contact: "(987) 654-3210",
            medicines: ["Vitamin C", "Antibiotics", "Cough Syrup"]
        },
        {
            name: "CareWell Pharmacy",
            address: "789 Oak Avenue",
            contact: "(555) 123-4567",
            medicines: ["Insulin", "Paracetamol", "Pain Relief Gel"]
        }
    ];

    const results = pharmacies.filter(pharmacy =>
        pharmacy.medicines.some(medicine => medicine.toLowerCase().includes(input))
    );

    if (results.length > 0) {
        results.forEach(pharmacy => {
            const item = document.createElement('li');
            item.className = 'pharmacy-item';
            item.innerHTML = `
                <h3>${pharmacy.name}</h3>
                <p><strong>Address:</strong> ${pharmacy.address}</p>
                <p><strong>Contact:</strong> ${pharmacy.contact}</p>
                <p><strong>Available Medicines:</strong> ${pharmacy.medicines.join(', ')}</p>
            `;
            list.appendChild(item);
        });
    } else {
        list.innerHTML = '<p>No pharmacies found with the requested medicine.</p>';
    }
}