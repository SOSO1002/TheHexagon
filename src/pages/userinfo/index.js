import { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './userinfo.css'

const tablists = [
  { title: 'NFTs' },
  { title: 'Offers' },
  { title: 'About' },
  { title: 'Activity' },
]

const Userinfo = () => {
  const [isshow, setShow] = useState(0);
  const handleclick = (num) => {
    setShow(num)
  }

  return (
    <>
      <Header />
      <div className="userinfo-page" >
        <div className='userinfo-banner' >
          <div className='userinfo-container' >
            <button className='edit-profile'>Edit Profile</button>
          </div>
        </div>
        <div className='userinfo-main'>
          <div className='userinfo-container' >
            <div className='userinfo-control' >
              <div className='userinfo-top' >
                <div className='userinfo-image' >
                  <img src='/images/Queen.jpg' />
                </div>
                <div className='your-nameaddress' >
                  <p>Paris</p>
                  <div className='address' ><p>0x2D...T521</p></div>
                </div>
              </div>
              <div className='userinfo-tab' >
                <ul>
                  {
                    tablists.map((item, idx) => (
                      <li key={idx} onClick={() => handleclick(idx)} className={isshow === idx ? 'tab-active' : 'tab-passive'} >{item.title}</li>
                    ))
                  }
                </ul>
              </div>
              {
                isshow == 0 && 
                <div className='nfts-tab'>
                  <ul>
                    <li>Owned</li>
                    <li>On Sale</li>
                  </ul>
                </div>
              }
              {
                isshow == 1 && <div>2</div>
              }
              {
                isshow == 2 && <div>3</div>
              }
              {
                isshow == 3 && <div>4</div>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Userinfo