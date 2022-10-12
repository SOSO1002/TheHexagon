import './stakinginfo.css'
import { useParams } from 'react-router-dom';
import Header from '../../components/header'
import Footer from '../../components/footer'

const ownedlists = [
  { id: 0, img: '/images/queen_nft.png', title: 'queen' },
  { id: 1, img: '/images/worker_nft.png', title: 'worker' },
]

const Stakinginfo = () => {
  let { id } = useParams();
  console.log(id);
  // const { img, title } = id;
  return (
    <>
      <Header />
      <div className='stakinginfo-page'>
        <div className='stakinginfo-container' >
          <div className='stakinginfo-control' >
            <a href='/staking' className='arrow'>&#129044;</a>
            {
              ownedlists.map((item, idx) => {
                if (item.id == id) {
                  return (
                    <div className='stakinginfo-content' >
                      <div className='stakinginfo-content-left' >
                        <div className='stakinginfo-img' key={idx}>
                          <img src={item.img} />
                        </div>
                        <div className='stakinginfo-address' >
                          <p className='address-label' ><span style={{ color: '#DEDEDE' }} >Contract Address</span><span style={{ color: '#076AFE' }} >0x51df..8d64</span></p>
                          <p className='address-label' ><span style={{ color: '#DEDEDE' }}>Token ID</span><span>1284</span></p>
                          <p className='address-label' ><span style={{ color: '#DEDEDE' }}>Token Standard</span><span>ERC-721</span></p>
                          <p className='address-label' ><span style={{ color: '#DEDEDE' }}>Blockchain</span><span>Ethereum</span></p>
                        </div>
                      </div>
                      <div className='stakinginfo-content-right' >
                        <div className='right-one'>
                          <h1 style={{ fontSize: '48px', color: 'white' }} >NFT title</h1>
                          <p style={{ marginTop: '24px', fontSize: '18px', color: '#DEDEDE' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Turpis libero tempus quis quam ultrices elementum pellentesque
                            eget a. Amet, mattis netus ac tortor. Venenatis cras massa
                            habitant feugiat ipsum vitae nulla purus felis. Et, augue
                            enim nibh vulputate consectetur sed.
                          </p>
                        </div>
                        <button>Enable to stake </button>
                        <div className='right-two' >
                          <p>Price History</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Stakinginfo;