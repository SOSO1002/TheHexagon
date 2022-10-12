import React, { useState } from 'react'
import './market.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import SelectDropdown from '../../components/dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components'

const Liststyled = styled.div`{
  .css-wjh20t-MuiPagination-ul{
    justify-content:center;
    margin:15px 0px;
  }
  .css-k5nfr0-MuiButtonBase-root-MuiPaginationItem-root {
    color:white;
    border:1px solid white;
    border-radius:8px
  }
  .css-1scal0h-MuiPaginationItem-root {
    color: white
  }
  .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
    background-color:black;
  }
  MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiMenu-paper MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
    background:black
  }
  @media(max-width:860px) {
    .cIcxYs .MuiFormControl-root {
      width:95px;
      height:27px;
    }
    .css-q8hpuo-MuiFormControl-root {
      width:135px
    }
  }
  @media(max-width:450px) {
    .css-q8hpuo-MuiFormControl-root {
      width:100px
    }
    .izmAKE .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
      font-size:12px;
    }
    .izmAKE .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon, .izmAKE .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
      font-size:20px;
    }
  }
}`



let marketlist = [
  { id: 0, img: '/images/queen.jpg', identifier: 'World #1', beetype: 'Queen Bee', price: '999' },
  { id: 1, img: '/images/maniac.png', identifier: 'World #325', beetype: 'Worker Bee', price: '129' },
  { id: 2, img: '/images/queen.jpg', identifier: 'World #32', beetype: 'Worker Bee', price: '354' },
  { id: 3, img: '/images/queen.jpg', identifier: 'World #2', beetype: 'Army Bee', price: '199' },
  { id: 4, img: '/images/queen.jpg', identifier: 'World #1', beetype: 'Queen Bee', price: '456' },
  { id: 5, img: '/images/queen.jpg', identifier: 'World #325', beetype: 'Worker Bee', price: '32' },
  { id: 6, img: '/images/queen.jpg', identifier: 'World #32', beetype: 'Worker Bee', price: '572' },
  { id: 7, img: '/images/queen.jpg', identifier: 'World #2', beetype: 'Army Bee', price: '345' },
]
export const Market = () => {
  const [beetype, setBeeType] = useState('')
  const [issort, setSort] = useState(-1)
  const [inputText, setInputText] = useState('')
  // console.log(issort)
  const sorthandlechange = (sortType) => {
    setSort(sortType)
    switch (sortType) {
      case 0:
        marketlist = marketlist.sort((a, b) => a.price - b.price);
        return 0
      case 1:
        marketlist = marketlist.sort((a, b) => b.price - a.price);
        return 1
      case 2:
        console.log(2)
        return 2
      case 3:
        console.log(3)
        return 3
    }
  }
  const handletextchange = (id) => {
    // var search = marketlist.find(item => item.identifier == `World #${id}`)
    setInputText(id)
  }
  return (
    <Liststyled>
      <Header />
      <div className='market-background'>
        <h1 >NFT Marketplace</h1>
        <div className='market-top'>
          <div className='market-top-container'>
            <div className='market-top-control' >
              <ul>
                <li>
                  <h2>Floor Price</h2>
                  <div>
                    <span>5</span><img src='/images/avax.svg' />
                  </div>
                </li>
                <hr />
                <li>
                  <h2>Listed Value</h2>
                  <div>
                    <span>6000</span><img src='/images/avax.svg' />
                  </div>
                </li>
                <li>
                  <h2>Listed Items</h2>
                  <div><span>100</span></div>
                </li>
                <li>
                  <h2>Items</h2>
                  <div><span>10,000</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='market-page' >
        <div className='market-main' >
          <div className='market-main-container' >
            <div className='market-main-control'>
              <div className='market-filter-section'>
                <div className='market-search' >
                  <div className='market-search-control'>
                    <input placeholder='#token ID' value={inputText} onChange={(e) => handletextchange(e.target.value)} />
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
                <div className='market-filter' >

                  <div className='bee-type'>
                    <p>Bee type:</p>
                    <SelectDropdown beetype value={beetype} onChange={setBeeType} />
                  </div>
                  <div className='sort-by'>
                    <p>Sort by:</p>
                    <SelectDropdown
                      sortby value={issort} onChange={sorthandlechange} />
                  </div>
                </div>
              </div>
              <div className='nft-list'>
                <div className='nft-list-container'>
                  <div className='nft-list-control'>
                    {
                      marketlist.sort(item => item.price === issort).filter(item => beetype === '' || item.beetype === beetype).map((item, idx) => {
                        if (inputText !== '') {
                          if (item.identifier === 'World #' + inputText) {
                            return (
                              // <a href={`/marketinfo/${item.id}`} key={idx}>
                              <a>
                                <div className='nft-card' >
                                  <img src={item.img} />
                                  <div className='nft-card-content' >
                                    <h2>{item.identifier}</h2>
                                    <div><p>price {item.price}</p><img src='/images/avax.svg' /></div>
                                  </div>
                                </div>
                              </a>
                            )
                          }
                        } else {
                          return (
                            // <a href={`/marketinfo/${item.id}`} key={idx}>
                            <a>
                              <div className='nft-card' >
                                <img src={item.img} />
                                <div className='nft-card-content' >
                                  <h2>{item.identifier}</h2>
                                  <div><p>price {item.price}</p><img src='/images/avax.svg' /></div>
                                </div>
                              </div>
                            </a>
                          )
                        }
                      }

                      )
                    }
                  </div>
                </div>
              </div>
              <Stack spacing={2}>
                <Pagination count={10} size='large' variant="outlined" shape="rounded" color='primary' />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Liststyled>
  )
}