import React, { useState } from "react";
import SettingPage from "./setting";
import GeneralInfo from "./generalInfo";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Typography, Box, withWidth } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box style={{ marginLeft: "0px", marginTop: "-46px" }}>{children}</Box>
      )}
    </Typography>
  );
}

function showTab(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  ...styles,
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
  },
  tabs: {
    borderRight: "1px solid #6dcef5",
    "& .MuiTabs-scroller": {
      "& .MuiTabs-flexContainerVertical": {
        "& .MuiButtonBase-root": {
          "& .MuiTab-wrapper": {
            display: "flex !important",
            flexDirection: "row !important",
            justifyContent: "flex-start !important",
            "& .MuiSvgIcon-root": {
              marginRight: 10,
            },
          },
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "#6dcef5",
        },
        "& .Mui-selected": {
          border: "none",
          outline: "none",
        },
      },
    },
  },
}));

const ProfileCustomerPortal = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
      >
        {value === index && (
          <Box style={{ margin: "10px 0 0 10px" }}>{children}</Box>
        )}
      </Typography>
    );
  }

  function showTab(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "130px 0 50px 0",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <div style={{ width: "20%" }}>
        <Tabs
          className={classes.tabs}
          orientation={"vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          style={{ borderRight: "1px  solid #DDDDDD", flexBasis: "unset" }}
        >
          <Tab
            icon={<AssignmentIndIcon />}
            label="General Information"
            {...showTab(0)}
          />
          <Tab icon={<SettingsIcon />} label="Setting" {...showTab(1)} />
        </Tabs>
      </div>
      <div style={{ width: "80%" }}>
        <TabPanel value={value} index={0}>
          <GeneralInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SettingPage />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProfileCustomerPortal;
