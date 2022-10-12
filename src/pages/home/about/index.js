import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import './about.css'
import styled from 'styled-components'

const Catogories = styled.div`{
  .slick-slider {
    margin-top:31px;
    cursor:pointer
  }
  .slick-dots {
    bottom:30px;
  }
  .slick-dots div {
    color:black !important;
  }
  .slick-dots li {
    margin: 0 10px
  }
   .slick-dots .slick-active div{
     color:black !important;
     border:none;
     background: #FFB74E;
     border-radius:50%;
   }
  @media(max-width:768px) {
    .slick-dots {
      bottom:50px !important;
    }
  }
}`

const slideslists = [
  { img: '/images/slide1.png', title: 'NFT', content: `TheHexagon is a revolutionary new advertising concept in the NFT space comprised of 1 Queen Bee, 6666 Worker Bees, 1111 Army Bees and 2222 Gang Bees. Each Bee is a unique digital Bee descending upon the Avalanche blockchain` },
  { img: '/images/slide2.png', title: 'STAKING ', content: `Worker Bees are able to stake to earn $HONEY. Every Worker Bee NFT holder can stake. There are 2 options: 10-day lock and 30-day lock.` },
  { img: '/images/slide3.png', title: 'ADVERTISING ', content: `TheHexagon is a collection of image spaces that can be purchased for a specific timeframe. You can learn more from our Whitepaper and our Discord Community.` },
  { img: '/images/slide4.png', title: 'P2E', content: `All Bee NFT holders can play the game to earn $HONEY. Battle against other players and earn rewards. ` },
]

const About = () => {
  const settings = {
    dots: true,
    fade: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='slidelist'
        style={{
          fontSize: '25px',
          color: "black",
          borderRadius: '50%',
          width: '40px',
          // margin: '0 -40px'
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <Catogories>
      <div className="about-section" id='about'>
        <div className="about-container">
          <div className="about-control">
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
              <h1 className='about-title'>About</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
              <div className='about-content-container'>
                <p className="about-content">
                  The Hexagon is a collection of 10,000 NFTs: 6666 Worker Bees, 2222 Gang Bees, 1111 Army Bees, and 1 Queen Bee. The Worker Bees create honey ($HONEY token), Gang Bees rob $Honey when Worker Bees create $HONEY (and occasionally kill 1% of Worker Bees), Army Bees protect the $HONEY of Worker Bees from the Gang Bees, and the Queen Bee can mint Worker Bee NFTs to replace those killed by Gang Bees. Therefore, The Hexagon has a fantastic, unique way to make sure that the $Honey is appropriately distributed. $Honey will be used in the Honeycomb to make it a hub for community growth, gaming, and value accumulation.
                  The Hexagon will have many games available that will work in the most decentralized way possible.
                  The Honeycomb will be a conglomerate of Hexagons (spaces that anyone can rent or buy) where the user can host a picture (or very short video) or a Bee game. The games will be extremely customizable and allow the owner to even customize the reward system. Nearly everything will be managed by the Avalanche blockchain.
                </p>
              </div>
            </ScrollAnimation>
            <div className='slide-container'>
              <Slider {...settings}>
                {
                  slideslists.map((item, idx) => (
                    <div className="slide-item">
                      <img src={item.img} />
                      <div className='slide-content'>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Catogories>
  );
}
export default About;
