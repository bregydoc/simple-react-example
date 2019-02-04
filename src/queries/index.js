import gql from "graphql-tag";

export const GET_PERSONS = gql`
  query {
    persons {
      id
      name
      lastname
      photo
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation AddTodo($name: String!, $lastname: String!, $photo: String!) {
    createPerson(data: { name: $name, lastname: $lastname, photo: $photo }) {
      id
      name
      lastname
      photo
    }
  }
`;
