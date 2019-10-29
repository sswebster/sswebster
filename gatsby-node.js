const Promise = require('bluebird')
const path = require('path')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const singleProject = path.resolve('./src/templates/project.js')
    resolve(
      graphql(
        `
          {
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const projects = result.data.allContentfulProject.edges
        projects.forEach((project, index) => {
          createPage({
            path: `/projects/${project.node.slug}/`,
            component: singleProject,
            context: {
              slug: project.node.slug
            },
          })
        })
      })
    )
  })
}