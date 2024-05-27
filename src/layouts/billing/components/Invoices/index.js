

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Bill Invoice
        </SoftTypography>
        <SoftButton variant="outlined" color="info" size="small">
          View All
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2024" id="#1" price="Rs 1000" />
          <Invoice date="February, 10, 2024" id="#2" price="Rs 2000" />
          <Invoice date="April, 05, 2024" id="#3" price="Rs 3000" />
          <Invoice date="June, 25, 2023" id="#4" price="Rs 4000" />
          <Invoice date="March, 01, 2024" id="#5" price="Rs 5000" noGutter />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Invoices;
