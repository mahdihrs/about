/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Menu from './menu';
// import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          name,
          description
        }
      }
    }
  `
  )

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.name} /> */}
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          height: '100vh',
          backgroundImage: `${window.location.pathname === '/' && "url('/assets/me-lofi.jpeg')"}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100vw'
        }}
      >
        <Menu />
        <main>
          {children}
        </main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
