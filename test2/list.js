// Get reference to the employee table body element
const employeeBody = document.getElementById('employee-body');

// Retrieve employees from localStorage
let employees = JSON.parse(localStorage.getItem('employees')) || [];

// Check if there are employees to show
if (employees.length === 0) {
  const noEmployeeMessage = document.createElement('tr');
  noEmployeeMessage.innerHTML = "<td colspan='2'>No employees added yet.</td>";
  employeeBody.appendChild(noEmployeeMessage);
} else {
  // Render each employee as a table row
  employees.forEach(function(employee) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${employee.name}</td><td>${employee.department}</td>`;
    employeeBody.appendChild(tr);
  });
}
