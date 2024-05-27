import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function OrdersOverview() {
  // Dummy data for demonstration
  const data = [
    { name: "John Doe", mobile: "123-456-7890", present: 20, absent: 5, leave: 2, halfDay: 3 },
    // Add more data as needed
  ];

  const [selectedRider, setSelectedRider] = useState(data[0].name); // Initial selected rider

  return (
    <Card className="h-100">
      <SoftBox p={3}>
        <SoftTypography variant="h6" fontWeight="medium">
          Search Rider
        </SoftTypography>
        <SoftBox mt={1} mb={2}>
          {/* Dropdown for selecting the rider */}
          <select value={selectedRider} onChange={(e) => setSelectedRider(e.target.value)}>
            {data.map((rider, index) => (
              <option key={index} value={rider.name}>{rider.name}</option>
            ))}
          </select>
        </SoftBox>
      </SoftBox>
      <SoftBox>
        <div className="vertical-table">
          {/* Display data for the selected rider */}
          {data.map((rider, index) => (
            rider.name === selectedRider && (
              <div key={index} className="table-row">
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> {rider.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Mobile:</strong> {rider.mobile}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Total Present:</strong> {rider.present}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Total Absent:</strong> {rider.absent}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Total Leave:</strong> {rider.leave}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Total Half Day:</strong> {rider.halfDay}
                </Typography>
              </div>
            )
          ))}
        </div>
      </SoftBox>
      {/* Internal CSS */}
      <style>
        {`
        .vertical-table {
          display: flex;
          flex-direction: column;
        }

        .table-row {
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-row strong {
          margin-right: 5px;
        }

        select {
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        `}
      </style>
    </Card>
  );
}

export default OrdersOverview;
