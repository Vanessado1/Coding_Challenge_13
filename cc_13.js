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
        // Prevents event from coming up to the container 
        event.stopPropagation();
        // remove cards using removeChild 
        const employeeContainer = document.getElementById('employeeContainer');
            employeeContainer.removeChild(card);
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
addEmployeeCard('Ricky Huynh', 'Mechanical Engineer');
addEmployeeCard('Richard Do', 'Mechanic');
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

// Task 4- implementing removal of employee cards with event bubbling 
const employeeContainer = document.getElementById('employeeContainer');
employeeContainer.addEventListener('click', function(event) {
    console.log('Employee card clicked:', event.target); // logs the clicks made by users 
});