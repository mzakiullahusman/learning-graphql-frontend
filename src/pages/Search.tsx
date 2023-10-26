import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setNameSearch] = useState("");

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  console.log({ called });

  return (
    <div>
      <input value={name} onChange={(e) => setNameSearch(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>error...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
