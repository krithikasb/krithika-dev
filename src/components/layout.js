import React from "react"
import { Link } from "gatsby"

import styles from './layout.css';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      )
    } else {
      header = (
        <Link className="header-link-home" to={`/`}>
          {title}
        </Link>
      )
    }
    return (
      <div className="global-wrapper">
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
