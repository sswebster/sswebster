import React from 'react'
import Img from 'gatsby-image'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

import styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <Row>
    <Col>
      <h2 className={styles.heroHeadline}>{data.name}</h2>
      <p className={styles.heroTitle}>{data.title}</p>
      <p className={styles.heroTitle}>Age: {data.age}</p>
      <p className={styles.heroTitle}>Location: {data.location}</p>
    </Col>
    <Col>
    <Img className={styles.heroImage} alt={data.name} fixed={data.heroImage.fixed} /></Col>
    <Col>
      <h3>About Me</h3>
      <p>{data.shortBio.shortBio}</p>
    </Col>
    </Row>
  </div>
)
