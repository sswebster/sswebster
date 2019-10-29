import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.scss'

class ProjectTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.projectName} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.projectImage.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.projectName}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.projectDescription.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  } 
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      projectName
      slug
      projectImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      projectDescription {
        childMarkdownRemark {
            html
          }
      }
    }
  }
`
