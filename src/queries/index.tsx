import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query($name: String!){
    search(query: $name, type: REPOSITORY, first: 10) {

      repositoryCount
      nodes {
          ... on Repository {
            id
            name
            description
            stargazers {
              totalCount
            }
            owner {
              login
              avatarUrl
            }
            primaryLanguage {
              id
              name
            }
            updatedAt
          }
      }
    }
  }
`;

export const REPOSITORY_INFO = gql`
  query($owner: String! $name: String!){
    repository(owner: $owner name: $name) {
      id
      name
      description
      stargazers {
        totalCount
      }
      owner {
        login
        avatarUrl
      }
      primaryLanguage {
        id
        name
      }
      updatedAt
    }
  }
`;
