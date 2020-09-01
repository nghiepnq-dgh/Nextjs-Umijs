import React, { Fragment } from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import SEO from "../site-config.js";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };
    return props;
  }
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            href="http://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          />
          {/* <link rel="stylesheet" href="/static/robotics/css/linearicons.css" />
          <link
            rel="stylesheet"
            href="/static/robotics/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="/static/robotics/css/bootstrap.css" />
          <link
            rel="stylesheet"
            href="/static/robotics/css/magnific-popup.css"
          />
          <link rel="stylesheet" href="/static/robotics/css/nice-select.css" />
          <link rel="stylesheet" href="/static/robotics/css/hexagons.min.css" />
          <link rel="stylesheet" href="/static/robotics/css/animate.min.css" />
          <link rel="stylesheet" href="/static/robotics/css/owl.carousel.css" /> */}
          {/* <!-- main css --> */}
          {/* <link rel="stylesheet" href="/static/robotics/css/main.css" />
          <link rel="stylesheet" href="/static/robotics/css/product-card.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }
                    @media (max-width:767px){
                        .post_slider_inner.owl-carousel > .item {
                            width: 100%
                        }
                        .post_slider_inner.owl-carousel > .item:not(:first-of-type) {
                            display: none;
                        }
                    }`,
            }}
          ></style>

          {/* <script src="/static/robotics/js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="/static/robotics/js/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="/static/robotics/js/vendor/bootstrap.min.js"></script>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
                    <script src="/static/robotics/js/easing.min.js"></script>
                    <script src="/static/robotics/js/hoverIntent.js"></script>
                    <script src="/static/robotics/js/superfish.min.js"></script>
                    <script src="/static/robotics/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/static/robotics/js/jquery.magnific-popup.min.js"></script>
                    <script src="/static/robotics/js/owl.carousel.min.js"></script>
                    <script src="/static/robotics/js/hexagons.min.js"></script>
                    <script src="/static/robotics/js/jquery.nice-select.min.js"></script>
                    <script src="/static/robotics/js/jquery.counterup.min.js"></script>
                    <script src="/static/robotics/js/waypoints.min.js"></script>
                    <script src="/static/robotics/js/mail-script.js"></script>
                    <script src="/static/robotics/js/product-detail.js"></script>
                    <script src="/static/robotics/js/main.js"></script> */}
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (WrappedComponent) => (props) =>
        sheets.collect(<WrappedComponent {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>
    ),
  };
};

export default MyDocument;
