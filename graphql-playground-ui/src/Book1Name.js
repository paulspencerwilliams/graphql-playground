

import React from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Book1Name = () => (
    <Query
        query={gql`
      {
        bookById(id: "book-1") {
          id
          name
          author {
          id
          firstName
          lastName
          }
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return <div>{data.bookById.author.firstName} {data.bookById.author.lastName}</div>
        }}
    </Query>
);

export default Book1Name