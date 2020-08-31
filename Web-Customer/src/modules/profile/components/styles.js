import { container, defaultFont, lightBlueColor, defaultColor, secondaryColor } from "../../../theme";
import { makeStyles } from '@material-ui/core/styles';

const profileStyle = {
  container : {
    ...container,
    marginTop: "32px",
  },
  formCustomer : {
    // marginLeft: 50,
		minHeight: "390px !important",
		maxWidth: 700
  },
  formShowSolution : {
    marginTop: 20,
    border: "1px solid #E0E0E0",
    borderRadius: 4,
		padding: "8px 0px 8px 16px",
  },
  subTitle : {
    ...defaultFont,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#333333",
		marginBottom: 20
  },
  titleForm : {
    fontWeight: 500,
    fontSize: 14,
    color: "#333333",
    marginBottom: 4,
  },
  titleSolution : {
    ...defaultFont,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "133.2%",
    textTransform: "uppercase",
    color: "#333333",
  },
  subtitleForm : {
    ...defaultFont,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#333333",
    marginBottom: 4,
  },
  subtitleSolution: {
    ...defaultFont,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#333333",
      },
  disableEdit : {
    backgroundColor: "#EEEEEE",
  },
  titleAlert : {
    ...defaultFont,
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#A7A7A7",
    marginBottom: "5px",
  },
  titleAddLink : {
    fontWeight: 500,
    fontSize: 14,
    color: "#0077FF",
		textTransform: "none",
		marginTop: 30,
		marginBottom: 30,
    backgroundColor: "unset !important",
  },
  btnUpload : {
    ...defaultFont,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#A5A5A5",
    textTransform: "none",
    backgroundColor: "unset !important",
    border: "1px dashed #E0E0E0",
    width: "100%",
  },
  iconResult: {
    "& > svg": {
        color: secondaryColor,
    },
    backgroundColor: "#FFFFFF",
  },
  serviceCheckbox: {
    backgroundColor: "#F2F2F2",
    borderRadius: 4,
    paddingLeft: 16,
    marginRight: 16
  },
  textCheckbox: {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#333333",
  },
  borderSolution : {
    // border: "1px solid #E0E0E0",
    borderRadius: "4px",
    padding: "20px 0px 20px 20px",
  },
  groupButton: {
    marginTop: 27,
    marginBottom: 27,
    borderTop: "1px solid #E0E0E0",
    display: "flex",
    justifyContent: "flex-end",
  },
  designButtonCancel : {
    marginTop: 27,
    marginRight: 16
  },
  designButtonSave : {
    marginTop: 27,
  },
  layoutSearch : {
    // marginLeft: 10,
    // marginRight: 10,
    marginTop: 30,
    background: "#FAFAFA",
    border: "1px solid #DEDEDE",
    boxSizing: "border-box",
    padding: "12px 20px",
    // height: "80px !important",
		// paddingBottom: "0px !important",
  },
  layoutSearchResult : {
    // marginLeft: 10,
    // marginRight: 10,
    marginTop: 8,
    background: "#FAFAFA",
    border: "1px solid #DEDEDE",
    boxSizing: "border-box",
    // paddingLeft: "25px !important",
    // height: "80px !important",
    borderRadius: 4,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 25,
  },
  buttonFilter: {
		fontSize: "14px",
		width: 100,
    backgroundColor: defaultColor,
		padding:8,
   '&:hover': {
        backgroundColor: `${lightBlueColor} !important`,
      }
  },
	clearFilter: {
		fontSize: "14px",
		padding:8,
	},
  nameCustomer : {
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#333333",
  },
  phoneCustomer: {
    color: "#333333",
    display: "flex",
    // paddingRight: 8,
    // borderRight: "1px solid rgba(0, 0, 0, 0.2)",
    '& img': {
      marginRight: 5
    }
  },
  iconSolution : {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    color: "#333333",
    '& img': {
      marginRight: 8
    }
  },
  mailCustomer: {
    // marginLeft: 8,
    color: "#333333",
    display: "flex",
    '& img': {
      marginRight: 5
    }
  },
  nameSolution : {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "133.2%",
    color: "#333333",
    marginLeft: "25px !important",
    marginTop: 18,
  },
  timeRequest : {
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: 14,
		color: "#7C7C7C",
		marginTop: 10
  },
  detailSolution : {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "144%",
    color: "#333333",
    marginLeft: "25px !important"
  },
  cates:{
  //  paddingLeft: 24,
    paddingTop: 13,
    paddingBottom: 24,
    display:'flex',
  },
  firstIcon : {
    fontWeight: 500,
    fontSize: 14,
    color: "#333333",
    '& img' : {
      verticalAlign: "middle",
    },
  },
  secondaryIcon : {
    marginLeft: 61,
    fontWeight: 500,
    fontSize: 14,
    color: "#333333",
    '& img' : {
      verticalAlign: "middle",
    },
  },
  cssPopover : {
		// position:'absolute',
    // top:'10%',
    // left:'10%',
    transition: 'unset !important',
		// backgroundColor:`rgba(0,0,0,0.2)`,
		// display:'block',
		height:'100%',
		overflow:'scroll',
  },
  subInfoSolution : {
    display: "flex"
  },
  dividerSubInfoSolution : {
    borderRight: "1px solid",
    marginRight: 10,
    marginLeft: 10
  },
  layoutCustomerList: {
    background: "white",
    border: "1px solid #DEDEDE",
    boxSizing: "border-box",
    padding: '15px'
  },
  tabSelected: {
    color: "#F79A22 !important",
    fontWeight: 700,
    backgroundColor: 'unset !important',
    borderBottom: '4px solid #F79A22',
    fontSize: '16px'
  },
  formControl: {
  //  margin: theme.spacing(1),
    minWidth: 100,
    border: '1px solid #F79A22',
    borderRadius: 4,
    padding: 4,
    backgroundColor: 'green'
  },
  groupButtonDelele: {
    marginTop: 27
  },
  btnCancel: {
    marginRight: 5
  },
  btnDelete: {
    marginLeft: 5
  },
  imgUpload: {
    '&:hover': {
      backgroundColor: `${lightBlueColor} !important`,
    }
  },
  btnSave: {
    minWidth: 34,
    padding: '6px 6px'
  },
  dropZone: {
    background: '#fff',
    border: '1px dashed #E0E0E0',
    height: 60,
    color: '#A5A5A5',
    fontSize: 13,
  },
  dropzoneParagraphClass: {
    fontSize: 13,
    color: '#A5A5A5'
  }
}

export const makeSelectStyle = makeStyles((theme) => ({
  input: {
    height: 18,
    width: 80,
    color: props => props.color,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: props => `${props.backgroundColor} !important`,
    fontSize: 14,
    padding: '10px 10px 10px 8px',
    fontWeight: 'bold',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      },
	},
  iconSelect: {
    color: props => props.color
  },
 
}))

export default profileStyle;
