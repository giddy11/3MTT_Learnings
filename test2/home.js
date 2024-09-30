// Get references to form and status elements
const employeeForm = document.getElementById('employee-form');
const status = document.getElementById('status');

// Handle form submission
employeeForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;

  // Create employee object
  const employee = {
    name: name,
    department: department
  };

  // Get existing employees from localStorage, or create an empty array if none
  let employees = JSON.parse(localStorage.getItem('employees')) || [];

  // Add new employee to array
  employees.push(employee);

  // Save updated employee array back to localStorage
  localStorage.setItem('employees', JSON.stringify(employees));

  // Show success message
  status.textContent = 'Employee added successfully!';

  // Clear form inputs
  employeeForm.reset();
});
