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
import RefreshIcon from '@mui/icons-material/Refresh';
import TextField from '@mui/material/TextField';

export default function CurrencyConverter() {
  const [ state, setState] = useState([{data:[]}]);
  const [ primary, setPrimary] = useState({
    price:"",
    name:""
  });
  const [ secondary, setSecondary] = useState({
    price:"",
    name:""
  });
  const [ number, setNumber] = useState(1);
  const [ result, setResult] = useState(0);

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

  const cryptoList = state[0].data.map((crypto)=>{

    return (
      <MenuItem key ={crypto.name} value={crypto}>{crypto.name}<img src={crypto.image}alt = "crypto" width = '30' ></img></MenuItem>
    );
  })
  const handleChange = (event) => {
    if(Math.sign(event.target.value)){

      setNumber(event.target.value)
    }
  }
  const handleSecondary = (event) => {
    console.log("SecondaryValue:",event.target.value);
    setSecondary({...secondary,
      price:event.target.value.current_price,
      name:event.target.value.id
    })
  };
  const handlePrimary = (event)=>{
    console.log("PrimaryValue:",event.target.value);
    console.log("PrimaryValue:",event.target.value.current_price);
    setPrimary({...primary,
      price:event.target.value.current_price,
      name:event.target.value.id
    })
  }

  const amount = number * primary.price;

  const handleResult = () => {
    let final = 0;
    
    final = amount/secondary.price;
    
    setResult(final);
  }
  console.log(result);

  const handleRefresh = () => {
    setNumber("");
    setPrimary("");
    setSecondary("");
    setResult("");
  }
  return (
    
    <Box
      sx={{
        width: 500,
        height: 500
      }}
    >
      <TextField sx={{ m: 1, minWidth: 300 }}
        id="outlined-number"
        value={number}
        label="Enter Amount to Convert"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={primary ? primary.price.current_price : ""}
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
          value={secondary ? secondary.price.current_price : ""}
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
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleResult}>
          Convert
        </Button>
        <Button variant="contained" endIcon={<RefreshIcon />} onClick={handleRefresh}>
          Clear
        </Button>
      </div>
      <div>
      {result ? `${number}${primary.name}=${result}${secondary.name}` : null}
      </div>
    </Box>
  );
}


