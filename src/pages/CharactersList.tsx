import React from "react";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return <div>spinner...</div>;
  }

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <>
            <div>
              <Link to={`/${character.id}`}>
                {/* <img src={character.image} /> */}
                <h2>{character.name}</h2>
              </Link>
              <p>
                {character.status}, {character.species}
              </p>
              <p>{character.origin.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};
