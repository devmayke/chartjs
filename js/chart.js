const ctx = document.querySelector('#myChart').getContext('2d');
const total = document.querySelector("#total")
const novo = document.querySelector("#novo")
const curado = document.querySelector("#curado")
const morto = document.querySelector("#morto")
const casos = [total, novo, curado, morto];


casos.forEach((caso, index) => {
    caso.addEventListener("change", () => {
        covid.data.datasets[0].data[index] = caso.value;
        covid.update()
    })
})


let covid = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Total de Casos', 'Novos Casos', 'Curados', 'Mortos'],
        datasets: [{
            label: 'Casos de COVID',
            data: [7000,1000, 900, 1500],
            backgroundColor: [
                'rgba(65, 105, 225, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(3, 187, 133, 1)',
                'rgba(255, 105, 97, 1)'

            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});















