import React from "react";
import _ from "lodash";

import { htmlToReact, Link } from "../utils";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="colophon" className="site-footer">
        <p className="site-info">
          {htmlToReact(
            _.get(this.props, "pageContext.site.siteMetadata.footer.content")
          )}
          &nbsp;
        </p>
        <Link id="to-top" className="to-top" to="#page">
          <span className="icon-arrow-up" aria-hidden="true" />
          <span className="screen-reader-text">Back to top</span>
        </Link>
      </footer>
    );
  }
}
