import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/download.png";
import team3 from "assets/images/download.png";
import team4 from "assets/images/download.png";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Add prop type validation for Author
Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

// Add prop type validation for Function
Function.propTypes = {
  job: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
};

// Hospitals section
function Hospital({ name, location, beds }) {
  const [status, setStatus] = useState("offline");

  const toggleStatus = () => {
    setStatus(status === "offline" ? "online" : "offline");
  };

  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
       
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>

      </SoftBox>
      <SoftTypography variant="caption" color="secondary" ml={2}>
        
      </SoftTypography>
      <SoftBadge
        variant="gradient"
        badgeContent={status}
        color={status === "online" ? "success" : "secondary"}
        size="xs"
        container
        onClick={toggleStatus} // Add onClick handler to toggle status
      />
    </SoftBox>
  );
}

// Add prop type validation for Hospital
Hospital.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  beds: PropTypes.number.isRequired,
};

const authorsTableData = {
  columns: [
    { name: "Name", align: "left" },
    { name: "Hospital", align: "left" },
    { name: "status", align: "center" },
    { name: "License", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      Name: <Author image={team2} name="Ravi" email="ravi@gmail.com" />,
      Hospital: <Function job="KEM Hospital" org="" />,
      status: <Hospital location="Mumbai"/>,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          01
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      Name: <Author image={team3} name="Dhruv" email="dhruv@gmail.com" />,
      Hospital: <Function job="Leelavati Hospital" />,
      status: <Hospital location="Mumbai" />,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          02
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      Name: <Author image={team4} name="Adnan" email="adnan@gmail.com" />,
      Hospital: <Function job="Tata Hospital" org="" />,
      status: <Hospital location="Mumbai"/>,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          03
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      Name: <Author image={team3} name="Shahid" email="shahid@gmail.com" />,
      Hospital: <Function job="VVMC Hospital" org="" />,
      status: <Hospital location="Mumbai" />,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      Name: <Author image={team2} name="Sarvesh" email="sarvesh@gmail.com" />,
      Hospital: <Function job="Life Line Hospital" org="" />,
      status: <Hospital location="Mumbai"  />,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          05
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      Name: <Author image={team4} name="Hashim" email="Hashim@gmail.com" />,
      Hospital: <Function job="Ozone Hospital" org="" />,
      status: <Hospital location="Mumbai" />,
      License: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          06
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
