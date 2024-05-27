import { useEffect } from "react";
import { useSoftUIController, setDirection } from "context";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import BuildByDevelopers from "layouts/rtl/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/rtl/components/WorkWithTheRockets";
import Projects from "layouts/rtl/components/Projects";
import OrderOverview from "layouts/rtl/components/OrderOverview";

import reportsBarChartData from "layouts/rtl/data/reportsBarChartData";
import gradientLineChartData from "layouts/rtl/data/gradientLineChartData";

import typography from "assets/theme/base/typography"; // Import the typography object

function RTL() {
  const [, dispatch] = useSoftUIController();
  const { size } = typography; // Destructure the size property from the typography object

  // Changing the direction to ltr
  useEffect(() => {
    setDirection(dispatch, "ltr");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3} xl={3}> {/* Adjust the width for different screen sizes */}
              <MiniStatisticsCard
                title={{ text: "Present" }}
                count="15"
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: "people" }} // Change the icon to "people"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}> {/* Adjust the width for different screen sizes */}
              <MiniStatisticsCard
                title={{ text: "Absent" }}
                count="5"
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: "person_remove" }} // Change the icon to "person_remove"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}> {/* Adjust the width for different screen sizes */}
              <MiniStatisticsCard
                title={{ text: "On-Leave" }}
                count="2"
                percentage={{ color: "error", text: "" }}
                icon={{ color: "info", component: "emoji_people" }} // Change the icon to "emoji_people"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}> {/* Adjust the width for different screen sizes */}
              <MiniStatisticsCard
                title={{ text: "Total" }}
                count="25"
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: "groups" }} // Change the icon to "groups"
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}> {/* Increase width for this Grid item */}
              <ReportsBarChart
                title="Drivers"
                description={
                  <>
                     Attendance
                  </>
                }
                chart={reportsBarChartData.chart}
                items={reportsBarChartData.items}
              />
            </Grid>
           
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
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

export default RTL;
