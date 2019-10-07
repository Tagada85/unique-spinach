/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    <React.Fragment>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-149533256-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-149533256-1');
      </script>
    </React.Fragment>
  ]);

  setPostBodyComponents([
    <React.Fragment>
      <script src={safePrefix("assets/js/plugins.js")} />
      <script src={safePrefix("assets/js/main.js")} />
    </React.Fragment>
  ]);
};
