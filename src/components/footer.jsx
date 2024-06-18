import React from 'react';
import { render } from 'react-dom';
import { FaCreativeCommons } from 'react-icons/fa';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-text-center uk-text-small">
        <span>
          This template is provided under the
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
          >
            {' '}
            Attribution-ShareAlike 4.0 International (CC BY-SA 4.0){' '}
          </a>
          license.
        </span>
        <br />
        <span>
          You are free to use and modify the code in your project as long as you
          include a link to this{' '}
          <a
            href="https://github.com/denkiwakame/academic-project-template"
            target="_blank"
          >
            GitHub repository
          </a>{' '}
          in your footer.
        </span>
        <p>
          powered by <FaCreativeCommons />{' '}
          <a
            href="https://github.com/denkiwakame/academic-project-template"
            target="_blank"
          >
            {' '}
            Academic Project Page Template{' '}
          </a>
        </p>
      </div>
    );
  }
}
