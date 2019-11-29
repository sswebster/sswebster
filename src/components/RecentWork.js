import React from 'react'
import Img from 'gatsby-image'
import {Row, Col} from 'react-bootstrap'

import styles from './recent-work.module.scss'

export default ({ data }) => (
    <div className="recentWorkContainer">
        <Row className={styles.row}>
      {data.map(({node}) => {
                return (
                  <Col lg="4" md="4" className={styles.img}>
                      <Img className={styles.projectLogo} fixed={node.projectLogo.fixed} />
                  </Col>
                )
              })}
            </Row>
    </div>
  )   