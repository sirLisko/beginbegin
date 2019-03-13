import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';

import Hero from '../components/Hero';
import Header from '../components/Header';
import Shows from '../components/Shows';
import Reviews from '../components/Reviews';
import Cast from '../components/Cast';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

import { nextShow } from '../helpers/shows';
import '../styles/layout.css';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
    }
    allSanityShow {
      edges {
        node {
          title
          when
          where
          startedAt
        }
      }
    }
    allSanityReview {
      edges {
        node {
          snippet
        }
      }
    }
    allSanityProduction {
      edges {
        node {
          writer
          director
          costumes
          cast
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const site = (data || {}).site;
  const { allSanityShow: { edges: showsNode } = {} } = data || {};
  const { allSanityReview: { edges: reviews } = {} } = data || {};
  const { allSanityProduction: { edges: cast } = {} } = data || {};
  const shows = showsNode.map(s => s.node);

  return (
    <>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Header />
      <Hero {...site} nextShow={nextShow(shows)} />
      <div id="projects" className="box box_1">
        <div>
          <div>{site.description}</div>
        </div>
      </div>
      <Reviews reviews={reviews[0].node.snippet} />
      <Shows shows={shows} />
      <Cast cast={cast[0].node} />
      <div id="about" className="box box_9">
        <div>
        <h2>About Us</h2>
          <div  className="box_9__text">
          <p>Charlie and Olivia met whilst training at the Actors Class. We clicked. We want to make theatre together. Join us. Follow us. Email us. Get in touch.</p>

          <p>One day at the Nash Olivia came in with a great Wordsworth quote she’d read: 'To begin, begin' . That would make a great name for our company, replied Charlie. And so our partnership was born.</p>
          
          <p>begin:begin is all about collaboration with: theatre practitioners, artists, creatives, performers, movers, shakers, storytellers, writers, directors, producers and anyone with a creative streak who has a brilliant idea and the urge to try and fail and fail better.</p>
          
          <p>Our first play Feast, written by Olivia has a cast of six women of five different nationalities. We love that cast. Feast is our beginning. Feast is a girl gang with a brilliant director who supported us wherever we went. We had no money and yet performed on the roof of the Shakespeare Theatre in Gdansk. Look it up. It's beautiful.</p>
          
          <p>We want to represent the world we live in. In all its glory and all its imperfections.</p>
          
          <p>We believe in equality. We believe in hard work. We believe in ourselves.</p>
          
          <p>We believe in the power of theatre to inspire.</p>
          
          <p>We are open.</p>
          
          <p>We have begun.</p></div>
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default IndexPage;
