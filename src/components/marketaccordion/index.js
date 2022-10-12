import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'
import './marketaccordion.css'
import MarketTable from './markettable'

const Catagories = styled.div`{
  .accordion {
    width:100%
  }
  .accordion-item {
    background:transparent
  }
  .accordion-button {
    padding :19px 38px;
    background:transparent !important;
    font-size:25px;
    color:#FF9F1C;
    border:1px solid #FF9F1C;
    border-radius:8px !important;
  }
  .accordion-body {
    color:white;
    font-size:20px;
    text-align:initial;
    background:transparent
    //  background:rgba(255, 255, 255, 0.1) !important;
     margin-top:10px;
     border-radius:8px;
     border:1px solid #FF9F1C;
     margin-top:10px
  }
  .accordion-button:not(.collapsed)::after {
    //  background:url(/images/uparrow.png);
  }
  .accordion-button::after {
    background:url(/images/downarrow.png);
    height:10px;
  }
  @media(max-width:1020px) {
    .accordion-body {
      overflow:auto !important
    }
  }
  @media(max-width:530px) {
    .accordion-button {
      font-size:20px;
    }
  }
}`;

const MarketAccordion = ({ attributes, details, offers, activities }) => {
  return (
    <Catagories>
      {
        attributes &&
        <Accordion defaultActiveKey="0" flush className='accordion' >
          <Accordion.Item>
            <Accordion.Header>Attributes</Accordion.Header>
            <Accordion.Body>
              <div className='attributes-body'>
                <div>
                  <p>Color</p>
                  <p>Eye</p>
                </div>
                <div>
                  <p>Color</p>
                  <p>Eye</p>
                </div>
                <div>
                  <p>Color</p>
                  <p>Eye</p>
                </div>
                <div>
                  <p>Color</p>
                  <p>Eye</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
      {
        details &&
        <Accordion defaultActiveKey="0" flush className='accordion' >
          <Accordion.Item>
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <div className='details-body'>
                <div>
                  <p>Mint address</p>
                  <p>EZ2Fv...UUy</p>
                </div>
                <div>
                  <p>Token address</p>
                  <p>EZ2Fv...UUy</p>
                </div>
                <div>
                  <p>Owner</p>
                  <p>DGWG...DAE</p>
                </div>
                <div>
                  <p>Artist Royalties</p>
                  <p>8%</p>
                </div>
                <div>
                  <p>Transaction Fee</p>
                  <p>2%</p>
                </div>
                <div>
                  <p>Listing/Bidding/Cancel</p>
                  <p>Free</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
      {
        offers &&
        <Accordion defaultActiveKey="0" flush className='accordion' >
          <Accordion.Item>
            <Accordion.Header>Offers</Accordion.Header>
            <Accordion.Body>
              <div className='offers-body'>
                <MarketTable offers />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
      {
        activities &&
        <Accordion defaultActiveKey="0" flush className='accordion' >
          <Accordion.Item>
            <Accordion.Header>Activities</Accordion.Header>
            <Accordion.Body>
              <div className='activities-body'>
                <MarketTable activities />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
    </Catagories>
  )
}
export default MarketAccordion