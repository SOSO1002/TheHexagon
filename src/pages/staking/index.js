import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Stakingcard from '../../components/stakingcard';
import './staking.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import styled from 'styled-components'

const Stakingstyled = styled.div`{
  .nav-tabs .nav-link.active {
    background: white !important;
    color:rgba(7, 106, 254, 0.7) !important
  }
  .nav-tabs .nav-link {
    background: rgba(7, 106, 254, 0.7) !important;
    color:white !important
  }
  @media(max-width:450px) {
    .nav-tabs .nav-link.active,.nav-tabs .nav-link {
      font-size: 10px;
      padding: 6px;
    }
  }
}`

const Mainstyled = styled.div`{
  .mb-3 {
    border-bottom : none !important;
  }
  .nav-tabs .nav-link {
    color:grey;
    padding-top:9px;
    border:none;
    font-size:22px;
  }
  .nav-tabs .nav-link.active {
    background: transparent;
    color: #076afe;
    border: none;
    padding: 5px;
    margin: 0 10px;
    font-weight: 800;
    font-size:28px
  }
  .nav-tabs .nav-link:hover{
    border:none  
  }
  .nav-tabs .nav-link:active,.nav-tabs .nav-link.active:active {
    border:none
  }
}`


const Staking = () => {
  return (
    <>
      <Header staking={{ color: '#e4ae46' }} />
      <div className='staking-page'>
        {/* <img src='images/staking_banner.png' className='staking-banner' /> */}
        <div className='staking-container'>
          <div className='staking-content'>
            <div className='staking-content-left'>
              <h1>NFT Staking</h1>
              <p>stake your Worker bee NFTs to earn passive rewards</p>
            </div>
            <div className='staking-content-right' >
              <Stakingstyled>
                <Tabs
                  defaultActiveKey="home"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="10 Days Rock">
                    <p>Rewards : 5 $HONEY Per Day Per Worker Bee. </p>
                    <p>20~30% of Income will be robbed by Gang Bees.</p>
                    <p>Army Bees bring back 35% of robbed $HONEY. </p>
                  </Tab>
                  <Tab eventKey="profile" title="30 Days Rock">
                    <p>Rewards : 7 $HONEY Per Day Per Worker Bee</p>
                    <p>25~35% of Income will be robbed by Gang Bees</p>
                    <p>Army Bees bring back 35% of robbed $HONEY.</p>
                  </Tab>
                </Tabs>
              </Stakingstyled>
            </div>
          </div>
        </div>
      </div>
      <div className='staking-main'>
        <div className='staking-container' >
          <Mainstyled>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Owned">
                <Stakingcard owned />
              </Tab>
              <Tab eventKey="profile" title="Staked">
                <Stakingcard clam />
              </Tab>
            </Tabs>
          </Mainstyled>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Staking;