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

// Task 3- converting nodelists to arrays for bulk updates 
// created a function to update employee cards 
function highlightEmployeeCards() {
    // selects all employee cards
    const employeeCards = document.querySelectorAll('.employee-card');
    // convert NodeList to array 
    const employeeCardsArray = Array.from(employeeCards);
    // update each cards style 
    employeeCardsArray.forEach(card => {
        card.style.backgroundColor = '#fff9c4';
        card.style.border = '2px solid #9e9e9e';
    });
}
// call function to highlight employee cards 
highlightEmployeeCards();