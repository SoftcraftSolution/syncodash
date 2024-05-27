import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";

function Completion({ value, color }) {
  return (
    <SoftBox display="flex" alignItems="center">
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SoftTypography>
      <SoftBox width="8rem">
        <SoftProgress value={value} color={color} variant="gradient" label={false} />
      </SoftBox>
    </SoftBox>
  );
}

Completion.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const ProjectsTable = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <SoftBox mb={2}>
        {sections.map((section, index) => (
          <Button
            key={index}
            variant={activeSection === section ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSectionClick(section)}
            style={{ marginRight: 10 }}
          >
            {section}
          </Button>
        ))}
      </SoftBox>
      {activeSection && (
        <table>
          <thead>
            <tr>
              <th>Booking</th>
              <th>Status</th>
              <th>Urgency</th>
            </tr>
          </thead>
          <tbody>
            {projectsTableData.rows.map((row, index) => (
              <React.Fragment key={index}>
                {row[section] && (
                  <tr>
                    <td>{row.Booking}</td>
                    <td>{row.status}</td>
                    <td>{row.Urgency}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

ProjectsTable.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectsTable;
