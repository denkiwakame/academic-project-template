import React from 'react';
import { render } from 'react-dom';

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
