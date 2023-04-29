import { chartOptions } from './helpers';
import './styles.css';
import ReactApexChart from 'react-apexcharts';

const initialData = [
  {
    x: '2020-01-01',
    y: 540
  },
  {
    x: '2020-02-01',
    y: 106
  }
];

function SalesByDate() {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className="sales-by-date-title">Evolução de Vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">465,988,00</h2>
          <span className="sales-by-date-quantity-label">Vendas no Periodo</span>
          <span className="sales-by-date-quantity-descriptions">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
