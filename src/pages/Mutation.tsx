import { gql, useMutation } from "@apollo/client";

// DOES NOT REALLY EXIST, BUT AS AN EXAMPLE OF A MUTATION
const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!, $age: Int!) {
    createCharacter(record: { name: $name, age: $age }) {
      record {
        name
      }
    }
  }
`;

export const Mutation = () => {
  const [createCharacter, { error, loading, data }] = useMutation(
    CREATE_CHARACTER,
    {
      variables: {
        name: "Luffy",
        age: "17",
      },
    }
  );

  return (
    <div>
      <button onClick={() => createCharacter()}></button>
      {loading && <div>spinner...</div>}
      {error && <div>error...</div>}
      {data && <div>data...</div>}
    </div>
  );
};
