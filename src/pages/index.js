import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'

function formatIndex(index) {
  const number = index + 1;
  return number > 9 ? number : `0${number}`;
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <Slider posts={posts}>
                {posts
                  .map(({ node: post }, index) => (
                    <div
                      className="content"
                      style={{ border: '1px solid #eaecee', padding: '2em 4em', height: '100%' }}
                      key={post.id}
                    >
                      <img className="cover-image" src={post.frontmatter.cover} />
                      <p>
                        <strong>{formatIndex(index)} </strong>
                        <Link className="has-text-primary wrapword" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </p>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            cover
          }
        }
      }
    }
  }
`
