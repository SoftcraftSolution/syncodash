import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    phoneNumber: "",
    assignTo: "" // Added assignTo field to formData
  });

  const [createdData, setCreatedData] = useState([]); // State to store created data
  const [assignedData, setAssignedData] = useState([]); // State to store assigned data
  const [acceptedData, setAcceptedData] = useState([]); // State to store accepted data

  const openCreatePopup = () => {
    setCreatePopupOpen(true);
  };

  const closeCreatePopup = () => {
    setCreatePopupOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    // Determine the category based on the form data (e.g., assignTo field)
    const category = formData.assignTo ? "assigned" : "created";

    // Add the form data to the appropriate category state
    if (category === "created") {
      setCreatedData([...createdData, formData]);
    } else if (category === "assigned") {
      setAssignedData([...assignedData, formData]);
    } else if (category === "accepted") {
      setAcceptedData([...acceptedData, formData]);
    }
    closeCreatePopup();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Manage</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Jobs</SoftTypography>
            <Button variant="contained" color="primary" onClick={openCreatePopup}>
              Create
            </Button>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card>
      </SoftBox>

      {/* Display created data */}
      <SoftBox mt={3}>
        <Card>
          <SoftBox p={3}>
            <SoftTypography variant="h6">Created Data</SoftTypography>
            {createdData.map((data, index) => (
              <div key={index} style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
                <SoftTypography variant="body1">
                  Name: {data.name}, ID: {data.id}, Phone Number: {data.phoneNumber}, Assign To: {data.assignTo}
                </SoftTypography>
              </div>
            ))}
          </SoftBox>
        </Card>
      </SoftBox>

      {/* Display assigned data */}
      <SoftBox mt={3}>
        <Card>
          <SoftBox p={3}>
            <SoftTypography variant="h6">Assigned Data</SoftTypography>
            {assignedData.map((data, index) => (
              <div key={index} style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
                <SoftTypography variant="body1">
                  Name: {data.name}, ID: {data.id}, Phone Number: {data.phoneNumber}, Assign To: {data.assignTo}
                </SoftTypography>
              </div>
            ))}
          </SoftBox>
        </Card>
      </SoftBox>

      {/* Display accepted data */}
      <SoftBox mt={3}>
        <Card>
          <SoftBox p={3}>
            <SoftTypography variant="h6">Accepted Data</SoftTypography>
            {acceptedData.map((data, index) => (
              <div key={index} style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
                <SoftTypography variant="body1">
                  Name: {data.name}, ID: {data.id}, Phone Number: {data.phoneNumber}, Assign To: {data.assignTo}
                </SoftTypography>
              </div>
            ))}
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />

      {/* Popup Form */}
      {isCreatePopupOpen && (
        <div className="popup" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Card sx={{ maxWidth: 400 }}>
            <SoftBox p={3}>
              <SoftTypography variant="h6" sx={{ marginBottom: 2 }}>Create New Entry</SoftTypography>
              <SoftBox mb={2}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <input
                  type="text"
                  name="id"
                  placeholder="ID"
                  value={formData.id}
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                />
              </SoftBox>
              <SoftBox mb={2}>
                <input
                  type="text"
                  name="assignTo"
                  placeholder="Assign To"
                  value={formData.assignTo}
                  onChange={handleInputChange}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                />
              </SoftBox>
              <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginRight: 2 }}>
                Save
              </Button>
              <Button variant="contained" onClick={closeCreatePopup}>
                Cancel
              </Button>
            </SoftBox>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Tables;
