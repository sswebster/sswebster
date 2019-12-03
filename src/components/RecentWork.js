import React from 'react'
import Img from 'gatsby-image'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import styles from './recent-work.module.scss'

export default ({ data }) => (
    <div className="recentWorkContainer">
        <Row className={styles.row}>
      {data.map(({node}) => {
                return (
                  <Col lg="4" md="4" className={styles.img}>
                      <Img className={styles.projectLogo} fluid={node.projectLogo.fluid} />
                      <h2 className={styles.projectHeader}>{node.projectName}</h2>
                      <div className={styles.techContainer}>
                        <FontAwesomeIcon icon="caret-right" />
                      {node.technologies.map((tech) =>
                        <span className={styles.tech}>{tech}</span>
                      )
                      }
                      <p>{node.projectExcerpt.childMarkdownRemark.rawMarkdownBody}</p>
                      </div>
                  </Col>
                )
              })}
            </Row>
    </div>
  )   