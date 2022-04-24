import React from 'react'
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input'; 
const SearchForm = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container justifyContent="center">
    <form>

      <Input style={{width: 400, height: 40 }} 

        value={props.search}
        onChange={props.onChange} 
        name="value" 
        placeholder="Enter the crypto you want to search for" 
        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
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
    </ThemeProvider>
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
