import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';	
import './stakingcard.css'
import Stakingmodal from '../stakingmodal'
import Toast from 'react-bootstrap/Toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { contractNFT, contractStaking } from '../../constants/contractConfig';

const ownedlists = [
  { id: 0, img: 'images/gang.png', title: 'Gang Bee' },
  { id: 1, img: 'images/gang.png', title: 'Gang Bee' },
  { id: 2, img: 'images/gang.png', title: 'Gang Bee' },
  { id: 3, img: 'images/gang.png', title: 'Gang Bee' },
  { id: 4, img: 'images/gang.png', title: 'Gang Bee' },
  // { id: 1, img: 'images/worker_nft.png', title: 'worker', star: '/images/star.png' },
]

const clamlists = [
  { img: 'images/gang.png', title: 'army', clambtn: 'noclam', earn: 'Earning' },
  { img: 'images/gang.png', title: 'army', clambtn: 'clam', earn: 'Earned' },
  { img: 'images/gang.png', title: 'army', clambtn: 'noclam', earn: 'Earning' },
  { img: 'images/gang.png', title: 'army', clambtn: 'clam', earn: 'Earned' },
  { img: 'images/gang.png', title: 'army', clambtn: 'noclam', earn: 'Earning' },
  { img: 'images/gang.png', title: 'army', clambtn: 'clam', earn: 'Earned' },

]

const Stakingcard = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [toastshow, setShow] = useState(false);
  const [card, setCard] = useState(true);
  const [current, setCurrent] = useState(-1);
  const [ownedList, setOwnedList] = useState(ownedlists);
  const { userAddress, web3 } = useSelector((state) => {
    return {
      userAddress: state.userAddress,
      web3: state.web3
    }
  })

  const handleconfirm = async (lockTimeMode) => {
    console.log('current', current);
	try{
	await contractStaking.methods.deposit(ownedList[current].id, lockTimeMode).send({
		from: userAddress
	});
    let newOwnedList = ownedList.filter((item, idx) => idx !== current);
    console.log(newOwnedList)
    setOwnedList([...newOwnedList]);
    setModalShow(false)
    setShow(true)
	}catch(e) {
		console.log("stakingCard:handleconfirm");
	}
    // setCard(false)
  }

  const handleEnable = (index) => {
	console.log("item.id",index);
    setCurrent(index);
    setModalShow(true);
  }
  
  
  
  
  useEffect(()=>{
	console.log("first render:", userAddress);
	(async()=>{
	  const ownedNumber = await contractNFT.methods.balanceOf(userAddress).call();
	  console.log("ownedNumber:", ownedNumber);
	  const owneds = []
	  for (let idx = 0; idx < ownedNumber; ++idx){
		const tokenId = await contractNFT.methods.tokenOfOwnerByIndex(userAddress, idx).call();
		console.log("tokenId:",tokenId);
		if (tokenId <=6666) {
			owneds = [
				...owneds,
				{ id: tokenId, img: 'images/worker.png', title: "Worker Bee" }
			];
		}
		
	  }
	  console.log("owned list:", owneds);
	  setOwnedList(owneds);
      
	})();
  },[]);

  return (
    <div>
      {
        props.owned && <div className='staking-control' >
          {ownedList.length === 0 &&
            <div className='staking-empty' >
              <img src='/images/img-parachute.png' />
              <h2>No Worker Bee NFT</h2>
              <p>You need a Worker Bee NFT to start staking</p>
              <div className='buy-nfts' >
                <p>Buy NFTs</p>
                <img src='/images/blue.png' />
                <p>Mint NFTs</p>
              </div>
            </div>
          }
          {
            ownedList.map((item, idx) =>
              <>
                {
                  card &&
                  <div className='owned-card' key={idx} >
                    <img src={item.img} />
                    <h1>{item.title}</h1>
                    <button className='owned-btn' onClick={() => handleEnable(idx)}>
                      Enable Stake
                    </button>
                  </div>
                }
                {
                  !card && <div className='staking-empty' >
                    <img src='/images/img-parachute.png' />
                    <h2>No Worker Bee NFT</h2>
                    <p>You need a Worker Bee NFT to start staking</p>
                    <div className='buy-nfts' >
                      <p>Buy NFTs</p>
                      <img src='/images/blue.png' />
                      <p>Mint NFTs</p>
                    </div>
                  </div>
                }
              </>
            )
          }
        </div>
      }
      {
        props.clam && <div className='staking-control'>
          {clamlists.length === 0 &&
            <div className='staking-empty' >
              <img src='/images/img-parachute.png' />
              <h2>No Staked Worker Bee NFT</h2>
            </div>
          }
          {
            clamlists.map((item, idx) => (
              <div className='staked-card' key={idx}>
                <img src={item.img} />
                <h1>{item.title}</h1>
                <p className='earning-value'>
                  <div className='earning'>
                    <img src='/images/dollar.png' />
                    <span style={{ color: '#83B5FF' }} >{item.earn}</span>
                  </div>
                  <div className='earning-total'>
                    <p>11<span style={{ color: '#83B5FF', marginLeft: '5px' }} >HONEY</span></p>
                  </div>
                </p>
                <div className='staked-on'>
                  <p>Staked on</p>
                  <p>2022-2-22</p>
                </div>
                <div className='end-date'>
                  <p>End date</p>
                  <p>2022-6-22</p>
                </div>
                <div className={item.clambtn}>clam</div>
              </div>
            ))
          }
        </div>
      }
      <Toast onClose={() => setShow(false)} show={toastshow} delay={2500} autohide={true}>
        <Toast.Body>

          <div className='toast-content'>
            <p style={{ margin: '0', marginRight: '20px' }}><FontAwesomeIcon icon={faCheck} /></p>
            <p style={{ margin: '0' }}>Staking is approved. Please continue</p>
          </div>
        </Toast.Body>
      </Toast>
      <Stakingmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleconfirm={handleconfirm}
      />
    </div>
  );
}

export default Stakingcard