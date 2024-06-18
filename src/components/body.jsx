import React from 'react';
import { render } from 'react-dom';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

const renderer = new marked.Renderer();
renderer.table = (header, body) => {
  return `<div class="uk-overflow-auto"><table class="uk-table uk-table-small uk-text-small uk-table-divider"> ${header} ${body} </table></div>`;
};

marked.use(markedKatex({ throwOnError: false }));
marked.use({ renderer: renderer });

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.title)
      return (
        <h2 className="uk-margin-top uk-heading-line uk-text-center">
          {this.props.title}
        </h2>
      );
    if (this.props.text)
      return (
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(this.props.text) }}
        />
      );
    if (this.props.image)
      return (
        <img
          src={require('../images/' + this.props.image)}
          className="uk-align-center uk-responsive-width"
          alt=""
        />
      );
    return null;
  }
}

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.method ? (
      <div className="uk-section">
        {this.props.method.map((subsection, idx) => {
          return (
            <div key={'subsection-' + idx}>
              <Content title={subsection.title} />
              <Content image={subsection.image} />
              <Content text={subsection.text} />
            </div>
          );
        })}
      </div>
    ) : null;
  }
}
