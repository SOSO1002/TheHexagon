import ScrollAnimation from 'react-animate-on-scroll';
import './story.css'

const mylists = [
  {
    img: 'images/queen_nft.png', className: "class-one", title: 'Queen Bee',
    content: `This is the rarest Bee within TheHexagon.
The Queen Bee holder can mint Worker Bee NFTs to replace those killed by Gang Bees.`},
  {
    img: 'images/worker_nft.png', className: "class-two", title: 'Worker Bee', content: `Worker Bees get honey ($HONEY token) from Flowers (NFT Staking Dapp).
Occasionally, 1% of Worker Bees are killed by Gang Bees.`},
  { img: 'images/army_nft.png', className: "class-one", title: 'Army Bee', content: 'Army Bees protect the $HONEY of Worker Bees from the Gang Bees.' },
  { img: 'images/gang.png', className: "class-two class-image", title: 'Gang Bee', content: 'Gang Bees rob honey when Worker Bees harvest $HONEY from staking.' }
]

const Story = () => {
  return (
    <div className="story-section" id='story'>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
        <h1 className='story-title'>Story</h1>
      </ScrollAnimation>
      <div className="story-container">
        <div className="story-content">
          <img src='/images/story.png' />
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <p> Bees are among the most diligent workers in the world. They help plants reproduce, which provide us with the ability to eat, make clothes, and live. In TheHexagon, our Bees also use their homes to advertise to get even more $HONEY!!!
            </p>
          </ScrollAnimation>
        </div>
      </div>
      {/* <img sec='images/beenft-coin.png' /> */}
      <div className='bee-nft'>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <h2>Bee NFT</h2>
          <img src='/images/beenft_coin.png' />
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <div className='bee-nft-control'>
            {
              mylists.map((item, idx) => (
                <div className={item.className} key={idx}>
                  <div className='bee-avatar'>
                    <img src={item.img} />
                  </div>
                  <div className='bee-intro'>
                    <h3 className='bee-intro-title'><span>{item.title}</span></h3>
                    <p> {item.content}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </ScrollAnimation>
      </div>
      <div className='bee-billboard'>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <h2>HoneyComb</h2>
        </ScrollAnimation>
        <div className='billboard-container'>

          <div className="billboard-content">
            <a><img src='/images/billboard.png' /></a>

            <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
              <p> The honeycomb is a world of hexagons.
                Here, people can advertise anything by showing any picture on the hexagons or host a Bee Game with plenty of customizability for the Purchased period!
                People can buy the period from these 3 options.<br />
                - 1 day-10 $Honey<br />
                - 10 days-85 $Honey<br />
                - 30 days-240 $Honey<br />
                - Once the period is over, the hexagons will be returned to empty.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Story
