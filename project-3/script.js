document.getElementById('btn').addEventListener('click', generateTable);

function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const tableContainer = document.getElementById('table-container');

    // Validate the inputs
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0){
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    // Clear previous table
    tableContainer.innerHTML = '';

    // Create a new table element
    const table = document.createElement('table');

    // Nested loops to create rows and columns
    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            const cell = document.createElement('td');
            const result = i * j;
            cell.textContent = result;

            // Highlight multiples of 10
            if (result % 10 === 0) {
                cell.classList.add('highlight');
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Append the table to the container
    tableContainer.appendChild(table);

}