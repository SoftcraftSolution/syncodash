import React, { useState } from 'react';
import Card from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SoftBox from "components/SoftBox";
import Typography from '@mui/material/Typography';

function BuildByDevelopers() {
  // Sample data for demonstration
  const [riders, setRiders] = useState([
    { id: 1, name: 'John Doe', number: 'RD1234', zone: 'Zone A' },
    { id: 2, name: 'Jane Smith', number: 'RD5678', zone: 'Zone B' },
    { id: 3, name: 'Mike Johnson', number: 'RD9876', zone: 'Zone C' },
  ]);

  const handleEdit = (id) => {
    // You can implement your edit functionality here
    console.log("Edit rider with ID:", id);
  };

  const handleDelete = (id) => {
    // You can implement your delete functionality here
    console.log("Delete rider with ID:", id);
  };

  return (
    <Card>
      <SoftBox p={2}>
        <Typography variant="h6" gutterBottom>Riders Information</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"><strong>Rider Name</strong></TableCell>
                <TableCell align="center"><strong>Rider Number</strong></TableCell>
                <TableCell align="center"><strong>Zone</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {riders.map((rider) => (
                <TableRow key={rider.id}>
                  <TableCell align="center">{rider.name}</TableCell>
                  <TableCell align="center">{rider.number}</TableCell>
                  <TableCell align="center">{rider.zone}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="edit" onClick={() => handleEdit(rider.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(rider.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
