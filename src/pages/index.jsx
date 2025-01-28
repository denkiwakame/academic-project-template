import React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import Header from '@/components/header';
import Overview from '@/components/overview';
import Video from '@/components/video';
import Body from '@/components/body';
import Footer from '@/components/footer';
import Citation from '@/components/citation';
import SpeakerDeck from '@/components/speakerdeck';
import Projects from '@/components/projects';
import data from '../../template.yaml';

class Template extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:url" content={data.url} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={data.image} />
          <meta property="og:image:alt" content={data.description} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content={data.organization} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={data.url} />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image:src" content={data.image} />
          <meta name="twitter:site" content={data.twitter} />
        </Helmet>
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
