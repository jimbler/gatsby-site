import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`nursery`, `application`, `react`]} />
    <h1>Welcome to Cache Valley Nursery!</h1>
    <h2>Coming Spring 2019!</h2>
    <p className="intro-p">Cache Valley Nursery is Northern Utah’s newest source for ornamental trees, shrubs, and perennials. We offer more than 200 varieties, specializing in unusual, hard-to-find, and native selections.</p>
    <p className="intro-p">Our goal is to provide beautiful and unique plants of impeccable quality. We guarantee our plants will brighten your landscape for years to come.</p>
    <p className="intro-p">Here at Cache Valley Nursery, we are dedicated to environmental stewardship.  We believe the local, regional, and global benefits of greener landscapes can be gained one happy customer at a time.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
