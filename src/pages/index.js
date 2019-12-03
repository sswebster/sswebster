import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import RecentWork from '../components/RecentWork'
import styles from '../components/base.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretRight)


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <h2 className="recentWorkHeader">Recent Projects</h2>
          <RecentWork data={projects} />
        </div>
      </Layout>
    )    
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }    
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          age
          location
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fixed(
              width: 300
              height: 300
              
            ) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    allContentfulProject {
      edges {
          node {
              projectName
              slug
              technologies
              projectExcerpt {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              projectImage {
                fixed(
                  width: 150
                  height: 150
                  
                ) {
                  ...GatsbyContentfulFixed_tracedSVG
                }
              }
              projectLogo {
                fluid(
                  maxWidth: 225
                  maxHeight: 225                  
                ) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            
          }
      }
    }
  }
  
` 