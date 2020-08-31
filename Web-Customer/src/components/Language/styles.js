import { container, defaultFont } from "./../../theme";

const topHeaderStyle = {
    topHeader : {
        width: "auto",
        height: "32px",
        backgroundColor: "#333333",
        paddingRight: '146px',
      },
    largeFooter : {
        ...container,
				paddingTop: "5px",
				textAlign: 'right',
    },
    textRightTopFooter : {
        ...defaultFont,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "14px",
        color: "#FFFFFF",
        backgroundColor: "#333333",
        border: "none",
        textDecoration: "none",
        marginLeft: "40px",
        '&:hover':{
            cursor:'pointer'
        }
    }
}
export default topHeaderStyle
