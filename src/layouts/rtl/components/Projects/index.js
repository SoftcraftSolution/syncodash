import { useState } from "react";
import Typography from "@mui/material/Typography"; // Import Typography component

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Data
import data from "layouts/rtl/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("pending");

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      
    </Menu>
  );

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const sections = {
    pending: {
      data: [
        { name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com", id: "001" },
        { name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com", id: "002" },
      ],
      icon: "schedule",
      color: "#FF9800",
    },
    approved: {
      data: [
        { name: "Alice Johnson", phone: "555-123-4567", email: "alice.johnson@example.com", id: "003" },
        { name: "Bob Brown", phone: "555-987-6543", email: "bob.brown@example.com", id: "004" },
      ],
      icon: "check_circle",
      color: "#4CAF50",
    },
    rejected: {
      data: [
        { name: "Eva Green", phone: "555-456-7890", email: "eva.green@example.com", id: "005" },
        { name: "Chris White", phone: "555-789-0123", email: "chris.white@example.com", id: "006" },
      ],
      icon: "highlight_off",
      color: "#F44336",
    },
    cancelled: {
      data: [
        { name: "David Black", phone: "555-234-5678", email: "david.black@example.com", id: "007" },
        { name: "Sophia Grey", phone: "555-678-9012", email: "sophia.grey@example.com", id: "008" },
      ],
      icon: "cancel",
      color: "#607D8B",
    },
  };

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3} style={{backgroundImage: "linear-gradient(to right, #65c3bf, #0d3b66)"}}>
        <SoftBox>
          <SoftTypography variant="h6" gutterBottom>
            List
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <h4>Leave Management</h4>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong></strong>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </SoftBox>
        {renderMenu}
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-around" p={2}>
        {Object.keys(sections).map((section) => (
          <button key={section} className="action-button" onClick={() => handleSectionChange(section)}>
            <Icon>{sections[section].icon}</Icon>
            <Typography variant="subtitle1" style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}>{section.charAt(0).toUpperCase() + section.slice(1)}</Typography>
          </button>
        ))}
      </SoftBox>
      <SoftBox>
        <div className="section-content">
          {sections[activeSection].data.map((item, index) => (
            <div key={index} className="data-item">
              <Typography variant="body1">Name: {item.name}</Typography>
              <Typography variant="body1">Phone: {item.phone}</Typography>
              <Typography variant="body1">Email: {item.email}</Typography>
              <Typography variant="body1">ID: {item.id}</Typography>
              <hr />
            </div>
          ))}
        </div>
      </SoftBox>
      {/* Internal CSS */}
      <style>
        {`
        .action-button {
          background-color: ${sections[activeSection].color}; /* Set background color based on section */
          border: none;
          color: white;
          padding: 10px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 8px;
          transition-duration: 0.4s;
        }
        
        .action-button:hover {
          background-color: #0056b3; /* Darker Blue */
        }

        .section-content {
          padding: 20px;
          border-radius: 8px;
        }

        .data-item {
          margin-bottom: 20px;
        }

        hr {
          border: 0;
          border-top: 1px solid #ccc;
          margin: 10px 0;
        }
        `}
      </style>
    </Card>
  );
}

export default Projects;
