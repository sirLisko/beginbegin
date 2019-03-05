import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';

import Shows from '../components/Shows';
import Reviews from '../components/Reviews';
import Cast from '../components/Cast';
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
  const { allSanityShow: { edges: shows } = {} } = data || {};
  const { allSanityReview: { edges: reviews } = {} } = data || {};
  const { allSanityProduction: { edges: cast } = {} } = data || {};
  return (
    <>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="hero">
        <h1>
          {site.title}
          <span>{site.subtitle}</span>
        </h1>
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="box box_1">
        <div>
          <div>{site.description}</div>
        </div>
      </div>
      <Reviews reviews={reviews[0].node.snippet} />
      <Shows shows={shows.map(s => s.node)} />
      <Cast cast={cast[0].node} />
    </>
  );
};

export default IndexPage;
