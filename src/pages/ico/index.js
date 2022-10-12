import { useState } from 'react';
import './ico.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Countdown from '../../components/FliperCountdown'
import Progressbar from '../../components/progressbar'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
  const [isvalue, setValue] = useState(1000);

  const onhandlechange = (val) => {
    setValue(val)
  }

  const handleclick = (val) => {
    if (val < 1000) {
      alert('amount should be greater than 1000')
      return
    }
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={false}
      contentClassName='modal-main'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className='ico-purchase' >
          <div className='amount-layer' >
            <p style={{ margin: 0 }}>Amount</p>
            <input type='number' value={isvalue} onChange={(e) => onhandlechange(e.target.value)} />
          </div>
          <div className='price-layer' >
            <p>Price : {(isvalue * 0.0005).toFixed(4)}<img src='/images/avax.svg' /></p>
          </div>
          <div className='modal-purchase' ><button className="btn btn-lg btn-gradient-orange btn-round btn-glow "
            variant="primary" onClick={(e) => handleclick(e.target.value)}>Purchase Token</button></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Ico = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Header />
      <div className="ico-page" >
        <div className="ico-banner" >
          <div className='ico-banner-container'>
            <div className='ico-banner-control' >
              <div className='ico-banner-control-left' >
                <h1>
                  Join the future of The Hexagon
                </h1>
                <h3>
                  50B Target cap $99B Raised
                </h3>
                <div className='ico-banner-progress' >
                  <Progressbar />
                </div>
                <div className='ico-banner-flipercountdown' >
                  <Countdown />
                </div>
                <div className="animated fadeInUpShorter" data-animation="fadeInUpShorter" data-animation-delay="2.3s">
                  <div className="purchase-token-btn">
                    <a href="#" className="btn btn-lg btn-gradient-orange btn-round btn-glow"
                      variant="primary" onClick={() => setModalShow(true)}>Purchase Token</a>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </div>
              </div>
              <div className='ico-banner-control-right' >
                <div className="logo-wrapper ml-5 pl-5 align-items-center">
                  <div className="crypto-logo">
                    <div id="ripple"></div>
                    <div id="ripple2"></div>
                    <div id="ripple3"></div>
                    <img src="./images/about_coin.png" className="crypto-logo-img rounded mx-auto d-block pulse2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-ripple-animation d-none d-md-block">
          <div className="top-right-ripples">
            <div className="ripples"></div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
export default Ico