import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact, safePrefix } from "../utils";

const Work = props => {
  return (
    <Layout {...props}>
      <article className="post page post-full">
        <header className="post-header">
          <h1 className="post-title underline">
            {_.get(props, "pageContext.frontmatter.title")}
          </h1>
        </header>
        {_.get(props, "pageContext.frontmatter.subtitle") && (
          <div className="post-subtitle">
            {htmlToReact(_.get(props, "pageContext.frontmatter.subtitle"))}
          </div>
        )}
        <div className="post-content">My work will be uploaded soon!</div>
      </article>
    </Layout>
  );
};

export default Work;
