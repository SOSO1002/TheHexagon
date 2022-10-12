import Table from 'react-bootstrap/Table'

const MarketTable = ({ offers, activities }) => {
  return (
    <>
      {offers && <div className='market-table' >
        <Table responsive="md" borderless >
          <thead className='m'>
            <tr>
              <th>Price</th>
              <th>From</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div>5<img src='/images/avax.svg' /></div></td>
              <td>0x21..52E</td>
            </tr>
          </tbody>
        </Table>
      </div >
      }
      {activities && <div className='market-table' >
        <Table responsive="md" borderless >
          <thead className='m'>
            <tr>
              <th>Transaction Id</th>
              <th>Action</th>
              <th>Time</th>
              <th>Price</th>
              <th>Buyer</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0x21..52E</td>
              <td>BuySell</td>
              <td>00:00:00:00</td>
              <td><div>5<img src='/images/avax.svg' /></div></td>
              <td>0x12EW...GD</td>
              <td>0x12EW...GD</td>
            </tr>
          </tbody>
        </Table>
      </div >
      }
    </>
  )
}
export default MarketTable