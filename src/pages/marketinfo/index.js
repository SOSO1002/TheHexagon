import { useParams } from "react-router-dom"
import Header from '../../components/header'
import Footer from '../../components/footer'
import MarketAccordion from '../../components/marketaccordion'
import './marketinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
const Marketinfo = () => {
  let { id } = useParams();
  const marketinfolists = [
    { id: 0, img: '/images/queen.jpg', identifier: 'World #1', beetype: 'Queen Bee', price: '999' },
    { id: 1, img: '/images/maniac.png', identifier: 'World #325', beetype: 'Worker Bee', price: '129' },
    { id: 2, img: '/images/queen.jpg', identifier: 'World #32', beetype: 'Worker Bee', price: '354' },
    { id: 3, img: '/images/queen.jpg', identifier: 'World #2', beetype: 'Army Bee', price: '199' },
    { id: 4, img: '/images/queen.jpg', identifier: 'World #1', beetype: 'Queen Bee', price: '456' },
    { id: 5, img: '/images/queen.jpg', identifier: 'World #325', beetype: 'Worker Bee', price: '32' },
    { id: 6, img: '/images/queen.jpg', identifier: 'World #32', beetype: 'Worker Bee', price: '572' },
    { id: 7, img: '/images/queen.jpg', identifier: 'World #2', beetype: 'Army Bee', price: '345' },
  ]
  // console.log(id)
  return (
    <>
      <Header />
      <div className="marketinfo-page" >
        <div className="marketinfo-container">
          <div className="marketinfo-control" >
            {
              marketinfolists.map((item, idx) => {
                if (id == item.id)
                  return (
                    <>
                      <div className='marketinfo-top' key={idx} >
                        <div className="marketinfo-left top-left">
                          <img src={item.img} />
                        </div>
                        <div className="marketinfo-right top-right" >
                          <h3>{item.identifier}</h3>
                          <div className="marketinfo-price">
                            <div className="current-price">Current Price</div>
                            <div className="price-value" ><FontAwesomeIcon icon={faTag} /><p>5</p><img src='/images/avax.svg' style={{ width: '17px', marginLeft: '5px' }} /></div>
                            <p className='listed-by'>listed by : 0x02...ec</p>
                            <div className="buy-bid"><button>Buy</button><button>Offer</button></div>
                          </div>
                          <div className="marketinfo-attributes marketaccordion" >
                            <MarketAccordion attributes />
                          </div>
                          <div className="marketinfo-details marketaccordion" >
                            <MarketAccordion details />
                          </div>
                        </div>
                      </div>
                      <div className="marketinfo-offers marketaccordion" >
                        <MarketAccordion offers />
                      </div>
                      <div className="marketinfo-activities marketaccordion" >
                        <MarketAccordion activities />
                      </div>
                    </>
                  )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Marketinfo