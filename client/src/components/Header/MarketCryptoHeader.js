import React from 'react';
import TableHead from '@mui/material/TableHead';

import TableCell from '@mui/material/TableCell';
const MarketCryptoHeader = (props) => {
  return (
      <TableHead >
         <TableCell align="center"  sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Symbol</TableCell>
          <TableCell align="center" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Currency</TableCell>
          <TableCell align="center" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Current Price</TableCell>
          <TableCell align="center" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Change</TableCell>
          <TableCell align="center" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>Last Updated</TableCell>
          <TableCell align="center" sx= {
        {backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey' : 'rgb(238, 238, 238)'}
      }>{(props.dashboard === 'market')? "Add To Watchlist" : "Remove"}
        </TableCell>
      </TableHead>
  );
}

export default MarketCryptoHeader