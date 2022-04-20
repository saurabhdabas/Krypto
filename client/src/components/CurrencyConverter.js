import {React, useState, useEffect} from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import PrimarySearchAppBar from './Header/Header';


export default function CurrencyConverter() {
  const [ state, setState] = useState([{data:[]}]);
  const [ primary, setPrimary] = useState(null);
  const [ secondary, setSecondary] = useState(null);

  
  useEffect(() => {
    axios.get('/market') 
      .then((res) => {
        setState((prev)=>[{ ...prev,
          data:res.data
        }])
        }
      )
      .catch((err)=>console.log(err));
  },[]);
  console.log("state[0].data:",state[0].data);
  const cryptoList = state[0].data.map((crypto)=>{
    // console.log("price:",crypto);
    return (
      <MenuItem key ={crypto.name} value={crypto.current_price}>{crypto.name}<img src={crypto.image}alt = "crypto" width = '30' ></img></MenuItem>
    );
  })
  const handleSecondary = (event) => {
    console.log("SecondaryValue:",event.target.value);
    setSecondary(event.target.value);
  };
  const handlePrimary = (event)=>{
    console.log("PrimaryValue:",event.target.value);
    setPrimary(event.target.value)
  }

  return (
    
    <Box
      sx={{
        width: 500,
        height: 500
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={primary ? primary : ""}
          label="Primary"
          onChange={handlePrimary}
        >
          <MenuItem value="">
            <em>Select a Coin</em>
          </MenuItem>
          {cryptoList}
        </Select>
        <FormHelperText>Primary Currency</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">To</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={secondary ? secondary : ""}
          label="Secondary"
          onChange={handleSecondary}
        >
          <MenuItem value="">
            <em>Select a Coin</em>
          </MenuItem>
          {cryptoList}
        </Select>
        <FormHelperText>Secondary Currency</FormHelperText>
      </FormControl>
      <div>
        <Button variant="contained" endIcon={<SendIcon />}>
          Convert
        </Button>
      </div>
    </Box>
  );
}


