import './roadmap.css';


const Roadmap = () => {
  return (
    <div className="roadmap-section" id='roadmap'>

      <div className='roadmap-title'>
        <p>ROADMAP</p>
      </div>
      <div className='roadmap-container'>
        <div className='roadmap-coin'>
          <img src='/images/about_coin.png' />
        </div>
        <div className='roadmap-map'>
          <img src='/images/map.png' />
        </div>
        <div className='roadmap-top'>
          <div className='roadmap-top-left'>
            <h2>Q1</h2>
            <p>
              Arts Creation,
              WebSite Launch,
              Community Building,
              NFT Minting,
              $Honey Token ICO and Launch,
              Staking DApp Launch,
              Hexagon Billboard Launch,
              Liquidity Build
            </p>
          </div>

          <div className='roadmap-top-right'>
            <h2>Q2</h2>
            <p> NFT Marketplace <br />
              Deploy NFT Launchpad</p>
          </div>
        </div>

        <div className='roadmap-bottom'>
          <div className='roadmap-bottom-left'>
            <h2>Q3</h2>
            <p>
              P2E Game Launch</p>
          </div>
          <div className='roadmap-bottom-right'>
            <h2>Q4</h2>
            <p> Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Roadmap;
