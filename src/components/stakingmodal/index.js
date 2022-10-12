import './stakingmodal.css'

import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import aaa from 'styled-components'

const Tabstyled = aaa.div`{
 .nav-tabs {
   border-bottom:none;
 }
 .nav-tabs .nav-link {
   border:1px solid #0d6efd;
 }
 .nav-tabs .nav-link.active {
   color:white;
   background:#0069ff;
   border:none !important
 }
 .nav-item {
   margin-right:10px;
 }
}`

const StakingModal = (props) => {
  return (
    <Tabstyled>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='modalbody'>
          <h2>Stake NFT earn passive reward</h2>
          <p style={{ color: ' #6699ff', fontSize: '22px', marginTop: '30px' }}>Duration</p>
          <Tabstyled>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="10 Days">
                <div className='main-content'>
                  <h2 style={{ color: ' #6699ff', fontSize: '22px' }}>Summary</h2>
                  <div className='modal-label'><p>Stake Date</p><p>2022/03/13/ 16:20</p></div>
                  <div className='modal-label'><p>Est.ApY</p><p>241.5%</p></div>
                  <div className='modal-label'><p>Est.Earning</p><p>10<span>MEISHU</span></p></div>
                  <div className='modal-label'><p>Redemption Date</p><p>2022/04/12, 16:20</p></div>
                  <div className='modal-button-group'>
                    <button className='cancel' onClick={props.onHide} >Cancel</button>
                    <button className='confirm' onClick={(e)=>{e.preventDefault();console.log("e",e);props.handleconfirm(10); props.onHide();}} >Confirm</button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="30 Days ">
                <div className='main-content'>
                  <h2 style={{ color: ' #6699ff', fontSize: '22px' }}>Summary</h2>
                  <div className='modal-label'><p>Stake Date</p><p>2022/03/13/ 16:20</p></div>
                  <div className='modal-label'><p>Est.ApY</p><p>241.5%</p></div>
                  <div className='modal-label'><p>Est.Earning</p><p>30<span>MEISHU</span></p></div>
                  <div className='modal-label'><p>Redemption Date</p><p>2022/04/12, 16:20</p></div>
                  <div className='modal-button-group'>
                    <button className='cancel' onClick={props.onHide} >Cancel</button>
                    <button className='confirm' onClick={(e)=>{e.preventDefault();props.handleconfirm(30); props.onHide();}}>Confirm</button>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Tabstyled>
        </Modal.Body>
      </Modal>
    </Tabstyled>
  );
}
export default StakingModal;