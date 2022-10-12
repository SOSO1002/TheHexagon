function initChart() {
  const ctx = document.getElementById('myChart');
  ctx.width = 3600;
  ctx.height = 600;

  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['52% Farm', '2% Collabs and Airdrops', '34% NFT Staking', '2% Pre Sale', '10% Team'],
      datasets: [{
        label: '# of Votes',
        data: [52, 2, 34, 2, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          // 'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        offset: 50
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          barPercentage: 0.9
        }]
      },
      plugins: {
        width: '500px',
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 15
            },
            color: 'white',
            padding: 20,
            maxWidth: '1000px',
          },
        },
      }
    },
  });
}
