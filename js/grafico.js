


let myChart = document.getElementById("myChart").getContext('2d');
let pieChart = new Chart(myChart, {
    type: 'pie',
    data:{
        labels:['Precio Original', 'Impuestos'],
        datasets:[{
            label: 'Dataset 1',
            data:[
                100,
                75
            ],
            backgroundColor: [
                'yellow',
                'rgba(255, 67, 0, 0.81)'
            ],
            borderWith: 1,
            borderColor: 'rgba(178, 178, 178, 0.81)',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black',
        }],
            
    },
    options:{
        
        responsive: true,
        plugins: {
        legend: {
            position: 'bottom',
      },
      title: {
        display: true,
        text: 'Porcentaje de Impuestos'
      }
    }
    }
});


function updateChart(){
    if (total.value == '') {
        return;      
    }
    
    pieChart.data.datasets[0].data[0] = total.value;
    pieChart.data.datasets[0].data[1] = total.value * 0.75;
    pieChart.update();    
    
}

total.addEventListener("keyup", e => {
    e.preventDefault();
    updateChart();
});

window.addEventListener("click", updateChart);
