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
        return person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => (
            <Tile
              key={project.id}
              row={isMultipleRow ? rowIndex + rows : rows}
              data={project}
              zoom={zoom}
              onTileClick={onTileClick}></Tile>
          ))
        );
      })
      .flat(2);
  }, [data, onTileClick, zoom]);

  return <>{placeTiles()}</>;
};

export default Tiles;
