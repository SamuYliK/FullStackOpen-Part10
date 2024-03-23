import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_INFO}
  query {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
`;

export const CHECK_IF_SIGNED_IN = gql`
  query {
    me {
      id
      username
    }
  }
`