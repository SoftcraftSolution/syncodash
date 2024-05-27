

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 120px)' }}> {/* Adjusted maxHeight */}
      <Card id="delete-account">
        <SoftBox pt={3} px={2}>
          <SoftTypography variant="h6" fontWeight="medium">
            Billing Information For Rides Completed
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1} pb={2} px={2}>
          <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <Bill
              name="Mahesh"
              company="viking burrito"
              vat="123456789"
            />
            <Bill
              name="Ramesh"
              company="stone tech zone"
              vat="123456789"
            />
            <Bill
              name="Suresh"
              company="fiber notion"
              email=""
              vat="123456789"
              noGutter
            />
            {/* Add more Bill components here as needed */}
          </SoftBox>
        </SoftBox>
      </Card>
    </div>
  );
}

export default BillingInformation;
