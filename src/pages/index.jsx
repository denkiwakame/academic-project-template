import React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import Header from '../components/header.jsx';
import Overview from '../components/overview.jsx';
import Video from '../components/video.jsx';
import Body from '../components/body.jsx';
import Footer from '../components/footer.jsx';
import Citation from '../components/citation.jsx';
import SpeakerDeck from '../components/speakerdeck.jsx';
import Projects from '../components/projects.jsx';
import data from '../../template.yaml';

class Template extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={data.title}
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1',
            },
            {
              property: 'og:site_name',
              content: data.organization,
            },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: data.title },
            {
              property: 'og:description',
              content: data.description,
            },
            { property: 'og:image', content: data.image },
            { property: 'og:image:alt', content: data.description },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:url', content: data.url },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            { name: 'twitter:title', content: data.title },
            {
              name: 'twitter:description',
              content: data.description,
            },
            { name: 'twitter:url', content: data.url },
            { name: 'twitter:site', content: data.twitter },
            { name: 'twitter:image:src', content: data.image },
          ]}
        />
        <Header
          title={data.title}
          journal={data.journal}
          conference={data.conference}
          authors={data.authors}
          affiliations={data.affiliations}
          meta={data.meta}
          resources={data.resources}
          theme={data.theme}
        />
        <div className="uk-container uk-container-small">
          <Overview
            abstract={data.abstract}
            teaser={data.teaser}
            description={data.description}
          />
          <Video video={data.resources.video} />
          <SpeakerDeck dataId={data.speakerdeck} />
          <Body body={data.body} />
          <Citation bibtex={data.bibtex} />
          <Projects projects={data.projects} />
        </div>
        <Footer />
      </div>
    );
  }
}

render(<Template />, document.getElementById('root'));
