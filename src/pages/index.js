import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import MeName from '../components/me-name';
import SEO from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./pages-styles.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="image-name-container">
        {/* <div>
          <MeName />
        </div> */}
        {/* <Image style="me-image" /> */}
        {/* <img className="me-image" src="/assets/me.png" alt="it's me" /> */}
      </div>
    </Layout>
  );
}

export default IndexPage;
