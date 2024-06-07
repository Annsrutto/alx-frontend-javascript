// main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
    // Create table element
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    
    // Create header cells
    const headerCell1 = document.createElement('th');
    headerCell1.textContent = 'First Name';
    headerRow.appendChild(headerCell1);
    
    const headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Location';
    headerRow.appendChild(headerCell2);
    
    // Append rows for each student
    studentsList.forEach(student => {
        const row = table.insertRow();
        
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });
    
    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
