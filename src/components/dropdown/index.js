import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components'
import InputBase from '@mui/material/InputBase';
import Dropdown from 'react-bootstrap/Dropdown'

const Dropdownstyled = styled.div`{
  .btn-success {
    background :transparent;
    border:1px solid grey;
    width: 143px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
  }
   .btn-success:active:focus:active {
     box-shadow:none 
   }
   .btn-success.active, .btn-success:active, .show>.btn-success.dropdown-toggle {
     box-shadow:none;
     background:none;
     border-color:grey
   }
   .dropdown-menu {
     background-color: #3a3434;
   }
   .dropdown-item {
     color:white;
   }
   @media(max-width:768px) {
     .btn-success {
       width:110px;
       padding:5px 15px;
     }
   }
   @media(max-width:496px) {
     .btn-success {
       width:145px;
       padding:5px 15px;
     }
   }
}`


export default function SelectDropdown({ beetype, sortby, value, onChange }) {
  const [age, setAge] = React.useState('');

  return (<>
    {beetype && <Dropdownstyled>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All
        </Dropdown.Toggle>
        <Dropdown.Menu value={value} onChange={e => onChange(e.target.value)}>
          <Dropdown.Item >Queen Bee</Dropdown.Item>
          <Dropdown.Item >Worker Bee</Dropdown.Item>
          <Dropdown.Item >Army Bee</Dropdown.Item>
          <Dropdown.Item >Gang Bee</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Dropdownstyled>
    }
    {sortby && <Dropdownstyled>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All
        </Dropdown.Toggle>
        <Dropdown.Menu value={value} onChange={e => onChange(e.target.value)}>
          <Dropdown.Item >Highest price</Dropdown.Item>
          <Dropdown.Item >Lowest price</Dropdown.Item>
          <Dropdown.Item>Lastest listed</Dropdown.Item>
          <Dropdown.Item >Oldest listed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Dropdownstyled>
    }
  </>
  );
}
