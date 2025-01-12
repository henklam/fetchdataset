var temps = [];
var years = [];

async function getData() {
    const response = await fetch("graph.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        const year = row[0];
        const temp = row[2];
        years.push(year);
        temps.push(parseFloat(temp));
    });
    createChart();
}

function createChart() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Monthly Mean Global Surface Temperature',
                data: temps,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false 
                }
            }
        }
    });
}
getData();
