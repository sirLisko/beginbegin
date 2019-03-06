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
      <Header />
      <Hero {...site} />
      <div id="projects" className="box box_1">
        <div>
          <div>{site.description}</div>
        </div>
      </div>
      <Reviews reviews={reviews[0].node.snippet} />
      <Shows shows={shows.map(s => s.node)} />
      <Cast cast={cast[0].node} />
      <Contacts />
    </>
  );
};

export default IndexPage;
