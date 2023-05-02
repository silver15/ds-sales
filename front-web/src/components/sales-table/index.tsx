import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas Recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>341</td>
            <td>07/11/2023</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>540,00</td>
          </tr>

          <tr>
            <td>341</td>
            <td>07/11/2023</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>540,00</td>
          </tr>

          <tr>
            <td>341</td>
            <td>07/11/2023</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>540,00</td>
          </tr>

          <tr>
            <td>341</td>
            <td>07/11/2023</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>540,00</td>
          </tr>

          <tr>
            <td>341</td>
            <td>07/11/2023</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Uberlândia</td>
            <td>Crédito</td>
            <td>540,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
