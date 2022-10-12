import { useState } from 'react'
import './footer.css'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mylists = [
  { context: 'NFT Staking', href: '', span: 'soon' },
  { context: 'Marketplace', span: 'soon' },
  { context: 'Farm', span: 'soon' },
  { context: 'HoneyComb', img: '/images/open_in_new.png', href: '', target: '_blank', span: 'soon' },
  { context: 'Game', img: '/images/open_in_new.png', span: 'soon' },

]
const mylists1 = [
  { context: 'Home', href: '/' },
  { context: 'About', href: '#about' },
  { context: 'Story', href: '#story' },
  { context: 'Roadmap', href: '#roadmap' },
  { context: 'Tokenomics', href: '#tokens' },
  { context: 'Faq', href: '#faq' },
  { context: 'Whitepaper', img: '/images/open_in_new.png', href: 'https://omni-universe.gitbook.io/welcome-to-gitbook/', target: '_blank' },
]

const Footer = () => {
  const [isActive, setActive] = useState(2);
  const [isFirst, setFirst] = useState(true);
  const handleclick = (num) => {
    setActive(num)
  }
  const onscrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='footer-section' id='footer'>
      <div className='footer-container'>
        <div className='footer-control'>
          <div className='footer-top'>
            <div className='footer-top-left'>
              <div className='footer-partone'>
                <div className='footer-logo' >
                  <img src='/images/logo.png' />
                  <h2>TheHexagon NFT</h2>
                </div>
                <div className='bee-count'>
                  <p>Total Supply : 10,000</p>
                  <p>Queen : 1</p>
                  <p>Worker : 6666</p>
                  <p>Gang : 2222</p>
                  <p>Army : 1111</p>
                  <button className='footermint' onClick={() => onscrolltotop()}>Mint</button>
                </div>
              </div>
              <div className='footer-parttwo'>
                <div className='footer-token' >
                  <img src='/images/about_coin.png' />
                  <h2>HONEY Token</h2>
                </div>
                <div className='bee-count'>
                  <p>Max Supply : 50,000,000</p>
                  <p>Presale : 1,000,000</p>
                  <button className='buyhoney' >Buy HONEY<span className='soon' >soon</span></button>
                </div>
              </div>
            </div>
            <div className='footer-top-right'>
              <div className='footer-contextone'>
                <p style={{ fontWeight: '800' }}>Products</p>
                {
                  mylists.map((item, idx) => (
                    <a href={item.href} target={item.target} key={idx}>
                      <div className='exchange' onClick={() => { handleclick(idx); setFirst(true) }} >
                        <p>{item.context}</p><img src={item.img} /><span className='soon'>{item.span}</span>
                        <div className={isActive === idx && isFirst ? 'opennew' : ''}></div>
                      </div>
                    </a>
                  ))
                }
              </div>
              {/* <div className='footer-contexttwo' >
                <div className='exchange'><p style={{ fontWeight: '800' }} >About</p><div></div></div>
                {
                  mylists1.map((item, idx) => (
                    <a href={item.href} target={item.target} ><div className='exchange' key={idx} onClick={() => { handleclick(idx); setFirst(false) }} ><p>{item.context}</p><img src={item.img} /><div className={isActive === idx && !isFirst ? 'opennew' : ''}></div></div></a>
                  ))
                }
              </div> */}
              <div className='footer-contextthree' >
                <p style={{ fontWeight: '800', textAlign: 'center' }} >Community</p>
                <div className='social-top-group' >
                  {/* <li><a href='https://discord.gg/KKcsW7d7J4' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} className='icon ' size='2x' /></a></li>
                  <li><a href='https://twitter.com/TheHexagonOrg/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} className='icon ' size='2x' /></a></li> */}
                  <a href='https://discord.gg/KKcsW7d7J4' ><div className='social-image'><img src='images/discord.png' /></div></a>
                  <a href='https://twitter.com/TheHexagonOrg/' ><div className='social-image'><img src='images/twitter.png' /></div></a>
                </div>
                <div className='social-bottom-group' >
                  {/* <li><a href='https://discord.gg/KKcsW7d7J4' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} className='icon ' size='2x' /></a></li>
                  <li><a href='https://twitter.com/TheHexagonOrg/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} className='icon ' size='2x' /></a></li> */}
                  <a href='https://www.facebook.com/groups/1579852909074814' ><div className='social-image'><img src='images/facebook.png' /></div></a>
                  <a href='https://www.linkedin.com/company/80249859/' ><div className='social-image'><img src='images/linkedin.png' /></div></a>
                  <a href='https://t.me/thehexagonbee' ><div className='social-image'><img src='images/telegram.png' /></div></a>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            TheHexagon | all right reserved 2022
          </div>
          {/* <div className='icon-group'>
            <li><a href='https://discord.com/invite/sDXJeafg' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} className='icon ' size='2x' /></a></li>
            <li><a href='https://twitter.com/TheHexagonOrg/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} className='icon ' size='2x' /></a></li>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Footer
