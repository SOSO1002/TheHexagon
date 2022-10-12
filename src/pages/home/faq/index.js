import Accordionitem from '../../../components/accordion'
import './faq.css'
import ScrollAnimation from 'react-animate-on-scroll';

const Faq = () =>
  <div className="faq-section" id='faq'>
    <div className='faq-coin'>
      <img src='images/faqcoin.png' />
    </div>
    <center>
      <div className="faq-title">
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <h1 className='faq-title'>FAQ</h1>
        </ScrollAnimation>
      </div>

      <div className="faq-container">
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <Accordionitem />
        </ScrollAnimation>
      </div>
    </center>
  </div>

export default Faq