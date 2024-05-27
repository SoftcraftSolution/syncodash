import React, { useState } from 'react';
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function WorkWithTheRockets() {
  // Sample data for demonstration
  const attendanceData = [
    { date: '2024-05-23', actualHours: '8', totalHours: '8', type: 'On time', rider: 'John Doe' },
    { date: '2024-05-22', actualHours: '7', totalHours: '8', type: 'Delayed', rider: 'Jane Smith' },
    // Add more data as needed
  ];

  // State for selected rider
  const [selectedRider, setSelectedRider] = useState("");

  // Handle change in selected rider
  const handleRiderChange = (event) => {
    setSelectedRider(event.target.value);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" p={0}>
        <SoftBox
          display="flex"
          flexDirection="column"
          py={2}
          px={2}
          borderRadius="lg"
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="grey" fontWeight="bold">
              User-wise Attendance
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2} display="flex" alignItems="center">
            <SoftTypography variant="body2" color="black" fontWeight="bold">
              Search Rider:
            </SoftTypography>
            <Select
              value={selectedRider}
              onChange={handleRiderChange}
              variant="outlined"
              style={{ marginLeft: 8 }}
            >
              <MenuItem value="">Search Rider</MenuItem>
              <MenuItem value="John Doe">John Doe</MenuItem>
              <MenuItem value="Jane Smith">Jane Smith</MenuItem>
              {/* Add more riders as needed */}
            </Select>
          </SoftBox>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Actual Working Hours</TableCell>
                  <TableCell>Total Working Hours</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData
                  .filter((row) => selectedRider === "" || row.rider === selectedRider)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.actualHours}</TableCell>
                      <TableCell>{row.totalHours}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
