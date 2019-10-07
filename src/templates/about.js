import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact, safePrefix } from "../utils";

const About = props => {
  console.log(props);
  return (
    <Layout {...props}>
      <article className="post page post-full">
        <header className="post-header">
          <h1 className="post-title underline">
            {_.get(props, "pageContext.frontmatter.title")}
          </h1>
        </header>
        <img
          src={safePrefix(_.get(props, "pageContext.site.data.author.avatar"))}
          alt={_.get(props, "pageContext.frontmatter.title")}
        />
      </article>
    </Layout>
  );
};

export default About;
