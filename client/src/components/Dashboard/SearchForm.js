import React from 'react'
import { Grid } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input'; 
const SearchForm = (props) => {

  return (
    
    <Grid container justifyContent="center">
    <form>

      <Input style={{width: 400, height: 40 }} 

        value={props.search}
        onChange={props.onChange} 
        name="value" 
        placeholder="Enter the crypto you want to search" 
        startAdornment={<InputAdornment position="start"><SearchIcon style={(props.mode === "dark") ? {color: "white"} : {color: "black"}}/></InputAdornment>}
        inputProps={{ style: {textAlign: 'center'} }}
        // InputProps={{
        //   startAdornment: <InputAdornment position="start"></InputAdornment>,
        // }}
        // startAdornment={
        // <InputAdornment position="start">
        //   <IconButton
        //     aria-label="toggle password visibility"
        //     edge="end"
        //   >
        //     <SearchIcon/>
        //   </IconButton>
        // </InputAdornment>
        // }
      >
      </Input>

    </form>
   
    </Grid>
  )
}

export default SearchForm;

// import React from 'react'

// const SearchForm = (props) => {

//   return (
//     <form>
//       <input value={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
//       </input>
//     </form>
//   )
// }

// export default SearchForm
