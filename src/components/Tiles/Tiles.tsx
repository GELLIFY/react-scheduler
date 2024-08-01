import { FC, useCallback } from "react";
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";

const Tiles: FC<TilesProps> = ({ data, zoom, onTileClick, isMultipleRow }) => {
  const placeTiles = useCallback((): PlacedTiles => {
    let rows = 0;
    return data
      .map((person, personIndex) => {
        if (personIndex > 0) {
          rows += isMultipleRow
            ? Math.max(data[personIndex - 1].data.length, 1)
            : (data[personIndex - 1].data.length, 1);
        }
        if (person.data.length === 0) {
          /*TODO =>
              if you want to get a different color
              tile when you are not given for a person,
              you can write a component here,
              this is a work around.
           */
        }
        return person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => (
            <Tile
              key={project.id}
              row={isMultipleRow ? rowIndex + rows : rows}
              data={project}
              zoom={zoom}
              onTileClick={onTileClick}
            />
          ))
        );
      })
      .flat(2);
  }, [data, onTileClick, zoom]);

  return <>{placeTiles()}</>;
};

export default Tiles;
