import { useState, useEffect } from 'react'
import LoadingSpin from "react-loading-spin"
import Countdown from 'react-countdown'
import './banner.css'

const makePadding = num => `${num < 10 ? '0' : ''}${num}`

const pricesChunk = [
  {number: 999, price: 0.6},
  {number: 1999, price: 0.8},
  {number: 2999, price: 1},
  {number: 3999, price: 1.2},
  {number: 6999, price: 1.5},
  {number: 10000, price: 2}
]

const Banner = ({ mint, isLoading, count, setCount, totalMinted, availableNum}) => {  
  useEffect(() => {
   
  }, [])

  const getTotalPrice = mintAmount => {
    let totalPrice = 0;
    for(let i=1; i<=mintAmount; i++) {
      let priceList = pricesChunk.filter(priceItem => totalMinted + i <= priceItem.number)
      let onlyPriceList = []
      priceList.map(item => {
        onlyPriceList.push(item.price)
      }) 
      totalPrice += Math.min(...onlyPriceList)
    }
    console.log('total price', totalPrice)
    return totalPrice
  }

  
  return (
    <div className='banner-section' id='banner'>
      <img src='/images/banner_bg.png' className='banner-bg' />
      <center style={{ paddingTop: '0px' }}>
        <div className='banner-content'>
          <p className='available'>Available : {availableNum - totalMinted} /{availableNum}</p>

          <Countdown date={new Date(Date.UTC(2022, 1, 25, 17, 0, 0))}
            renderer={({ days, hours, minutes, seconds, completed }) => completed ? <div> <button className='mint' onClick={() => mint(getTotalPrice(count).toFixed(1))}>{!isLoading ? "MINT" : <LoadingSpin size="34px" width="4px" />}</button><div className='count'>
              <button onClick={() => setCount(count - 1)} disabled={count <= 1} className={count <= 1 ? 'count-passive' : ''}>-</button>
              <input disabled value={count} onChange={() => setCount()} />
              <button onClick={() => setCount(count + 1)} disabled={count >= 8} className={count >= 8 ? 'count-passive' : ''}>+</button>
            </div>
              <p className='price'>price : {getTotalPrice(count).toFixed(1)}<span style={{ marginLeft: '10px', fontSize: '20px' }}>AVAX</span> </p></div>
              : <Countdown date={new Date(Date.UTC(2022, 1, 24, 17, 0, 0))}
                renderer={({ days, hours, minutes, seconds, completed }) => completed ? <><div> <button className='mint' onClick={() => mint((count * 0.6).toFixed(1), 4)}>{!isLoading ? "MINT" : <LoadingSpin size="34px" width="4px" />}</button><div className='count'>
                  <button onClick={() => setCount(count - 1)} disabled={count <= 
                    1} className={count <= 1 ? 'count-passive' : ''}>-</button>
                  <input disabled value={count} onChange={() => setCount()} />
                  <button onClick={() => setCount(count + 1)} disabled={count >= 8} className={count >= 8 ? 'count-passive' : ''}>+</button>
                </div>
                  <p className='price'>price : {(count * 0.6).toFixed(1)}<span style={{ marginLeft: '10px', fontSize: '20px' }}>AVAX</span> </p></div> </> : <><p className='mint-start'>Pre Sale</p><p className='time'>  {makePadding(days)}:{makePadding(hours)}:{makePadding(minutes)}:{makePadding(seconds)}</p></>}
              />}
          />
        </div>
      </center>
      <Countdown date={new Date(Date.UTC(2022, 1, 25, 17, 0, 0))}
        renderer={({ days, hours, minutes, seconds, completed }) => completed ? ''
          : <Countdown date={new Date(Date.UTC(2022, 1, 24, 17, 0, 0))}
            renderer={({ days, hours, minutes, seconds, completed }) => completed ? <><Countdown date={new Date(Date.UTC(2022, 1, 25, 17, 0, 0))}
              renderer={({ days, hours, minutes, seconds, completed }) => completed ? '' : <div className='public-sale'><p className='mint-start'>Public Sale</p><p className='time'>  {makePadding(days)}:{makePadding(hours)}:{makePadding(minutes)}:{makePadding(seconds)}</p></div>}
            /> </> : ''}
          />}
      />
    </div>
  )
}
export default Banner
