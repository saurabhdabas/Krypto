import React from 'react'
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


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
      <input style={{width: 400, height: 40 }} value={props.search} onChange={props.onChange} name="value" placeholder="Enter the crypto you want to search for">
      </input>
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
