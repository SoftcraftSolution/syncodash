import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

function Dashboard() {
  const [open, setOpen] = useState(false); // State for the Modal
  const [driverFormOpen, setDriverFormOpen] = useState(false); // State for the Driver Form Modal
  const [yearsOfExperience, setYearsOfExperience] = useState(""); // State for years of experience
  const [hospitalFormOpen, setHospitalFormOpen] = useState(false); // State for the Hospital Form Modal

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Save button clicked");
    handleCloseModal(); // Close the modal after saving
  };

  const handleOpenDriverForm = () => {
    setDriverFormOpen(true);
  };

  const handleCloseDriverForm = () => {
    setDriverFormOpen(false);
  };

  const handleSaveDriver = () => {
    // Add your save driver logic here
    console.log("Save Driver button clicked");
    handleCloseDriverForm(); // Close the driver form modal after saving
  };

  const handleOpenHospitalForm = () => {
    setHospitalFormOpen(true);
  };

  const handleCloseHospitalForm = () => {
    setHospitalFormOpen(false);
  };

  const handleSaveHospital = () => {
    // Add your save hospital logic here
    console.log("Save Hospital button clicked");
    handleCloseHospitalForm(); // Close the hospital form modal after saving
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <SoftBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
              >
                <SoftBox>
                  <SoftTypography variant="h6">Create</SoftTypography>
                </SoftBox>
                <SoftBox>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Icon>local_taxi</Icon>}
                    onClick={handleOpenModal}
                    sx={{ marginRight: 1 }}
                  >
                    <Typography variant="subtitle1" style={{ fontWeight: "bold", color:"#000" }}>
                      Create Ambulance
                    </Typography>
                  </Button>
                  {/* Modal */}
                  <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 8,
                        width: 400,
                      }}
                    >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Ambulance
                      </Typography>
                      {/* Customized TextField components */}
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Model No"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Registration No"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Vehicle No"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Insurance Details"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Condition"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      {/* End of customized TextField components */}
                      {/* Save button */}
                      <Button
                        variant="contained"
                        onClick={handleSave}
                        sx={{ marginTop: 2 }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Modal>
                  {/* End of Modal */}
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Icon>drive_eta</Icon>}
                    onClick={handleOpenDriverForm}
                    sx={{ marginRight: 1 }}
                  >
                    <Typography variant="subtitle1" style={{ fontWeight: "bold", color:"#000" }}>
                      Create Driver
                    </Typography>
                  </Button>
                  {/* Driver Form Modal */}
                  <Modal
                    open={driverFormOpen}
                    onClose={handleCloseDriverForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 8,
                        width: 400,
                      }}
                    >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Driver
                      </Typography>
                      {/* Driver Form Fields */}
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Phone No"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Driver License ID"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Aadhar No"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        select
                        fullWidth
                        margin="normal"
                        label="Years of Experience"
                        variant="outlined"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      >
                        <MenuItem value={1}>1 year</MenuItem>
                        <MenuItem value={2}>2 years</MenuItem>
                        <MenuItem value={3}>3 years</MenuItem>
                        <MenuItem value={"5+"}>5+ years</MenuItem>
                      </TextField>
                      {/* End of Driver Form Fields */}
                      {/* Save button */}
                      <Button
                        variant="contained"
                        onClick={handleSaveDriver}
                        sx={{ marginTop: 2 }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Modal>
                  {/* End of Driver Form Modal */}
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Icon>local_hospital</Icon>}
                    onClick={handleOpenHospitalForm}
                  >
                    <Typography variant="subtitle1" style={{ fontWeight: "bold", color:"#000" }}>
                      Create Hospital
                    </Typography>
                  </Button>
                  {/* Hospital Form Modal */}
                  <Modal
                    open={hospitalFormOpen}
                    onClose={handleCloseHospitalForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 8,
                        width: 400,
                      }}
                    >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Hospital
                      </Typography>
                      {/* Hospital Form Fields */}
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Hospital Name"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Address"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        label="Landmark"
                        variant="outlined"
                        sx={{ marginBottom: 2 }}
                        InputProps={{ style: { borderRadius: 8 } }}
                        InputLabelProps={{ style: { fontWeight: "bold" } }}
                      />
                      {/* End of Hospital Form Fields */}
                      {/* Save button */}
                      <Button
                        variant="contained"
                        onClick={handleSaveHospital}
                        sx={{ marginTop: 2 }}
                      >
                        Save
                      </Button>
                    </Box>
                  </Modal>
                  {/* End of Hospital Form Modal */}
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
