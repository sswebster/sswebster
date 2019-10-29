import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default () => (
  <Navbar bg="dark" expand="md">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className={styles.mainNav}>
      <Nav.Link className={styles.navigationItem}><Link to="/">Home</Link></Nav.Link>
      <Nav.Link className={styles.navigationItem}><Link to="/resume/">Resume</Link></Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
)
