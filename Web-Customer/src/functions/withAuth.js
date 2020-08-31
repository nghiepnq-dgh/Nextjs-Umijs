/* eslint-disable no-undef */
import React from "react";
import Router from "next/router";
import { isLogined } from "./../modules/auth/handlers";
import PageLoading from "./../components/PageLoading";

export default (AuthComponent) => {
  return class Authenticated extends React.Component {
    static async getInitialProps(ctx) {
      let userAgent;
      if (process.browser) {
        userAgent = navigator.userAgent;
      } else {
        userAgent = ctx.req.headers["user-agent"];
      }

      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        AuthComponent.getInitialProps &&
        (await AuthComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps, userAgent };
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      if (!isLogined()) {
        Router.push("/login");
      }
      this.setState({ isLoading: false });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            PageLoading.show()
          ) : (
            <AuthComponent {...this.props} />
          )}
        </div>
      );
    }
  };
};
