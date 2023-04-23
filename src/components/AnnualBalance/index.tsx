import ReactApexChart from "react-apexcharts";
import { SectionAnnual } from "./styles";

const series = {
  series: [{
    name: 'Entradas',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66,80,90, 100]
  }, {
    name: 'Saídas',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 50, 75, 100]
  }, {
    name: 'Aportes',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 90, 100]
  },
{
  name: 'Dividendos',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 90, 100]
}]
}

const options = {
  colors: ['rgb(0,176,124)', 'rgb(255, 105, 118)', 'rgb(197, 163, 74)', 'rgb(0, 128, 148)'],
  chart: {
    type: 'bar',
    height: 350,
    foreColor: 'rgb(255,255,255)'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  },
  yaxis: {
    title: {
      text: 'Valores'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        const values = `R$ ${val}`

        return values
      }
    }
  }
}

export function AnnualBalance() {
  return (
    <SectionAnnual>
      <ReactApexChart options={options} series={series.series} type="bar" height={250}/>
    </SectionAnnual>
  )
}