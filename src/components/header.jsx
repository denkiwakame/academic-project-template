import React from 'react';
import Authors from '../components/authors.jsx';
import { render } from 'react-dom';
import { FaSquareGithub, FaYoutube, FaFilePdf } from 'react-icons/fa6';
import { SiArxiv } from 'react-icons/si';

const HuggingFace = ({ size }) => (
  <span
    role="img"
    aria-label="Hugging Face"
    aria-hidden="false"
    style={{ fontSize: '1.3em' }} // 任意のスタイルを適用
  >
    🤗
  </span>
);

class ResourceBtn extends React.Component {
  constructor(props) {
    super(props);
    this.icons = {
      paper: FaFilePdf,
      arxiv: SiArxiv,
      code: FaSquareGithub,
      video: FaYoutube,
      huggingface: HuggingFace,
    };
  }
  render() {
    if (!this.props.url) return null;
    const aClass =
      this.props.title == 'paper'
        ? `uk-button uk-button-text`
        : `uk-button uk-button-text uk-margin-medium-left`; // FIXME
    const FaIcon = this.icons[this.props.title];
    return (
      <>
        <p className={aClass} href={this.props.url} target="_blank">
          <FaIcon size="2em" />
          <span className="uk-margin-small-left uk-margin-small-right uk-text-emphasis uk-text-bolder">
            {this.props.title}
          </span>
        </p>
      </>
    );
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleClass = `uk-${
      this.props.title.length > 15 ? 'h2' : 'h1'
    } uk-text-primary`;
    return (
      <>
        <div className="uk-cover-container uk-background-secondary">
          <div className="uk-container uk-container-small uk-section">
            <div className="uk-text-center uk-text-bold">
              <p className={titleClass}>{this.props.title}</p>
            </div>
            <Authors
              authors={this.props.authors}
              affiliations={this.props.affiliations}
              meta={this.props.meta}
            />
            <div className="uk-flex uk-flex-center uk-margin-top">
              {Object.keys(this.props.resources).map((key) => (
                <ResourceBtn
                  url={this.props.resources[key]}
                  title={key}
                  key={'header-' + key}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
