import Piechart from '../../../components/chart'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ScrollAnimation from 'react-animate-on-scroll';
import './tokens.css'

const Tokens = () => {

  return (
    <div className="tokens-section" id='tokens'>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
        <h1 className='tokens-title'>Tokenomics</h1>
        
      </ScrollAnimation>
      {/* <div className='tokens-background'>
        <img src='images/tokens_bg.png' />
      </div> */}
      <div className="tokens-container">
        <div className="tokens-control">
          <Piechart />
        </div>
      </div>
    </div>
  );
}
export default Tokens