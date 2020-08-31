import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import { ToastContainer } from "react-nextjs-toast";

class HeaderLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        {/* <Footer /> */}
        <ToastContainer />
      </>
    );
  }
}

export default HeaderLayout;
