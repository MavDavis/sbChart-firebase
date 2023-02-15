<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    props:['sentData'],
    name: 'BarChart',
    components: { Bar },
    mounted(){
this.sentData.forEach(item=>{
    console.log(item);
    this.chartData.labels.push(item.name)
    this.chartData.datasets[0].data.push(item.age)
})
    },
    data() {
      return {
        chartData: {
          labels: ['age 14','age 19-21','age 22-24','age 25-27','age 28-30',  ],
          datasets: [ { data: [1, 2, 3,4,5] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>