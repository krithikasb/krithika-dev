import React from "react"
import { Link } from "gatsby"

import styles from "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="main-header">
          <Link className="header-link-home" to={`/`}>
            {title}
          </Link>
          <nav className="main-nav">
            <Link
              className={`${
                location.pathname === "/#projects" ? "selected" : ""
              } header-link-home`}
              to="/#projects"
            >
              {"Projects"}
            </Link>
            <Link
              className={`${
                location.pathname === "/#posts" ? "selected" : ""
              } header-link-home`}
              to="/#posts"
            >
              {"Posts"}
            </Link>
            <Link
              className={`${
                location.pathname === "/#videos" ? "selected" : ""
              } header-link-home`}
              to="/#videos"
            >
              {"Videos"}
            </Link>
          </nav>
        </div>
      )
    } else {
      header = (
        <div className="main-header-left">
          <Link className="header-link-home" to={`/`}>
            {title}
          </Link>
        </div>
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
