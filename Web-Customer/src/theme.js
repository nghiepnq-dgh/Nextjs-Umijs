/* eslint-disable no-unused-vars */
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const conatinerFluid = {
  // paddingRight: '15px',
  // paddingLeft: '15px',
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};
const container = {
  ...conatinerFluid,
  "@media (min-width: 360px)": {
    maxWidth: "350px",
  },
  "@media (min-width: 375px)": {
    maxWidth: "360px",
  },
  "@media (min-width: 414px)": {
    maxWidth: "414px",
  },
  "@media (min-width: 480px)": {
    maxWidth: "480px",
  },
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 600px)": {
    maxWidth: "576px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 800px)": {
    maxWidth: "780px",
  },
  "@media (min-width: 960px)": {
    maxWidth: "940px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1190px",
  },
  "@media (min-width: 1280px)": {
    maxWidth: "1190px",
  },
  "@media (min-width: 1366px)": {
    maxWidth: "1280px",
  },
  "@media (min-width: 1440px)": {
    maxWidth: "1280px",
  },
  "@media (min-width: 1600px)": {
    maxWidth: "1366px",
  },
  "@media (min-width: 1680px)": {
    maxWidth: "1366px",
  },
  "@media (min-width: 1920px)": {
    maxWidth: "1440px",
  },
};

const boxShadow = {
  boxShadow:
    "0px 3px 5px rgba(0, 0, 0, 0.12), 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

// COLORS //
const defaultColor = "#ffffff";
const primaryColor = "#4762AD";
const secondaryColor = "#6CCFF6";
const warningColor = "#ffad33";
const dangerColor = "#f44336";
const successColor = "#00acc1";
const infoColor = "#0053b3";
const errorColor = "#e60000";

const roseColor = "#e91e63";
const grayColor = "#999999";
const blackColor = "#000000";
const darkBrownColor = "#333333";
const lightBlueColor = "#DCECFF";
const lightGreyColor = "#F2F2F2";
const whiteColor = "#ffffff";

const iconBlueColor = "#13B4FF";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)",
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow,
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow,
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow,
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow,
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow,
};
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont,
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
};

const cardTitle = {
  ...title,
  fontSize: 18,
  marginTop: ".625rem",
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
};

export {
  //variables
  drawerWidth,
  transition,
  container,
  conatinerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  errorColor,
  roseColor,
  grayColor,
  secondaryColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  defaultColor,
  lightBlueColor,
  whiteColor,
  lightGreyColor,
  darkBrownColor,
  iconBlueColor,
};

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: "#bf6b00",
      light: "#ffcb57",
      contrastText: "#fff",
    },
    secondary: {
      main: secondaryColor,
      dark: "#0081bd",
      light: "#66e2ff",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: warningColor,
    },
    info: {
      main: infoColor,
    },
    success: {
      main: successColor,
    },
    normal: {
      main: "#fff",
    },
    gray: {
      main: "#F2F2F2",
    },
    background: {
      default: "#fff",
      primary: primaryColor,
      secondary: secondaryColor,
      paper: "#fff",
    },
    text: {
      primary: "#333",
    },
  },
  overrides: {},
});

export default responsiveFontSizes(theme);
