// Task 2 - adding employee cards dynamically 
// created a employee card function
function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class','employee-card');
    // states the employees name 
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = name;
    // states the employees position 
    const positionParagraph = document.createElement('p');
    positionParagraph.textContent = position;
    // created a remove button 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        card.remove();
    });
    // append the name, position, and remove button 
    card.appendChild(nameHeading);
    card.appendChild(positionParagraph);
    card.appendChild(removeButton);
    // append the card if the employeeContainer 
    const employeeContainer = document.getElementById('employeeContainer');
    employeeContainer.appendChild(card);
}
// shows the employee card 
addEmployeeCard('Jessica Hugh', 'Software Engineer');
addEmployeeCard('Jason Johnson', 'Project Manager');