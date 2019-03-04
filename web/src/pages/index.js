import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <div className="hero">
        <h1>
          Feast<span>a play in one cooking</span>
        </h1>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="box box_1">
        <div>
          <div>
            From the end of the 16th and into the 17th century, William Shakespeare wrote 37 plays
            with a staggering 1,191 individual characters: 147 women and 1,044 men. This is one
            story about 6 of those women, from different parts of the world, and even different
            times. Shakespeare, little did he know, that centuries later, his characters will come
            together, off the page once more. But this time just for dinner.
          </div>
        </div>
      </div>
      <div className="box box_2">
        <div>‘An almost magical atmosphere’</div>
        <div className="box__cont--alt">
          ‘They stirred all the emotions, doubts and fears just like ingredients in a pot.’
        </div>
        <div>
          ‘The performance gives an honest depiction of the true complexity that lies behind female
          relationships.’
        </div>
      </div>
      <div className="box box_3">
        <div>
          <h2>Past shows</h2>
          <div>
            Voila! European Theatre Festival<span>London, 2017</span>
          </div>
          <div>
            The International Shakespeare Festival<span>Gdansk, Poland, 2017</span>
          </div>
          {/*
          <div>
            //{' '}
            <span>
              // It has also been translated into Polish, and the first rehearsed reading of it,
              took // place in November 2018, at the Wanda Siemaskowa Theatre in Rzeszow. directed
              by // Magdalena Mosteanu. //{' '}
            </span>

          </div>*/}
        </div>
      </div>
      <div className="box box_4">
        <div>
          <h2>Next shows</h2>
          <div>
            Romanian Cultural Centre<span>London, 11th-12th April 2019</span>
          </div>
          <div>
            York International Shakespeare Festival<span>York, May 2017 - TBA</span>
          </div>
        </div>
      </div>
      <div className="box box_6">
        <div>
          <h2>Production</h2>
          <div>
            <span>Writer</span>Olivia Negrean
          </div>
          <div>
            <span>Director</span>Philip Parr
          </div>
          <div>
            <span>Costumes</span>Rachel Cole – Wilkin
          </div>
        </div>
      </div>
      <div className="box_5">
        <div>
          <h2>Cast</h2>
          <div>
            <div>
              <span>Isabella</span>Sara Barison
            </div>
            <div>
              <span>Lady Anne</span>Charlie Coletta
            </div>
            <div>
              <span>Emilia</span>Lucy Ford
            </div>
            <div>
              <span>Imogen</span>Hannah Lucas
            </div>
            <div>
              <span>Ophelia</span>Olivia Negrean
            </div>
            <div>
              <span>Lady Macbeth</span>Marie Rabe
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
