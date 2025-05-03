      function generateTable() {
            var rows = parseInt(document.getElementById('rows').value, 10);
            var cols = parseInt(document.getElementById('cols').value, 10);
            
            if (isNaN(rows) || isNaN(cols) || rows < 2 || rows > 10 || cols < 2 || cols > 10) {
                alert('Please enter numbers between 2 and 10');
                return;
            }
            
            var container = document.getElementById('tableContainer');
            container.innerHTML = '';
            
            var table = document.createElement('table');
            
            for (var i = 1; i <= rows; i++) {
                var tr = document.createElement('tr');
                for (var j = 1; j <= cols; j++) {
                    var td = document.createElement('td');
                    td.textContent = i * j;  // multiplication
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            
            container.appendChild(table);
        }