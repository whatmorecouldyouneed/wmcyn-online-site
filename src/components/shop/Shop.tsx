import React from 'react';
// import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

// Shopify API Client Setup
const client = new ApolloClient({
  uri: 'https://your-shopify-store.myshopify.com/api/2023-07/graphql.json',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'your-access-token-here',
  },
  cache: new InMemoryCache(),
});

// GraphQL Query to get products
const GET_PRODUCTS = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

const Shop = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Shop Products</h1>
      <div className="shop-grid">
        {data.products.edges.map(({ node }) => (
          <div key={node.id} className="product-card">
            <img
              src={node.images.edges[0].node.originalSrc}
              alt={node.images.edges[0].node.altText}
            />
            <h2>{node.title}</h2>
            <p>{node.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
