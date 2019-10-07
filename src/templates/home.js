import React from "react";
import _ from "lodash";
import { safePrefix } from "../utils";
import components, { Layout } from "../components/index";

export default class Home extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <article className="post page post-full">
          <header className="post-header">
            <h1 className="post-title underline">
              {_.get(this.props, "pageContext.frontmatter.title")}
            </h1>
          </header>
          <div className="post-content">
            <img
              className="avatar"
              src={safePrefix(
                _.get(this.props, "pageContext.site.data.author.avatar")
              )}
              alt={_.get(this.props, "pageContext.frontmatter.title")}
            />
            <p>
              Hello everyone. My name is Damien Cosset. I am a French web
              developer. Since 2016, I work as a freelancer with Javascript and
              Java technologies. I enjoy working on tools that empower people
              and organisations. I value the human aspect of a project a lot.
              Outside of coding, I enjoy reading, playing football and writing
              about technology.
            </p>
            <p>
              If you want to chat, feel free to send me an email at
              damcossetfreelance@gmail.com. You can also consult my resume if
              that interests you ;)
            </p>
          </div>
        </article>
        {_.map(
          _.get(this.props, "pageContext.frontmatter.sections"),
          (section, section_idx) => {
            let GetSectionComponent = components[_.get(section, "component")];
            return (
              <GetSectionComponent
                key={section_idx}
                {...this.props}
                section={section}
                site={this.props.pageContext.site}
              />
            );
          }
        )}
      </Layout>
    );
  }
}
