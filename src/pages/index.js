import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


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
          <div className="wrapper">
            <h2 className="section-headline">Recent work</h2>
            <ul className="article-list">
                {projects.map(({ node }) => {
                return (
                    <li key={node.slug}>
                    <h2><a href={`/projects/${node.slug}`}>{node.slug}</a></h2>
                    </li>
                )
                })}
            </ul>
          </div>
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
            
          }
      }
    }
  }
  
`