import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";
import { useParams } from "react-router";

export const Character = () => {
  const { id } = useParams();

  console.log("id from characters list is...", id);

  const { error, loading, data } = useCharacter(id);

  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return <div>spinner...</div>;
  }

  return (
    <>
      <div className="Character">
        <img src={data.character.image} width={100} height={100} />
        <div className="Character-content">
          <h2>{data.character.name}</h2>
          <p>{data.character.gender}</p>
          <p>
            {data.character.status}, {data.character.species}
          </p>
          <div className="Character-episode">
            <p>{data.character.origin.name}</p>
            {data.character.episode.map((episode) => {
              return <div>{episode.name}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
