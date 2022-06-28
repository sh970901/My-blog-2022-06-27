import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="HomePage">
      <h1>Home Page</h1>
      <StaticImage
        alt=""
        src="../images/dog.jpg"
      ></StaticImage>
      </Layout>
      
    </>
  );
};

export default IndexPage;
