import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';



const DisplayTable = ({ dictionary }) => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" >Domain</TableCell>
          <TableCell align="left">Region</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dictionary.map(row => (
          <TableRow align="left" key={row.tableData.id}>
            <TableCell align="left" >{row.domain}</TableCell>
            <TableCell align="left" >{row.region}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DisplayTable