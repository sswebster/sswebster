import React from 'react'
import Img from 'gatsby-image'
import {Row, Col} from 'react-bootstrap'

export default ({ data }) => (
    <div className="recentWorkContainer">
        <Row>
      {data.map(({node}) => {
                return (
                  <Col sm="true">
                      <Img fixed={node.projectLogo.fixed} />
                  </Col>
                )
              })}
            </Row>
    </div>
  )