import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';

const WatchListHeader = () => {
  return (
    <TableHead>
       <TableCell align="left">Symbol</TableCell>
        <TableCell align="left">Currency</TableCell>
        <TableCell align="left">Delete</TableCell>
    </TableHead>
  )
}

export default WatchListHeader;