import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components';
import './accordion.css'

const Catagories = styled.div`{
  .accordion-item {
    background:transparent
  }
  .accordion-button {
    padding :19px 38px;
    background:rgba(255, 255, 255, 0.1) !important;
    font-size:25px;
    color:#FF9F1C;
    border:3px solid #FF9F1C;
    border-radius:100px !important;
  }
  .accordion-body {
    color:#FF9F1C;
    font-size:20px;
    text-align:initial
  }
  .accordion-button:not(.collapsed)::after {
    // background:url(images/uparrow.png);

  }
  .accordion-button::after {
    background:url(images/downarrow.png);

    height:10px;
  }
  @media(max-width:530px) {
    .accordion-button {
      font-size:20px;
    }
  }
}`;

const accordionlists = [
  {
    title: 'What is TheHexagon?', content: `TheHexagon is the first revolution collection
     of unique 10,000NFTs, including 1 Queen Bee, 6666 Worker Bees, 1111 Army Bees and 
     2222 Gang Bees. Each Bee is a unique digital Bee descending upon the Avax 
     blockchain.
`},
  {
    title: 'Will there be whitelist?', content: 'Yes, there is whitelist for NFT pre-sale. The pre-sale minters will get $HONEY airdrop. Check more on （📌）mint-information '
  },
  {
    title: 'What is the $HONEY Token?', content: `The $HONEY Token is the utility 
    token that is used for billboad and P2E game ecosystems.`
  },
  {
    title: 'How to the NFT Holders earn $HONEY Token?', content: `There are 4 types of 
    NFTs. All NFTs can be used for P2E game. But for NFT staking, just Worker Bee NFTs 
    can be used. So there are different ways to earn the token.`
  },
  {
    title: 'What is Billboard?', content: `The honeycomb is a world of hexagons.
Here, people can advertise anything by showing any picture on the hexagons for the purchased period! People can buy the period from these 3 options.`
  },
  {
    title: ' How many can we mint per wallet?', content: `8 per wallet on pre-sale. 
    On public-sale, there is not limit.`
  },
  {
    title: ' What is the mint date?', content: `pre-sale on 24th Feb 5PM UTC, 
    public-sale on 25th Feb 5PM UTC `
  },
]

const Accordionitem = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Catagories>
      {
        accordionlists.map((item, idx) => (
          <Accordion defaultActiveKey="0" flush className='accordion' key={idx}>
            <Accordion.Item>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                {item.content}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))
      }
    </Catagories>
  );
};
export default Accordionitem;
