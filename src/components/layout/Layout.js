import { Fragment } from "react";
import Footer from "../layout/Footer";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.pageContainer}>
        <div className={classes.contentWrap}>
          <main className={classes.main}>{props.children}</main>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
