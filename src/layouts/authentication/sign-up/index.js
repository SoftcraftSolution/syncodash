import React, { useState } from "react";
import axios from "axios"; // Assuming you're using Axios for API calls

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/signbackground.jpg";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSetAgremment = () => setAgremment(!agreement);

  const handleSignUp = async () => {
    try {
      // Make POST request to your API endpoint
      const response = await axios.post("https://ambulance-booking-backend.vercel.app/user/signup", formData);
      // Handle successful response
      console.log("Registration successful:", response.data);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      // Set registration success message
      setRegistrationSuccess(true);
    } catch (error) {
      // Handle error
      console.error("Registration failed:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <BasicLayout
      title="Welcome!"
      description="Get Yourself Registered Here!"
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox
                checked={agreement}
                onChange={handleSetAgremment}
              />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                fullWidth
                onClick={handleSignUp}
              >
                Sign Up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign In
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            {registrationSuccess && (
              <SoftBox mt={3} textAlign="center">
                <SoftTypography variant="h6" color="success" fontWeight="bold">
                  You have been registered successfully!
                </SoftTypography>
              </SoftBox>
            )}
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
